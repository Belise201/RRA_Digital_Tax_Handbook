package TaxHandbookBackend.TaxHandbookBackend.service;

import TaxHandbookBackend.TaxHandbookBackend.dto.AdminDTOs;
import TaxHandbookBackend.TaxHandbookBackend.model.AuditLog;
import TaxHandbookBackend.TaxHandbookBackend.repository.AuditLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuditLogService {

    private final AuditLogRepository repo;

    public void log(String adminEmail, String action, String targetEntity,
                    String targetId, String details) {
        AuditLog entry = AuditLog.builder()
                .adminEmail(adminEmail)
                .action(action)
                .targetEntity(targetEntity)
                .targetId(targetId)
                .details(details)
                .build();
        repo.save(entry);
    }

    public List<AdminDTOs.AuditLogDTO> getRecentLogs(int limit) {
        return repo.findAllByOrderByCreatedAtDesc(PageRequest.of(0, limit))
                .getContent()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    private AdminDTOs.AuditLogDTO toDTO(AuditLog l) {
        return new AdminDTOs.AuditLogDTO(
                l.getId(), l.getAdminEmail(), l.getAction(),
                l.getTargetEntity(), l.getTargetId(),
                l.getDetails(), l.getCreatedAt());
    }
}
