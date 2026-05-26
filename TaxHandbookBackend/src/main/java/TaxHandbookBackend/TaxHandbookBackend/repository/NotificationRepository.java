package TaxHandbookBackend.TaxHandbookBackend.repository;

import TaxHandbookBackend.TaxHandbookBackend.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByActiveTrueOrderByCreatedAtDesc();
    /** Public global banners only (no per-user targeting). */
    List<Notification> findByActiveTrueAndRecipientEmailIsNullAndPagePathIsNullOrderByCreatedAtDesc();
    /** Public page banners only. */
    List<Notification> findByActiveTrueAndRecipientEmailIsNullAndPagePathOrderByCreatedAtDesc(String pagePath);
    List<Notification> findAllByOrderByCreatedAtDesc();
}
