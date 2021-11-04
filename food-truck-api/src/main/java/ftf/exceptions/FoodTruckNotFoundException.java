package ftf.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class FoodTruckNotFoundException extends RuntimeException {
    public FoodTruckNotFoundException(String message) { super(message); }
}
