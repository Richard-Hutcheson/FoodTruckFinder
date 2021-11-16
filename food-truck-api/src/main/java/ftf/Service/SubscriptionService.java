package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Repository.SubscriptionRepository;
import ftf.Repository.UserRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Subscription;
import ftf.classes.User;
import ftf.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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


    public Subscription subscribe(@PathVariable String username,@PathVariable String ftName) {
        Optional<User> user = userService.findByUsername(username);
        Optional<FoodTruck> foodTruck = foodTruckService.findFoodTruckByTruckName(ftName);
        if(!user.isPresent()){
            throw new UserNotFoundException("User not found");
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
}
