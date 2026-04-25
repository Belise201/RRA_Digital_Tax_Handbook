package TaxHandbookBackend.TaxHandbookBackend.service;

import TaxHandbookBackend.TaxHandbookBackend.dto.AdminDTOs;
import TaxHandbookBackend.TaxHandbookBackend.model.PageContent;
import TaxHandbookBackend.TaxHandbookBackend.repository.PageContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContentService {

    private final PageContentRepository repo;

    public List<AdminDTOs.PageContentDTO> getAllContent() {
        return repo.findAllByOrderByLastEditedAtDesc().stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<AdminDTOs.PageContentDTO> getByPath(String pagePath) {
        return repo.findByPagePath(pagePath).map(this::toDTO);
    }

    public AdminDTOs.PageContentDTO save(AdminDTOs.SavePageContentRequest req, String adminEmail) {
        PageContent pc = repo.findByPagePath(req.getPagePath())
                .orElse(PageContent.builder()
                        .pagePath(req.getPagePath())
                        .active(true)
                        .build());
        pc.setPageTitle(req.getPageTitle());
        pc.setContent(req.getContent());
        pc.setLastEditedBy(adminEmail);
        return toDTO(repo.save(pc));
    }

    /** Soft-hide a page by its DB id (sets active = false). */
    public void hideById(Long id, String adminEmail) {
        repo.findById(id).ifPresent(pc -> {
            pc.setActive(false);
            pc.setLastEditedBy(adminEmail);
            repo.save(pc);
        });
    }

    /** Show (restore) a page by its DB id (sets active = true). */
    public void showById(Long id, String adminEmail) {
        repo.findById(id).ifPresent(pc -> {
            pc.setActive(true);
            pc.setLastEditedBy(adminEmail);
            repo.save(pc);
        });
    }

    /**
     * Hide a page by path.
     * Creates a PageContent record with active=false if one does not yet exist.
     * Used when admin deletes a page that has no content override yet.
     */
    public AdminDTOs.PageContentDTO hideByPath(String pagePath, String pageTitle, String adminEmail) {
        PageContent pc = repo.findByPagePath(pagePath)
                .orElse(PageContent.builder()
                        .pagePath(pagePath)
                        .pageTitle(pageTitle != null ? pageTitle : pagePath)
                        .content("")
                        .active(true)
                        .build());
        pc.setActive(false);
        pc.setLastEditedBy(adminEmail);
        return toDTO(repo.save(pc));
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    private AdminDTOs.PageContentDTO toDTO(PageContent pc) {
        return new AdminDTOs.PageContentDTO(
                pc.getId(), pc.getPagePath(), pc.getPageTitle(),
                pc.getContent(), pc.getLastEditedBy(),
                pc.getLastEditedAt(), pc.isActive());
    }
}
