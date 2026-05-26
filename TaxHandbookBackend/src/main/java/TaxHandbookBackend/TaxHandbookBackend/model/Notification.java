package TaxHandbookBackend.TaxHandbookBackend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 2000)
    private String message;

    /** null = global banner; set to a page path for page-specific notice */
    @Column(name = "page_path", length = 200)
    private String pagePath;

    /**
     * When set, this notification is only shown to that user in their inbox (not on public banners).
     * null = visible to everyone (subject to global vs page rules).
     */
    @Column(name = "recipient_email", length = 200)
    private String recipientEmail;

    @Column(nullable = false)
    private boolean active;

    @Column(name = "created_by", length = 200)
    private String createdBy;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (!active) active = true;
    }
}
