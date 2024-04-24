package OnlineChattingApplication.UserAuthenticationService.AuthenticateUser;

import OnlineChattingApplication.UserAuthenticationService.AuthenticateUser.DTOs.UserEmailPasswordDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AuthenticationController {
    private final AuthenticationService _authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this._authenticationService = authenticationService;
    }

    @PostMapping("/login")
    ResponseEntity<String> Login(@RequestBody UserEmailPasswordDTO userEmailPasswordDTO) {
        _authenticationService.Login(userEmailPasswordDTO);
        return ResponseEntity.ok("Login successful");
    }

    @PostMapping("/password")
    ResponseEntity<String> ChangePassword(@RequestBody UserEmailPasswordDTO userEmailPasswordDTO) {
        _authenticationService.UpdateUserPassword(userEmailPasswordDTO);
        return ResponseEntity.ok("Password changed successfully");
    }
}
