package ftf.Controller;

import ftf.Service.FoodTruckService;
import ftf.Service.RouteService;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import ftf.classes.User;
import ftf.exceptions.FoodTruckNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class RouteController {

    @Autowired
    RouteService routeService;

    @GetMapping("/routes/{truckName}")
    public List<Route> getRoutesByTruckName(@PathVariable String truckName) {
        return routeService.getRoutesByTruckName(truckName);
    }

    @PostMapping("/routes/{truckName}/{address}/{city}/{state}/{schedule}")
    public Optional<Route> setRouteByTruckName(@PathVariable String truckName,
                                           @PathVariable String address,
                                           @PathVariable String city,
                                           @PathVariable String state,
                                               @PathVariable String schedule) {

        return routeService.setRouteByTruckName(truckName, address, city, state,schedule);
    }

    @DeleteMapping("/delete/route/{truckName}/{address}/{city}/{state}")
    public void deleteRoute( @PathVariable String truckName,
                             @PathVariable String address,
                             @PathVariable String city,
                             @PathVariable String state) {
        routeService.deleteRoute(truckName,address,city,state);
    }

    @GetMapping("/api/routes")
    public List<Route> getRoutes(){
        return routeService.getRoutes();
    }


}
