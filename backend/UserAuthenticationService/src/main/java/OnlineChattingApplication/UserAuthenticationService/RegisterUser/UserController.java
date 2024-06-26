package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

//  New User
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    void AddUser(@Valid @RequestBody User user)
    {
        _userService.RegisterNewUser(user);
    }

//  Delete User
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{id}")
    void DeleteUser(@PathVariable int id)
    {
        boolean userDeleted = _userService.DeleteUser(id);
        if(userDeleted) return;
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found!");
    }

//  Update User
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    void UpdateUser(@PathVariable int id, @Valid @RequestBody User user)
    {
        _userService.UpdateUser(id, user);
    }

//  Get Single User
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    User GetUserById(@PathVariable int id)
    {
        Optional<User> user = _userService.GetUserById(id);
        if(user.isPresent()) return user.get();
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found!");
    }
}
