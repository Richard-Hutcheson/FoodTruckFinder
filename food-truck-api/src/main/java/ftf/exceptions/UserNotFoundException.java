package ftf.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) { super(message); }
}
