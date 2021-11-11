package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RouteRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import ftf.exceptions.FoodTruckNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    FoodTruckRepository foodTruckRepository;

    public List<Route> getRoutesByTruckName(String name) {
       Optional<FoodTruck> truck = foodTruckRepository.findFoodTruckByTruckName(name);
       if(truck.isPresent()) {
           return routeRepository.findRoutesByTruckID(truck.get().getTruckID());
       }else{
          throw new FoodTruckNotFoundException("Food Truck not found");
       }
        //return Optional.of(new Route());
    }

}
