package ftf.errors;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@EqualsAndHashCode(callSuper = true)
@Data
//@ResponseStatus(code = HttpStatus.UNAUTHORIZED,reason = "No user found")
public class InvalidLoginException extends Exception{
    public InvalidLoginException(String message){
        super(message);
    }
}
