package OnlineChattingApplication.UserAuthenticationService.Services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JWTService {

    @Value("${security.jwt.secret-key}")
    private String secretKey;

    @Value("${security.jwt.expiration-time}")
    private long jwtExpirationTime;

    public String ExtractUserName(String token) {
        return ExtractClaim(token, Claims::getSubject);
    }

    public <T> T ExtractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = ExtractClaims(token);
        return claimsResolver.apply(claims);
    }

    public String GenerateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return CreateToken(claims, username);
    }

    public String GenerateToken(Map<String, Object> claims, UserDetails userDetails) {
        return CreateToken(claims, userDetails.getUsername());
    }

    public Date ExtractExpiration(String token) {
        return ExtractClaim(token, Claims::getExpiration);
    }

    public boolean IsTokenExpired(String token) {
        return ExtractExpiration(token).before(new Date());
    }

    public boolean ValidateToken(String token, UserDetails userDetails) {
        final String username = ExtractUserName(token);
        return (username.equals(userDetails.getUsername()) && !IsTokenExpired(token));
    }

    private String CreateToken(Map<String, Object> claims, String subject) {
        return Jwts
                .builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + jwtExpirationTime))
                .signWith(GetSignInKey())
                .compact();
    }

    private Claims ExtractClaims(String token) {
        SecretKey key = GetSignInKey();
        return Jwts
                .parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey GetSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

