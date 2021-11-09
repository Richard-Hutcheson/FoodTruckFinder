package ftf.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class TruckNameTakenException extends RuntimeException {
    public TruckNameTakenException(String message) { super(message); }
}
