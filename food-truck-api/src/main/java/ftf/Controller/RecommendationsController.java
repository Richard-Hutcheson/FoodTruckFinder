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

    @GetMapping("/recommendUser/{username}")
    public List<FoodTruck> getRecommendUserByFoodType(@PathVariable String username) {
        return RecService.getRecommendUserByFoodType(username);
    }
}
