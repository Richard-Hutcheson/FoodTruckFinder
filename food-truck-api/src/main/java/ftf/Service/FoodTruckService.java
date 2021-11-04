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

    public FoodTruck createNewTruck(FoodTruck ft) { return foodTruckRepository.save(ft); }

    public void deleteTruck(FoodTruck ft) {
        Optional<FoodTruck> deleteTruck = foodTruckRepository.findFoodTruckByTruckID(ft.getTruckID());

        if (!deleteTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        foodTruckRepository.delete(deleteTruck.get());
    }

    public FoodTruck editTruckDetails(FoodTruck ft) {
        Optional<FoodTruck> updateTruck = foodTruckRepository.findFoodTruckByTruckID(ft.getTruckID());

        if (!updateTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        FoodTruck up = updateTruck.get();

        up.setOwner(ft.getOwner());
        up.setTruckID(ft.getTruckID());
        up.setTruckName(ft.getTruckName());
        up.setFoodType(ft.getFoodType());
        up.setMaxRange(ft.getMaxRange());
        up.setMinRange(ft.getMinRange());
        up.setDescription(ft.getDescription());

        return foodTruckRepository.save(up);

    }
}
