package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class RegisterUserController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    String HelloWorld()
    {
        return "Hello World!";
    }
}
