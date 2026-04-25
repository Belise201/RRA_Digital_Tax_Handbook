package TaxHandbookBackend.TaxHandbookBackend.repository;

import TaxHandbookBackend.TaxHandbookBackend.model.PageContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PageContentRepository extends JpaRepository<PageContent, Long> {
    Optional<PageContent> findByPagePath(String pagePath);
    List<PageContent> findAllByOrderByLastEditedAtDesc();
}
