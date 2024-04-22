package OnlineChattingApplication.UserAuthenticationService.RegisterUser;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    @NotEmpty
    private String username;

    @Column(name = "email")
    @NotEmpty
    private String email;

    @Column(name = "password")
    @NotEmpty
    private String password;

    @Column(name = "salt")
    @NotEmpty
    private String salt;

    @Column(name = "role")
    private String role;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;
}
