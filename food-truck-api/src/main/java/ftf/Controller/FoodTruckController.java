package ftf.Controller;

import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoodTruckController {

    @Autowired
    private FoodTruckService foodTruckService;

    @Autowired
    public FoodTruckController(FoodTruckService foodTruckService) { this.foodTruckService = foodTruckService; }

    @GetMapping("/truckDetails")
    public FoodTruck getTruckDetails() {
        return foodTruckService.
    }
}
