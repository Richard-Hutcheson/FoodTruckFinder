package ftf.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.classes.FoodTruck;
import ftf.classes.FoodType;
import ftf.classes.View;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class FoodTruckController {

    @Autowired
    private FoodTruckService foodTruckService;

    @Autowired
    private ReviewService reviewService;


    @GetMapping("/truckDetails")
    public Optional<FoodTruck> getTruckDetails(@RequestBody FoodTruck ft) {
        return foodTruckService.getTruckDetails(ft);
    }

    @GetMapping("/truckDetails/name/{name}")
    public Optional<FoodTruck> getTruckDetailsByName(@PathVariable String name) {
        return foodTruckService.getTruckDetailsByName(name);
    }

    // WORK IN PROGRESS: WILL RETURN A LIST OF TRUCKS SIMILAR TO SEARCH NAME
    @GetMapping("/truckDetails/names/{name}")
    public List<FoodTruck> getTrucksByLikeNames(@PathVariable String name) {
        return foodTruckService.getTruckDetailsByLikeName(name);
    }

    @GetMapping("/truckDetails/id/{id}")
    public Optional<FoodTruck> getTruckDetailsById(@PathVariable Long id) { return foodTruckService.getTruckDetailsById(id); }

    @GetMapping("/truckDetails/priceRange/{min}/{max}")
    public List<FoodTruck> getTrucksByPriceRange(@PathVariable double min, @PathVariable double max) { return foodTruckService.getTrucksPriceRange(min, max); }

    @GetMapping("/truckDetails/foodType/{foodType}")
    public List<FoodTruck> getTrucksByFoodType(@PathVariable String foodType) { return foodTruckService.getTrucksByFoodType(foodType); }

    @GetMapping("/truckDetails/all")
    public List<FoodTruck> getTrucks() { return foodTruckService.getTrucks(); }

    @PostMapping("/createTruck")
    public FoodTruck createNewTruck(@RequestBody FoodTruck ft) { return foodTruckService.createNewTruck(ft); }

    @DeleteMapping("/deleteTruck")
    public void deleteTruck(@RequestBody FoodTruck ft) {
        foodTruckService.deleteTruck(ft);

    }

    @DeleteMapping("/deleteTruck/{name}")
    public void deleteTruckByName(@PathVariable String name) {
        foodTruckService.deleteTruck(name);
    }

    @PatchMapping("/editTruck")
    public Optional<FoodTruck> editTruckDetails(@RequestBody FoodTruck ft) {
        return Optional.of(foodTruckService.editTruckDetails(ft));
    }
}
