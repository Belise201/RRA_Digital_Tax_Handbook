package TaxHandbookBackend.TaxHandbookBackend.config;

import TaxHandbookBackend.TaxHandbookBackend.model.User;
import TaxHandbookBackend.TaxHandbookBackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Value("${app.seed-admin.enabled:false}")
    private boolean seedAdminEnabled;

    // =============================================
    // ADMIN CREDENTIALS — change after first setup
    // =============================================
    private static final String ADMIN_EMAIL    = "admin@rra.gov.rw";
    private static final String ADMIN_PASSWORD = "Admin@RRA2024";
    private static final String ADMIN_FNAME    = "RRA";
    private static final String ADMIN_LNAME    = "Administrator";

    @Override
    public void run(String... args) {
        if (!seedAdminEnabled) {
            log.info("ℹ️  Admin auto-seeding is disabled.");
            return;
        }

        if (!userRepository.existsByEmail(ADMIN_EMAIL)) {
            User admin = User.builder()
                    .email(ADMIN_EMAIL)
                    .password(passwordEncoder.encode(ADMIN_PASSWORD))
                    .firstName(ADMIN_FNAME)
                    .lastName(ADMIN_LNAME)
                    .role(User.Role.ADMIN)
                    .build();
            userRepository.save(admin);
            log.info("✅ Admin user created: {}", ADMIN_EMAIL);
        } else {
            log.info("ℹ️  Admin user already exists, skipping seed.");
        }
    }
}
