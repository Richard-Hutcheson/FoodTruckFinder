package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.classes.FoodTruck;
import ftf.exceptions.FoodTruckNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class FoodTruckService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    public FoodTruckService(FoodTruckRepository foodTruckRepository) { this.foodTruckRepository = foodTruckRepository; }

    public Optional<FoodTruck> getTruckDetails(FoodTruck ft) {

        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckID(ft.getTruckID());

        if (!foodTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return foodTruck;
    }

    public Optional<FoodTruck> getTruckDetailsByName(String name) {
        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckName(name);

        if (!foodTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return foodTruck;
    }

    public List<FoodTruck> getTrucksPriceRange(double min, double max) {
        List<FoodTruck> foodTrucks = foodTruckRepository.findFoodTrucksByMinRangeIsGreaterThanEqualAndMaxRangeIsLessThanEqual(min, max);

        if (foodTrucks.isEmpty())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return foodTrucks;
    }

    public Optional<FoodTruck> getTruckDetailsById(Long id) {
        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckID(id);

        if (!foodTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return foodTruck;
    }

    public List<FoodTruck> getTrucks() { return foodTruckRepository.findAll(); }
}
