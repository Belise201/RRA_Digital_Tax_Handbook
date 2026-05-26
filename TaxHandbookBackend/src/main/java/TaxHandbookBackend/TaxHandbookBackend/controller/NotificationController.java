package TaxHandbookBackend.TaxHandbookBackend.controller;

import TaxHandbookBackend.TaxHandbookBackend.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    /** Returns active global notifications (page-specific if ?page= is supplied) */
    @GetMapping("/active")
    public ResponseEntity<?> getActive(@RequestParam(required = false) String page) {
        if (page != null && !page.isBlank()) {
            return ResponseEntity.ok(notificationService.getPageActiveNotifications(page));
        }
        return ResponseEntity.ok(notificationService.getGlobalActiveNotifications());
    }

    /**
     * Broadcast-only list (no per-user rows). Kept for backwards compatibility;
     * signed-in taxpayers should prefer {@code /inbox} with a Bearer token.
     */
    @GetMapping("/all-active")
    public ResponseEntity<?> getAllActive() {
        return ResponseEntity.ok(notificationService.getActiveNotifications());
    }

    /**
     * Taxpayer bell: broadcast notifications plus any targeted to this user's email.
     * Pass {@code Authorization: Bearer &lt;jwt&gt;}. Returns empty list if not authenticated.
     */
    @GetMapping("/inbox")
    public ResponseEntity<?> getInbox(Authentication auth) {
        if (auth == null || !auth.isAuthenticated()) {
            return ResponseEntity.ok(List.of());
        }
        Object principal = auth.getPrincipal();
        if (principal == null || "anonymousUser".equals(principal)) {
            return ResponseEntity.ok(List.of());
        }
        String email = principal.toString();
        return ResponseEntity.ok(notificationService.getInboxForUser(email));
    }
}
