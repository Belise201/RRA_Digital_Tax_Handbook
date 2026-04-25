package TaxHandbookBackend.TaxHandbookBackend.dto;

import lombok.Data;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class AuthDTOs {

    @Data
    public static class LoginRequest {
        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        private String email;

        @NotBlank(message = "Password is required")
        private String password;

        /** The role the user selected in the UI: "admin" or "taxpayer" */
        private String requestedRole;
    }

    @Data
    public static class RegisterRequest {
        @NotBlank(message = "First name is required")
        private String firstName;

        @NotBlank(message = "Last name is required")
        private String lastName;

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        private String email;

        @NotBlank(message = "Password is required")
        @Size(min = 6, message = "Password must be at least 6 characters")
        private String password;
    }

    @Data
    public static class AuthResponse {
        private String token;
        private String role;
        private String email;
        private String firstName;
        private String lastName;
        private String message;

        public AuthResponse(String token, String role, String email, String firstName, String lastName) {
            this.token = token;
            this.role = role;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public AuthResponse(String message) {
            this.message = message;
        }
    }
}
