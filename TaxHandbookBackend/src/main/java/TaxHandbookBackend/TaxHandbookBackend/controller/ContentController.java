package TaxHandbookBackend.TaxHandbookBackend.controller;

import TaxHandbookBackend.TaxHandbookBackend.service.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
