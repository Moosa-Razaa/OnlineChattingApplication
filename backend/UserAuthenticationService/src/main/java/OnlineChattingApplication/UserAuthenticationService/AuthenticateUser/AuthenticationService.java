package OnlineChattingApplication.UserAuthenticationService.AuthenticateUser;

import OnlineChattingApplication.UserAuthenticationService.AuthenticateUser.DTOs.UserEmailPasswordDTO;
import OnlineChattingApplication.UserAuthenticationService.RegisterUser.User;
import OnlineChattingApplication.UserAuthenticationService.RegisterUser.UserRepository;
import OnlineChattingApplication.UserAuthenticationService.Utilities.PasswordHashingService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthenticationService {

    private final UserRepository _userRepository;
    private final PasswordHashingService _passwordHashingService;

    public AuthenticationService(UserRepository userRepository, PasswordHashingService passwordHashingService)
    {
        this._userRepository = userRepository;
        this._passwordHashingService = passwordHashingService;
    }

    private User GetUserByEmail(String email)
    {
        return _userRepository
                .findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email/password."));
    }

    void Login(UserEmailPasswordDTO userEmailPasswordDTO)
    {
        User user = GetUserByEmail(userEmailPasswordDTO.email());
        String userEnteredPassword = userEmailPasswordDTO.password();

        boolean isPasswordVerified = _passwordHashingService.VerifyPassword(userEnteredPassword, user.getPassword());
        if(!isPasswordVerified) throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email/password");
    }

    void UpdateUserPassword(UserEmailPasswordDTO userEmailPasswordDTO)
    {
        User user = GetUserByEmail(userEmailPasswordDTO.email());
        String userEnteredPassword = userEmailPasswordDTO.password();

        String hashedPassword = _passwordHashingService.GetHashedPassword(userEnteredPassword);
        user.setPassword(hashedPassword);
        _userRepository.save(user);
    }
}
