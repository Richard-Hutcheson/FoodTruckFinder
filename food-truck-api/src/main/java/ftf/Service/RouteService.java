package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RouteRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    FoodTruckRepository foodTruckRepository;

    public Optional<Route> getRouteByTruckName(String name) {
//        Optional<FoodTruck> truck = foodTruckRepository.findFoodTruckByTruckName(name);
//        return routeRepository.findRouteByTruckID(truck.get().getTruckID());
        return Optional.of(new Route());
    }

}
