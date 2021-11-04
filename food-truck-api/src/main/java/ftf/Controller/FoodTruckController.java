package ftf.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import ftf.classes.View;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class FoodTruckController {

    @Autowired
    private FoodTruckService foodTruckService;

    @GetMapping("/truckDetails")
    public Optional<FoodTruck> getTruckDetails(@RequestBody FoodTruck ft) {
        return foodTruckService.getTruckDetails(ft);
    }

    @GetMapping("/truckDetails/name/{name}")
    public Optional<FoodTruck> getTruckDetailsByName(@PathVariable String name) {
        return foodTruckService.getTruckDetailsByName(name);
    }

    @GetMapping("/truckDetails/id/{id}")
    public Optional<FoodTruck> getTruckDetailsById(@PathVariable Long id) {
        return foodTruckService.getTruckDetailsById(id);
    }

    @GetMapping("/truckDetails/priceRange/{min}/{max}")
    public List<FoodTruck> getTrucksByPriceRange(@PathVariable double min, @PathVariable double max) {
        return foodTruckService.getTrucksPriceRange(min, max);
    }

    @GetMapping("/truckDetails/all")
    public List<FoodTruck> getTrucks() { return foodTruckService.getTrucks(); }

    @PostMapping("/createTruck")
    public FoodTruck createNewTruck(@RequestBody FoodTruck ft) { return foodTruckService.createNewTruck(ft); }

    @DeleteMapping("/deleteTruck")
    public void deleteTruck(@RequestBody FoodTruck ft) { foodTruckService.deleteTruck(ft); }

    @PatchMapping("/editTruck")
    public FoodTruck editTruckDetails(@RequestBody FoodTruck ft) {
        return foodTruckService.editTruckDetails(ft);
    }

}
