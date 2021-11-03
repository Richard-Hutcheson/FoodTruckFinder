package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.classes.FoodTruck;
import ftf.exceptions.FoodTruckNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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

    public FoodTruck getTruckDetailsByName(String name) {
        return new FoodTruck();
    }

    public List<FoodTruck> getTrucksPriceRange(double min, double max) {
        List<FoodTruck> foodTrucks = foodTruckRepository.findFoodTrucksByMinRangeIsGreaterThanEqualAndMaxRangeIsLessThanEqual(min, max);

        return foodTrucks;
    }

    public FoodTruck getTruckDetailsById(Long id) {
        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckID(id);

        if (!foodTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return foodTruck.get();
    }
}
