package ftf.Controller;

import ftf.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;


@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(InvalidLoginException.class)
    public ResponseEntity<Object>handleInvalidLoginException(InvalidLoginException ex,
                                                        WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(), HttpStatus.NOT_FOUND, LocalDateTime.now()), HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(UsernameTakenException.class)
    public ResponseEntity<Object>handleUsernameTakenException(UsernameTakenException ex,
                                                              WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.CONFLICT,LocalDateTime.now()),HttpStatus.CONFLICT);

    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Object>handleUserNotFoundException(UserNotFoundException ex,
                                                             WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.NOT_FOUND,LocalDateTime.now()),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(FoodTruckNotFoundException.class)
    public ResponseEntity<Object>handleFoodTruckNotFoundException(FoodTruckNotFoundException ex,
                                                             WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.NOT_FOUND,LocalDateTime.now()),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(TruckNameTakenException.class)
    public ResponseEntity<Object>handleTruckNameTakenException(TruckNameTakenException ex,
                                                             WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.CONFLICT,LocalDateTime.now()),HttpStatus.CONFLICT);
    }

    @ExceptionHandler(FoodTypeNotFoundException.class)
    public ResponseEntity<Object>handleTruckNameTakenException(FoodTypeNotFoundException ex,
                                                               WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.NOT_FOUND,LocalDateTime.now()),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RouteNotFoundException.class)
    public ResponseEntity<Object>handleTruckNameTakenException(RouteNotFoundException ex,
                                                               WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.NOT_FOUND,LocalDateTime.now()),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(SubscriptionDoesntExist.class)
    public ResponseEntity<Object>handleSubscriptionDoesntExist(SubscriptionDoesntExist ex,
                                                               WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(),HttpStatus.NOT_FOUND,LocalDateTime.now()),HttpStatus.NOT_FOUND);
    }


}
