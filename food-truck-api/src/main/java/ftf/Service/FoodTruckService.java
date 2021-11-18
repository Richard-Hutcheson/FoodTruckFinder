package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.UserRepository;
import ftf.classes.FoodTruck;
import ftf.classes.FoodType;
import ftf.classes.User;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.InvalidLoginException;
import ftf.exceptions.TruckNameTakenException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.*;

@Service
public class FoodTruckService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    UserRepository userRepository;

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

    public List<FoodTruck> getTruckDetailsByLikeName(String name) {
        List<FoodTruck> foodTruckContains = foodTruckRepository.findByTruckNameContains(name);
        List<FoodTruck> foodTruckLike = foodTruckRepository.findByTruckNameLike('%' + name + '%');

        if (foodTruckContains.isEmpty() && foodTruckLike.isEmpty())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        Set<FoodTruck> unionFound = new HashSet<>();

        unionFound.addAll(foodTruckContains);
        unionFound.addAll(foodTruckLike);

        return new ArrayList<>(unionFound);
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

    public FoodTruck createNewTruck(FoodTruck ft) {
        if (foodTruckRepository.findFoodTruckByTruckName(ft.getTruckName()).isPresent())
            throw new TruckNameTakenException("Truck Name already exist");

        return foodTruckRepository.save(ft);
    }

    public void deleteTruck(FoodTruck ft) {
        Optional<FoodTruck> deleteTruck = foodTruckRepository.findFoodTruckByTruckID(ft.getTruckID());

        if (!deleteTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        foodTruckRepository.delete(deleteTruck.get());
    }

    public void deleteTruck(String name) {
        Optional<FoodTruck> deleteTruck = foodTruckRepository.findFoodTruckByTruckName(name);

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
        up.setMenuURL(ft.getMenuURL());

        Optional<FoodTruck> checkTruck = foodTruckRepository.findFoodTruckByTruckName(up.getTruckName());

        if (checkTruck.isPresent())
            throw new TruckNameTakenException("Food truck name already taken");

        return foodTruckRepository.save(up);

    }

    public List<FoodTruck> getTrucksByFoodType(String st) {
        List<FoodTruck> list = foodTruckRepository.findFoodTrucksByFoodType(st);

        if (list.isEmpty())
            throw new FoodTruckNotFoundException("Food Truck by type " + st + " could not be found");

        return list;
    }

    public List<FoodTruck> getFoodTrucksByUsername(String name) {
        Optional<User> user = userRepository.findByUsername(name);

        // check if the user is an owner
        if (!user.get().getRole().equalsIgnoreCase("O"))
            throw new InvalidLoginException("User is not an authorized truck owner");


        List<FoodTruck> allFoodTrucks = foodTruckRepository.findAll();
        List<FoodTruck> foundTrucks = new ArrayList<FoodTruck>();

        for (FoodTruck ft : allFoodTrucks) {

            // if the food truck owner equals the passed in user
            if (ft.getOwner().equals(user.get())) {

                // add the food truck to the list
                foundTrucks.add(ft);
            }
        }

        if (foundTrucks.isEmpty())
            throw new FoodTruckNotFoundException("User does not own any food trucks");

        return foundTrucks;
    }
}
