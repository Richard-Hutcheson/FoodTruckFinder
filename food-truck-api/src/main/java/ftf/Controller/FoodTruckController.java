package ftf.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import ftf.classes.View;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class FoodTruckController {

    @Autowired
    private FoodTruckService foodTruckService;

    @GetMapping("/truckDetails")
    @JsonView(View.FoodTruckView.class)
    public FoodTruck getTruckDetails(@RequestBody FoodTruck ft) {
        return foodTruckService.getTruckDetails(ft);
    }

    @GetMapping("/truckDetails/{name}")
    @JsonView(View.FoodTruckView.class)
    public FoodTruck getTruckDetailsByName(@PathVariable String name) {
        return foodTruckService.getTruckDetailsByName(name);
    }

    @GetMapping("/truckDetails/{id}")
    @JsonView(View.FoodTruckView.class)
    public FoodTruck getTruckDetailsById(@PathVariable Long id) {
        return foodTruckService.getTruckDetailsById(id);
    }

    @GetMapping("/truckDetails/{min}/{max}")
    @JsonView(View.FoodTruckView.class)
    public List<FoodTruck> getTrucksByPriceRange(@PathVariable double min, @PathVariable double max) {
        return foodTruckService.getTrucksPriceRange(min, max);
    }

}
