package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.classes.FoodTruck;
import ftf.exceptions.FoodTruckNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FoodTruckService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    public FoodTruckService(FoodTruckRepository foodTruckRepository) { this.foodTruckRepository = foodTruckRepository; }

    public FoodTruck getTruckDetails(FoodTruck ft) {

        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckID(ft.getTruckID());

        if (!foodTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return foodTruck.get();
    }
}
