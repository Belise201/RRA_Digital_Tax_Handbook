package TaxHandbookBackend.TaxHandbookBackend.repository;

import TaxHandbookBackend.TaxHandbookBackend.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByActiveTrueOrderByCreatedAtDesc();
    List<Notification> findByActiveTrueAndPagePathIsNullOrderByCreatedAtDesc();
    List<Notification> findByActiveTrueAndPagePathOrderByCreatedAtDesc(String pagePath);
    List<Notification> findAllByOrderByCreatedAtDesc();
}
