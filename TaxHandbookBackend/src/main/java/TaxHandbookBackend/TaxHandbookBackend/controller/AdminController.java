package TaxHandbookBackend.TaxHandbookBackend.controller;

import TaxHandbookBackend.TaxHandbookBackend.dto.AdminDTOs;
import TaxHandbookBackend.TaxHandbookBackend.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;
    private final AuditLogService auditLogService;
    private final NotificationService notificationService;
    private final ContentService contentService;

    // ── Dashboard ──────────────────────────────────────────────────────────────
    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboard() {
        return ResponseEntity.ok(adminService.getDashboardMetrics());
    }

    // ── Users ──────────────────────────────────────────────────────────────────
    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(adminService.getAllUsers());
    }

    @PutMapping("/users/{id}/role")
    public ResponseEntity<?> updateRole(@PathVariable Long id,
                                        @RequestBody AdminDTOs.UpdateUserRoleRequest req,
                                        Authentication auth) {
        return ResponseEntity.ok(adminService.updateUserRole(id, req.getRole(), auth.getName()));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id, Authentication auth) {
        adminService.deleteUser(id, auth.getName());
        return ResponseEntity.ok(Map.of("message", "User deleted successfully"));
    }

    // ── Audit Log ──────────────────────────────────────────────────────────────
    @GetMapping("/audit-logs")
    public ResponseEntity<?> getAuditLogs(@RequestParam(defaultValue = "200") int limit) {
        return ResponseEntity.ok(auditLogService.getRecentLogs(limit));
    }

    // ── Notifications ──────────────────────────────────────────────────────────
    @GetMapping("/notifications")
    public ResponseEntity<?> getNotifications() {
        return ResponseEntity.ok(notificationService.getAllNotifications());
    }

    @PostMapping("/notifications")
    public ResponseEntity<?> createNotification(@RequestBody AdminDTOs.CreateNotificationRequest req,
                                                Authentication auth) {
        AdminDTOs.NotificationDTO created = notificationService.create(req, auth.getName());
        auditLogService.log(auth.getName(), "CREATE_NOTIFICATION", "Notification",
                created.getId().toString(), "Created: \"" + created.getTitle() + "\"");
        return ResponseEntity.ok(created);
    }

    @PatchMapping("/notifications/{id}/deactivate")
    public ResponseEntity<?> deactivateNotification(@PathVariable Long id, Authentication auth) {
        notificationService.deactivate(id);
        auditLogService.log(auth.getName(), "DEACTIVATE_NOTIFICATION",
                "Notification", id.toString(), "Deactivated");
        return ResponseEntity.ok(Map.of("message", "Notification deactivated"));
    }

    @DeleteMapping("/notifications/{id}")
    public ResponseEntity<?> deleteNotification(@PathVariable Long id, Authentication auth) {
        notificationService.delete(id);
        auditLogService.log(auth.getName(), "DELETE_NOTIFICATION",
                "Notification", id.toString(), "Deleted");
        return ResponseEntity.ok(Map.of("message", "Notification deleted"));
    }

    // ── Content ────────────────────────────────────────────────────────────────
    @GetMapping("/content")
    public ResponseEntity<?> getAllContent() {
        return ResponseEntity.ok(contentService.getAllContent());
    }

    @GetMapping("/content/page")
    public ResponseEntity<?> getContentByPath(@RequestParam String path) {
        return contentService.getByPath(path)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/content")
    public ResponseEntity<?> saveContent(@RequestBody AdminDTOs.SavePageContentRequest req,
                                         Authentication auth) {
        AdminDTOs.PageContentDTO saved = contentService.save(req, auth.getName());
        auditLogService.log(auth.getName(), "SAVE_PAGE_CONTENT",
                "PageContent", req.getPagePath(),
                "Saved content for page: " + req.getPagePath());
        // Notification is created explicitly by the frontend after this call succeeds.
        return ResponseEntity.ok(saved);
    }

    /** Hide a page that already has a DB record (sets active = false). */
    @PatchMapping("/content/{id}/hide")
    public ResponseEntity<?> hideContent(@PathVariable Long id, Authentication auth) {
        contentService.hideById(id, auth.getName());
        auditLogService.log(auth.getName(), "HIDE_PAGE",
                "PageContent", id.toString(), "Page hidden");
        return ResponseEntity.ok(Map.of("message", "Page hidden"));
    }

    /** Restore a hidden page (sets active = true). */
    @PatchMapping("/content/{id}/show")
    public ResponseEntity<?> showContent(@PathVariable Long id, Authentication auth) {
        contentService.showById(id, auth.getName());
        auditLogService.log(auth.getName(), "SHOW_PAGE",
                "PageContent", id.toString(), "Page restored");
        return ResponseEntity.ok(Map.of("message", "Page restored"));
    }

    /**
     * Hide a page by path (creates a DB record with active=false if none exists).
     * Used when admin deletes a page that has never had a content override.
     */
    @PostMapping("/content/hide-path")
    public ResponseEntity<?> hideByPath(@RequestBody AdminDTOs.HidePageRequest req,
                                        Authentication auth) {
        AdminDTOs.PageContentDTO result =
                contentService.hideByPath(req.getPagePath(), req.getPageTitle(), auth.getName());
        auditLogService.log(auth.getName(), "HIDE_PAGE",
                "PageContent", req.getPagePath(), "Page hidden by path");
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/content/{id}")
    public ResponseEntity<?> deleteContent(@PathVariable Long id, Authentication auth) {
        contentService.delete(id);
        auditLogService.log(auth.getName(), "DELETE_PAGE_CONTENT",
                "PageContent", id.toString(), "Deleted page content #" + id);
        return ResponseEntity.ok(Map.of("message", "Content deleted"));
    }
}
