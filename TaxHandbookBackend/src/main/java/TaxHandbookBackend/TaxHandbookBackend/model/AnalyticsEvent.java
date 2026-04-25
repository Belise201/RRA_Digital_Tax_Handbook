package TaxHandbookBackend.TaxHandbookBackend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "analytics_events", indexes = {
    @Index(name = "idx_event_type", columnList = "event_type"),
    @Index(name = "idx_event_created", columnList = "created_at"),
    @Index(name = "idx_event_session", columnList = "session_id")
})
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class AnalyticsEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "event_type", nullable = false, length = 50)
    private String eventType;

    @Column(name = "session_id", length = 100)
    private String sessionId;

    @Column(name = "page_path", length = 200)
    private String pagePath;

    @Column(name = "referrer_path", length = 200)
    private String referrerPath;

    @Column(name = "search_query", length = 500)
    private String searchQuery;

    @Column(name = "user_email", length = 200)
    private String userEmail;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
