package TaxHandbookBackend.TaxHandbookBackend.controller;

import TaxHandbookBackend.TaxHandbookBackend.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content")
@RequiredArgsConstructor
public class ContentController {

    private final ContentService contentService;

    @GetMapping("/page")
    public ResponseEntity<?> getPageContent(@RequestParam String path) {
        return contentService.getByPath(path)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /** Public list of paths with active=false — used to hide handbook nav entries for non-admins. */
    @GetMapping("/hidden-paths")
    public ResponseEntity<List<String>> getHiddenPagePaths() {
        return ResponseEntity.ok(contentService.getHiddenPagePaths());
    }
}
