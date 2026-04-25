package TaxHandbookBackend.TaxHandbookBackend.service;

import TaxHandbookBackend.TaxHandbookBackend.dto.AdminDTOs;
import TaxHandbookBackend.TaxHandbookBackend.model.Notification;
import TaxHandbookBackend.TaxHandbookBackend.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository repo;

    public List<AdminDTOs.NotificationDTO> getAllNotifications() {
        return repo.findAllByOrderByCreatedAtDesc().stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    public List<AdminDTOs.NotificationDTO> getActiveNotifications() {
        return repo.findByActiveTrueOrderByCreatedAtDesc().stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    public List<AdminDTOs.NotificationDTO> getGlobalActiveNotifications() {
        return repo.findByActiveTrueAndPagePathIsNullOrderByCreatedAtDesc().stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    public List<AdminDTOs.NotificationDTO> getPageActiveNotifications(String pagePath) {
        return repo.findByActiveTrueAndPagePathOrderByCreatedAtDesc(pagePath).stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    public AdminDTOs.NotificationDTO create(AdminDTOs.CreateNotificationRequest req, String adminEmail) {
        Notification n = Notification.builder()
                .title(req.getTitle())
                .message(req.getMessage())
                .pagePath(req.getPagePath() != null && !req.getPagePath().isBlank()
                        ? req.getPagePath() : null)
                .active(true)
                .createdBy(adminEmail)
                .build();
        return toDTO(repo.save(n));
    }

    public void deactivate(Long id) {
        repo.findById(id).ifPresent(n -> {
            n.setActive(false);
            repo.save(n);
        });
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    private AdminDTOs.NotificationDTO toDTO(Notification n) {
        return new AdminDTOs.NotificationDTO(
                n.getId(), n.getTitle(), n.getMessage(),
                n.getPagePath(), n.isActive(),
                n.getCreatedBy(), n.getCreatedAt());
    }
}
