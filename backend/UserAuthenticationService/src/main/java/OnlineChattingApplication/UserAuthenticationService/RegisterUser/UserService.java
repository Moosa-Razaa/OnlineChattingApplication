package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository _userRepository;

    public UserService(UserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    void RegisterNewUser(User user)
    {
        _userRepository.save(user);
    }

    Optional<User> GetUserById(int id)
    {
        return _userRepository.findById(id);
    }

    void UpdateUser(int id, User updatedUser)
    {
        User user = _userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found!"));

        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setRole(updatedUser.getRole());

        _userRepository.save(user);
    }

    boolean DeleteUser(int id)
    {
        boolean userExist = _userRepository.existsById(id);
        if(!userExist) return false;

        _userRepository.deleteById(id);
        return true;
    }
}
