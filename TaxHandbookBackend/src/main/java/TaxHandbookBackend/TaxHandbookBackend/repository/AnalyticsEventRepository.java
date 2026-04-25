package TaxHandbookBackend.TaxHandbookBackend.repository;

import TaxHandbookBackend.TaxHandbookBackend.model.AnalyticsEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AnalyticsEventRepository extends JpaRepository<AnalyticsEvent, Long> {

    long countByEventType(String eventType);

    long countByEventTypeAndCreatedAtAfter(String eventType, LocalDateTime after);

    @Query("SELECT a.pagePath, COUNT(a) AS views FROM AnalyticsEvent a " +
           "WHERE a.eventType = 'PAGE_VIEW' AND a.pagePath NOT LIKE '/admin%' " +
           "GROUP BY a.pagePath ORDER BY views DESC")
    List<Object[]> findTopPages();

    @Query("SELECT a.searchQuery, COUNT(a) AS cnt FROM AnalyticsEvent a " +
           "WHERE a.eventType = 'SEARCH' AND a.searchQuery IS NOT NULL AND a.searchQuery <> '' " +
           "GROUP BY a.searchQuery ORDER BY cnt DESC")
    List<Object[]> findTopSearchTerms();

    @Query("SELECT COUNT(DISTINCT a.sessionId) FROM AnalyticsEvent a WHERE a.createdAt > :since")
    long countDistinctSessionsSince(@Param("since") LocalDateTime since);

    @Query("SELECT CAST(a.createdAt AS date), COUNT(a) FROM AnalyticsEvent a " +
           "WHERE a.eventType = 'PAGE_VIEW' AND a.createdAt > :since " +
           "GROUP BY CAST(a.createdAt AS date) ORDER BY CAST(a.createdAt AS date)")
    List<Object[]> findDailyPageViews(@Param("since") LocalDateTime since);
}
