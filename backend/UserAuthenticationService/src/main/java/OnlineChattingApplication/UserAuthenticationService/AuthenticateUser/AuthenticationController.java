package OnlineChattingApplication.UserAuthenticationService.AuthenticateUser;

import OnlineChattingApplication.UserAuthenticationService.AuthenticateUser.DTOs.LoginResponse;
import OnlineChattingApplication.UserAuthenticationService.AuthenticateUser.DTOs.UserEmailPasswordDTO;
import OnlineChattingApplication.UserAuthenticationService.RegisterUser.User;
import OnlineChattingApplication.UserAuthenticationService.Services.JWTService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService _authenticationService;
    private final JWTService jwtService;

    public AuthenticationController(AuthenticationService authenticationService, JWTService jwtService) {
        this._authenticationService = authenticationService;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    ResponseEntity<LoginResponse> Login(@RequestBody UserEmailPasswordDTO userEmailPasswordDTO) {
        User user = _authenticationService.Login(userEmailPasswordDTO);

        String jwtToken = jwtService.GenerateToken(user);
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.GetExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/password")
    ResponseEntity<String> ChangePassword(@RequestBody UserEmailPasswordDTO userEmailPasswordDTO) {
        _authenticationService.UpdateUserPassword(userEmailPasswordDTO);
        return ResponseEntity.ok("Password changed successfully");
    }
}
