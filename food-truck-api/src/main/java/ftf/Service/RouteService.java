package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RouteRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import ftf.exceptions.FoodTruckNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.swing.text.html.Option;
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

    public Optional<Route> setRouteByTruckName(String truckName,
                                               String address,
                                               String city,
                                               String state) {

        Optional<FoodTruck> findTruck = ftService.getTruckDetailsByName(truckName);

        if (!findTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck is Not Found");

        Route route = new Route();

        route.setTruck(findTruck.get());
        route.setAddress(address);
        route.setCity(city);
        route.setState(state);

        return Optional.of(routeRepository.save(route));
    }

    public void deleteRoute(String truckName, String address, String city, String state) {
        Optional<FoodTruck> findTruck = ftService.getTruckDetailsByName(truckName);

        if (!findTruck.isPresent())
            throw new FoodTruckNotFoundException("Food Truck is Not Found");

        Optional<Route> routeToDelete = routeRepository
                .findRouteByAddressAndCityAndStateAndTruck(address, city, state, findTruck.get());

        if (!routeToDelete.isPresent()){
            try {
                throw new Exception("Route not found");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        routeRepository.delete(routeToDelete.get());


    }
}
