package OnlineChattingApplication.UserAuthenticationService.Services;

import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordHashingService {
    private final PasswordEncoder passwordEncoder;

    public PasswordHashingService()
    {
        passwordEncoder = new Argon2PasswordEncoder(16, 32, 1, 6000, 2);
    }

    public PasswordEncoder GetPasswordEncoder() {
        return passwordEncoder;
    }

    public String GetHashedPassword(String passwordToHash)
    {
        return passwordEncoder.encode(passwordToHash);
    }

    public boolean VerifyPassword(String passwordToHash, String hashedPasswordFromDatabase)
    {
        return passwordEncoder.matches(passwordToHash, hashedPasswordFromDatabase);
    }
}
