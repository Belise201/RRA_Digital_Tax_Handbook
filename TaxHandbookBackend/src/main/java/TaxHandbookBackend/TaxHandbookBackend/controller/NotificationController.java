package TaxHandbookBackend.TaxHandbookBackend.controller;

import TaxHandbookBackend.TaxHandbookBackend.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    /** Returns all active notifications (global + every page-specific) */
    @GetMapping("/all-active")
    public ResponseEntity<?> getAllActive() {
        return ResponseEntity.ok(notificationService.getActiveNotifications());
    }
}
