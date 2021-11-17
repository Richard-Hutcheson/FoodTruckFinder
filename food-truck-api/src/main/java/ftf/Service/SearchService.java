package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.classes.FoodTruck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    public List<FoodTruck> searchTrucks(String searchTrucks) {

        String[] searchTrucksList = searchTrucks.split(" ");

        ArrayList<FoodTruck> foodTrucks = new ArrayList<>();

        for (String str : searchTrucksList) {
            foodTrucks.retainAll(foodTruckRepository.findByTruckNameLike(searchTrucks));
            foodTrucks.retainAll(foodTruckRepository.findByTruckNameContains(searchTrucks));
            foodTrucks.retainAll(foodTruckRepository.findFoodTrucksByFoodType(searchTrucks.toUpperCase()));
        }

        return foodTrucks;
    }

}
