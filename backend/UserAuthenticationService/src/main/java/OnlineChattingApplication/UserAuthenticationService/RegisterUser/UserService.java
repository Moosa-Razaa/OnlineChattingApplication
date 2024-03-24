package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository _userRepository;

    public UserService(UserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    void RegisterNewUser(User user)
    {
        _userRepository.save(user);
    }

    void UpdateUser(User user)
    {
        Optional<User> userToUpdate = _userRepository.findById(user.getId());
        if(userToUpdate.isPresent())
        {

        }
    }
}
