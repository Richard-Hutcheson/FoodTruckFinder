package ftf.Controller;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.Service.SubscriptionService;
import ftf.Service.UserService;
import ftf.classes.*;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class SubscriptionController {
    @Autowired
    SubscriptionService subServ;

    //subscribe to truck
    @PostMapping("/subscribe/{ftName}/{username}")
    public Subscription subscribe(@PathVariable String username, @PathVariable String ftName) {
        return subServ.subscribe(username,ftName);
    }


    @DeleteMapping("/unsubscribe/{ftName}/{username}")
    public void unsubscribe(@PathVariable String username, @PathVariable String ftName) {
        subServ.unsubscribe(username,ftName);
    }

    //get all subscriptions by user
    @GetMapping("/{username}/subscriptions")
    public List<Subscription> subscriptions(@PathVariable String username){
        return subServ.getSubscriptionsFromUser(username);
    }

    @GetMapping("getSubsByTruck/{foodTruck}")
    public List<Subscription> getSubscriptionsByTruck(@PathVariable String foodTruck){
        System.out.println(foodTruck);
        return subServ.findSubscriptionsByTruck(foodTruck);
    }

}
