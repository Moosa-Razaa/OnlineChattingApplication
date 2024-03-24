package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class UserController {

    private final UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    String HelloWorld()
    {
        return "Hello World!";
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void AddUser(@Validated @RequestBody User user)
    {
        _userService.RegisterNewUser(user);
    }
}
