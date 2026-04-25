package TaxHandbookBackend.TaxHandbookBackend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "page_content")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PageContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "page_path", nullable = false, unique = true, length = 200)
    private String pagePath;

    @Column(name = "page_title", length = 300)
    private String pageTitle;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "last_edited_by", length = 200)
    private String lastEditedBy;

    @Column(name = "last_edited_at")
    private LocalDateTime lastEditedAt;

    @Column(nullable = false)
    private boolean active;

    @PrePersist
    protected void onCreate() {
        lastEditedAt = LocalDateTime.now();
        if (!active) active = true;
    }

    @PreUpdate
    protected void onUpdate() {
        lastEditedAt = LocalDateTime.now();
    }
}
