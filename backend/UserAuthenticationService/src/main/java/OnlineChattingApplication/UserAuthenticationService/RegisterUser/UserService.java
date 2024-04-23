package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import OnlineChattingApplication.UserAuthenticationService.Utilities.PasswordHashingService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository _userRepository;
    private final PasswordHashingService _passwordHashingService;

    public UserService(UserRepository userRepository, PasswordHashingService passwordHashingService)
    {
        _userRepository = userRepository;
        _passwordHashingService = passwordHashingService;
    }

    void RegisterNewUser(User user)
    {
        String passwordOfUser = user.getPassword();
        String hashedPassword = _passwordHashingService.GetHashedPassword(passwordOfUser);

        user.setPassword(hashedPassword);
        _userRepository.save(user);
    }

    Optional<User> GetUserById(int id)
    {
        return _userRepository.findById(id);
    }

    boolean UpdateUser(int id, User updatedUser)
    {
        User user = _userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found!"));

        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
        user.setRole(updatedUser.getRole());

        boolean isPasswordVerified = _passwordHashingService.VerifyPassword(user.getPassword(), updatedUser.getPassword());

        if(!isPasswordVerified) return false;

        user.setPassword(updatedUser.getPassword());

        _userRepository.save(user);
        return true;
    }

    boolean DeleteUser(int id)
    {
        boolean userExist = _userRepository.existsById(id);
        if(!userExist) return false;

        _userRepository.deleteById(id);
        return true;
    }
}
