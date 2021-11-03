package ftf.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class FoodTruckNotFound extends RuntimeException {
    public FoodTruckNotFound(String message) { super(message); }
}
