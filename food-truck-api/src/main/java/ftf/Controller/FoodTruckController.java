package ftf.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import ftf.classes.View;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class FoodTruckController {

    @Autowired
    private FoodTruckService foodTruckService;

    @GetMapping("/truckDetails")
    @JsonView(View.UserView.class)
    public FoodTruck getTruckDetails(@RequestBody FoodTruck ft) {
        return foodTruckService.getTruckDetails(ft);
    }

//    @GetMapping("/truckDetails")
//    public FoodTruck getTruckDetails(@RequestAttribute double minPrice, @RequestAttribute double maxPrice) {
//
//    }

}
