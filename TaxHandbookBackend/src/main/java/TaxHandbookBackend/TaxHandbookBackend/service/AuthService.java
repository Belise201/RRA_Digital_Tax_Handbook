package TaxHandbookBackend.TaxHandbookBackend.service;

import TaxHandbookBackend.TaxHandbookBackend.dto.AuthDTOs;
import TaxHandbookBackend.TaxHandbookBackend.model.User;
import TaxHandbookBackend.TaxHandbookBackend.repository.UserRepository;
import TaxHandbookBackend.TaxHandbookBackend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthDTOs.AuthResponse login(AuthDTOs.LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // Enforce role match: the role selected in the UI must match the role in the database
        if (request.getRequestedRole() != null && !request.getRequestedRole().isBlank()) {
            String requestedRoleUpper = request.getRequestedRole().toUpperCase();
            if (!user.getRole().name().equals(requestedRoleUpper)) {
                if (requestedRoleUpper.equals("ADMIN")) {
                    throw new RuntimeException("Access denied: these credentials do not belong to an admin account.");
                } else {
                    throw new RuntimeException("Invalid email or password");
                }
            }
        }

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return new AuthDTOs.AuthResponse(
                token,
                user.getRole().name(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName()
        );
    }

    public AuthDTOs.AuthResponse register(AuthDTOs.RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("An account with this email already exists");
        }

        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .role(User.Role.TAXPAYER)
                .build();

        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return new AuthDTOs.AuthResponse(
                token,
                user.getRole().name(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName()
        );
    }
}
