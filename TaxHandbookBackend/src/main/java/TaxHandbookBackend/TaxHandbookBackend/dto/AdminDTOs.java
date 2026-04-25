package TaxHandbookBackend.TaxHandbookBackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

public class AdminDTOs {

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class DashboardMetrics {
        private long totalPageViews;
        private long totalUsers;
        private long totalAdmins;
        private long totalTaxpayers;
        private long activeSessionsToday;
        private long searchesToday;
        private long pageViewsToday;
        private long activeNotifications;
        private List<PageViewStat> topPages;
        private List<SearchTermStat> topSearchTerms;
        private List<DailyViewStat> dailyViews;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class PageViewStat {
        private String pagePath;
        private long views;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class SearchTermStat {
        private String term;
        private long count;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class DailyViewStat {
        private String date;
        private long views;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class UserDTO {
        private Long id;
        private String email;
        private String firstName;
        private String lastName;
        private String role;
        private LocalDateTime createdAt;
    }

    @Data
    public static class UpdateUserRoleRequest {
        private String role;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class AuditLogDTO {
        private Long id;
        private String adminEmail;
        private String action;
        private String targetEntity;
        private String targetId;
        private String details;
        private LocalDateTime createdAt;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class NotificationDTO {
        private Long id;
        private String title;
        private String message;
        private String pagePath;
        private boolean active;
        private String createdBy;
        private LocalDateTime createdAt;
    }

    @Data
    public static class CreateNotificationRequest {
        private String title;
        private String message;
        private String pagePath;
    }

    @Data @AllArgsConstructor @NoArgsConstructor
    public static class PageContentDTO {
        private Long id;
        private String pagePath;
        private String pageTitle;
        private String content;
        private String lastEditedBy;
        private LocalDateTime lastEditedAt;
        private boolean active;
    }

    @Data
    public static class SavePageContentRequest {
        private String pagePath;
        private String pageTitle;
        private String content;
    }

    @Data
    public static class HidePageRequest {
        private String pagePath;
        private String pageTitle;
    }
}
