package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Repository.SubscriptionRepository;
import ftf.Repository.UserRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Subscription;
import ftf.classes.User;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.SubscriptionDoesntExist;
import ftf.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {
    @Autowired
    SubscriptionRepository subRepo;

    @Autowired
    UserRepository userService;

    @Autowired
    FoodTruckRepository foodTruckService;


    public Subscription subscribe(String username,String ftName) {
        Optional<User> user = userService.findByUsername(username);
        Optional<FoodTruck> foodTruck = foodTruckService.findFoodTruckByTruckName(ftName);
        if(!user.isPresent()){
            throw new UserNotFoundException("User not found");
        }

        if(!foodTruck.isPresent()){
            throw new FoodTruckNotFoundException("Food Truck not found");
        }

        Subscription s = new Subscription();
        s.setTruck(foodTruck.get());
        s.setUser(user.get());

        return subRepo.save(s);
    }

    public List<Subscription> getSubscriptionsFromUser(String username) {
        Optional<User> user = userService.findByUsername(username);
        if(!user.isPresent()){
            throw new UserNotFoundException("User not found");
        }
        return subRepo.findByUser(user.get());
    }


    public void unsubscribe(String username, String ftName) {
        Optional<User> user = userService.findByUsername(username);
        Optional<FoodTruck> foodTruck = foodTruckService.findFoodTruckByTruckName(ftName);
        if(!user.isPresent()){
            throw new UserNotFoundException("User not found");
        }
        if(!foodTruck.isPresent()){
            throw new FoodTruckNotFoundException("Food truck not found");
        }

        Optional<Subscription> subscription = subRepo.findSubscriptionByUserAndTruck(user.get(),foodTruck.get());
        if(!subscription.isPresent()){
            throw new SubscriptionDoesntExist("Invalid Subscription");
        }

        subRepo.delete(subscription.get());

    }

    public List<Subscription> findSubscriptionsByTruck(String truckName){
        Optional<FoodTruck> foodTruck = foodTruckService.findFoodTruckByTruckName(truckName);
        if(!foodTruck.isPresent()){
            throw new FoodTruckNotFoundException("Food truck not found");
        }
        return subRepo.findByTruck(foodTruck.get());
    }
}
