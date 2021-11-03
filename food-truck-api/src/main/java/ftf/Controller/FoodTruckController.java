package ftf.Controller;

import ftf.Service.FoodTruckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoodTruckController {

    @Autowired
    private FoodTruckService foodTruckService;


}
