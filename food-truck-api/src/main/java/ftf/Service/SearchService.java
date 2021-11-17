package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RouteRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.RouteNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SearchService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    RouteRepository routeRepository;

    public List<FoodTruck> searchTrucks(String searchTrucks) {

        String[] searchTrucksList = searchTrucks.split(" ");

        ArrayList<FoodTruck> foodTrucks = new ArrayList<>();

        for (String str : searchTrucksList) {
            foodTrucks.addAll(foodTruckRepository.findByTruckNameLike(str));
            foodTrucks.addAll(foodTruckRepository.findByTruckNameContains(str));
            foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodType(str));
            foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodTypeContains(str));
        }

        Set<FoodTruck> foodTruckSet = new HashSet<>(foodTrucks);

        if (foodTrucks.isEmpty())
            throw new FoodTruckNotFoundException("Food Truck Not Found");

        return new ArrayList<>(foodTruckSet);
    }

    public List<Route> searchNearByTrucks(String cityPref) {
        List<Route> routes = routeRepository.findRoutesByCity(cityPref);

        if (routes.isEmpty())
            throw new RouteNotFoundException("Route not found");

        return routes;
    }


}
