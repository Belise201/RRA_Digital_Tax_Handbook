package TaxHandbookBackend.TaxHandbookBackend.service;

import TaxHandbookBackend.TaxHandbookBackend.dto.AdminDTOs;
import TaxHandbookBackend.TaxHandbookBackend.model.User;
import TaxHandbookBackend.TaxHandbookBackend.repository.NotificationRepository;
import TaxHandbookBackend.TaxHandbookBackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final NotificationRepository notificationRepository;
    private final AnalyticsService analyticsService;
    private final AuditLogService auditLogService;

    public AdminDTOs.DashboardMetrics getDashboardMetrics() {
        long totalUsers    = userRepository.count();
        long totalAdmins   = userRepository.countByRole(User.Role.ADMIN);
        long totalTaxpayers = userRepository.countByRole(User.Role.TAXPAYER);
        long totalPageViews = analyticsService.getTotalPageViews();
        long pageViewsToday  = analyticsService.getPageViewsToday();
        long searchesToday   = analyticsService.getSearchesToday();
        long sessionsToday   = analyticsService.getActiveSessionsToday();
        long activeNotifs    = notificationRepository.findByActiveTrueOrderByCreatedAtDesc().size();

        return new AdminDTOs.DashboardMetrics(
                totalPageViews, totalUsers, totalAdmins, totalTaxpayers,
                sessionsToday, searchesToday, pageViewsToday, activeNotifs,
                analyticsService.getTopPages(10),
                analyticsService.getTopSearchTerms(10),
                analyticsService.getDailyViews(30));
    }

    public List<AdminDTOs.UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(u -> new AdminDTOs.UserDTO(
                        u.getId(), u.getEmail(),
                        u.getFirstName(), u.getLastName(),
                        u.getRole().name(), u.getCreatedAt()))
                .collect(Collectors.toList());
    }

    public AdminDTOs.UserDTO updateUserRole(Long userId, String role, String adminEmail) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        String oldRole = user.getRole().name();
        user.setRole(User.Role.valueOf(role.toUpperCase()));
        userRepository.save(user);
        auditLogService.log(adminEmail, "UPDATE_USER_ROLE", "User",
                userId.toString(),
                "Role changed from " + oldRole + " to " + role + " for " + user.getEmail());
        return new AdminDTOs.UserDTO(user.getId(), user.getEmail(),
                user.getFirstName(), user.getLastName(),
                user.getRole().name(), user.getCreatedAt());
    }

    public void deleteUser(Long userId, String adminEmail) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        String email = user.getEmail();
        userRepository.deleteById(userId);
        auditLogService.log(adminEmail, "DELETE_USER", "User",
                userId.toString(), "Deleted user: " + email);
    }
}
