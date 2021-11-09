package ftf.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class FoodTypeNotFoundException extends RuntimeException{
    public FoodTypeNotFoundException(String msg) { super(msg); }
}
