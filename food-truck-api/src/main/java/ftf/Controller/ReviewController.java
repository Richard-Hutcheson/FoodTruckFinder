package ftf.Controller;
import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.Service.UserService;
import ftf.classes.FoodTruck;
import ftf.classes.Review;
import ftf.classes.User;
import ftf.classes.View;
import ftf.exceptions.InvalidLoginException;
import ftf.exceptions.UserNotFoundException;
import ftf.exceptions.UsernameTakenException;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class ReviewController {
    @Autowired
    ReviewService reviewService;
    @Autowired
    FoodTruckService ftService;

    /*
    @GetMapping("/{truckID}")
    public List<Review> getReviews(@PathVariable Long truckID){
        //return reviewService.getReviews(truckID);
        //return reviewService.
    }

     */
    @GetMapping("/{truckName}/reviews")
    public List<Review> getReviews(@PathVariable String truckName){
        //store information of the truck into the class
        Optional<FoodTruck> truck = ftService.getTruckDetailsByName(truckName);
        return reviewService.findByTruck(truck.get());
    }

}
