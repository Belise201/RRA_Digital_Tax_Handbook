package TaxHandbookBackend.TaxHandbookBackend.controller;

import TaxHandbookBackend.TaxHandbookBackend.service.AnalyticsService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    @PostMapping("/track")
    public ResponseEntity<?> track(@RequestBody TrackRequest req) {
        analyticsService.track(
                req.getEventType(), req.getSessionId(),
                req.getPagePath(), req.getReferrerPath(),
                req.getSearchQuery(), req.getUserEmail());
        return ResponseEntity.ok().build();
    }

    @Data
    public static class TrackRequest {
        private String eventType;
        private String sessionId;
        private String pagePath;
        private String referrerPath;
        private String searchQuery;
        private String userEmail;
    }
}
