package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
        boolean result = _userService.UpdateUser(id, user);
        if(result) return;
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid user information!");
    }

//  Get Single User
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    User GetUserById(@PathVariable int id)
    {
        return _userService.GetUserById(id);
    }
}
