package ftf.Controller;
import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.classes.FoodTruck;
import ftf.classes.Review;
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


    @GetMapping("/reviews/id/{truckID}")
    public Optional<Review> getReviewByID(@PathVariable Long truckID){
        return reviewService.findById(truckID);
    }

    @GetMapping("/reviews/name/{truckName}")
    public List<Review> getReviewByTruckName(@PathVariable String truckName){
        //store information of the truck into the class
        Optional<FoodTruck> truck = ftService.getTruckDetailsByName(truckName);
        return reviewService.findByTruck(truck.get());
    }

}
