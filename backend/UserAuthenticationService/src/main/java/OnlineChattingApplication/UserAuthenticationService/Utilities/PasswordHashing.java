package OnlineChattingApplication.UserAuthenticationService.Utilities;

import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordHashing {
    private String stringToHash;
    private final PasswordEncoder passwordEncoder;

    public PasswordHashing(String password)
    {
        stringToHash = password;
        passwordEncoder = new Argon2PasswordEncoder(16, 32, 1, 6000, 10);
    }

    public String GetHashedPassword()
    {
        return passwordEncoder.encode(stringToHash);
    }

    public boolean VerifyPassword(String hashedPasswordFromDatabase)
    {
        String hashedPassword = passwordEncoder.encode(stringToHash);
        return passwordEncoder.matches(hashedPassword, hashedPasswordFromDatabase);
    }
}
