package ftf.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

public class UsernameTakenException extends RuntimeException{
    public UsernameTakenException(String message){
        super(message);
    }
}
