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
    FoodTruckService ftService;



    public List<Route> getRoutesByTruckName(String truckName) {
        Optional<FoodTruck> truck = ftService.getTruckDetailsByName(truckName);
        if(truck.isPresent()){
            List<Route> routes = routeRepository.findByTruck(truck.get());
            return routes;
        }else{
            throw new FoodTruckNotFoundException("Food Truck not found");
        }
    }
}
