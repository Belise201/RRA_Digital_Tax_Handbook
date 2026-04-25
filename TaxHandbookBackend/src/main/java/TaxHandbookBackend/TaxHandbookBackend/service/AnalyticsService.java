package TaxHandbookBackend.TaxHandbookBackend.service;

import TaxHandbookBackend.TaxHandbookBackend.dto.AdminDTOs;
import TaxHandbookBackend.TaxHandbookBackend.model.AnalyticsEvent;
import TaxHandbookBackend.TaxHandbookBackend.repository.AnalyticsEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final AnalyticsEventRepository repo;

    public void track(String eventType, String sessionId, String pagePath,
                      String referrerPath, String searchQuery, String userEmail) {
        AnalyticsEvent event = AnalyticsEvent.builder()
                .eventType(eventType)
                .sessionId(sessionId)
                .pagePath(pagePath)
                .referrerPath(referrerPath)
                .searchQuery(searchQuery)
                .userEmail(userEmail)
                .build();
        repo.save(event);
    }

    public long getTotalPageViews() {
        return repo.countByEventType("PAGE_VIEW");
    }

    public long getPageViewsToday() {
        return repo.countByEventTypeAndCreatedAtAfter("PAGE_VIEW", LocalDate.now().atStartOfDay());
    }

    public long getSearchesToday() {
        return repo.countByEventTypeAndCreatedAtAfter("SEARCH", LocalDate.now().atStartOfDay());
    }

    public long getActiveSessionsToday() {
        return repo.countDistinctSessionsSince(LocalDate.now().atStartOfDay());
    }

    public List<AdminDTOs.PageViewStat> getTopPages(int limit) {
        return repo.findTopPages().stream()
                .limit(limit)
                .map(row -> new AdminDTOs.PageViewStat(
                        (String) row[0],
                        ((Number) row[1]).longValue()))
                .collect(Collectors.toList());
    }

    public List<AdminDTOs.SearchTermStat> getTopSearchTerms(int limit) {
        return repo.findTopSearchTerms().stream()
                .limit(limit)
                .map(row -> new AdminDTOs.SearchTermStat(
                        (String) row[0],
                        ((Number) row[1]).longValue()))
                .collect(Collectors.toList());
    }

    public List<AdminDTOs.DailyViewStat> getDailyViews(int days) {
        LocalDateTime since = LocalDateTime.now().minusDays(days);
        return repo.findDailyPageViews(since).stream()
                .map(row -> new AdminDTOs.DailyViewStat(
                        row[0].toString(),
                        ((Number) row[1]).longValue()))
                .collect(Collectors.toList());
    }
}
