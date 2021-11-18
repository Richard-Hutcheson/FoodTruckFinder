package ftf.exceptions;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

public class SubscriptionDoesntExist extends RuntimeException {
    public SubscriptionDoesntExist(String message) { super(message); }
}
