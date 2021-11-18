package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RouteRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.RouteNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SearchService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    RouteRepository routeRepository;

    private final String[] fillerWords = {"Food", "Truck"};

    public List<FoodTruck> searchTrucks(String searchTrucks) {

        String[] searchTrucksList = searchTrucks.split(" ");

        ArrayList<FoodTruck> foodTrucks = new ArrayList<>();
        ArrayList<FoodTruck> notFiller = new ArrayList<>();

        for (String str : searchTrucksList) {

            if (!Arrays.toString(fillerWords).toLowerCase().contains(str.toLowerCase())) {
                notFiller.addAll(foodTruckRepository.findByTruckNameLike(str));
                notFiller.addAll(foodTruckRepository.findByTruckNameContains(str));
                notFiller.addAll(foodTruckRepository.findFoodTrucksByFoodType(str));
                notFiller.addAll(foodTruckRepository.findFoodTrucksByFoodTypeContains(str));
                notFiller.addAll(foodTruckRepository.findFoodTrucksByFoodTypeLike(str));
            }
            else {
                foodTrucks.addAll(foodTruckRepository.findByTruckNameLike(str));
                foodTrucks.addAll(foodTruckRepository.findByTruckNameContains(str));
                foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodType(str));
                foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodTypeContains(str));
                foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodTypeLike(str));
            }
        }

        Set<FoodTruck> finalList = new LinkedHashSet<>();

        finalList.addAll(notFiller);
        finalList.addAll(foodTrucks);

        if (finalList.isEmpty())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return new ArrayList<>(finalList);
    }

    public List<Route> searchNearByTrucks(String cityPref) {
        List<Route> routes = routeRepository.findRoutesByCity(cityPref);

        if (routes.isEmpty())
            throw new RouteNotFoundException("Route not found");

        return routes;
    }


}
