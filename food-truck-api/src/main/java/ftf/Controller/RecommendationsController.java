package ftf.Controller;

import ftf.Service.RecommendationsService;
import ftf.classes.FoodTruck;
import ftf.classes.Recommendations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RecommendationsController {

    @Autowired
    RecommendationsService RecService;

    @GetMapping("/recommendUser/{username}/{minPrice}/{maxPrice}/{rating}/{city}/{prevHistory}")
    public List<FoodTruck> getRecommendedFoodTrucks(@PathVariable String username,
                                                    @PathVariable double minPrice,
                                                    @PathVariable double maxPrice,
                                                    @PathVariable double rating,
                                                    @PathVariable String city,
                                                    @PathVariable boolean prevHistory) {
        return RecService.getRecommendedFoodTrucks(username, minPrice, maxPrice, rating, city, prevHistory);
    }


    /*
    // gets the highest occuring food type of foodtrucks searched by user
    @GetMapping("/recommendUser/{username}")
    public List<FoodTruck> getRecommendUserByFoodType(@PathVariable String username) {
        return RecService.getRecommendUserByFoodType(username);
    }

    // When the user searches by food type on the front end
    // front end will call this endpoint to increment the recommendation occurence
    // of the food type
    @PatchMapping("/updateRecommendation/{username}/{foodType}")
    public Optional<Recommendations> updateFoodTypeRecommendation(@PathVariable String username, @PathVariable String foodType) {
        return RecService.updateFoodTypeRecommendation(username, foodType);
    }

    @PostMapping("/createUserRec/{username}")
    public Optional<Recommendations> insertUserFoodTypeRec(@PathVariable String username) {
        return RecService.saveUser(username);
    }

     */
}
