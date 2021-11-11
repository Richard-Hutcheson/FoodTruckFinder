package ftf.Controller;

import ftf.Service.FoodTruckService;
import ftf.Service.RouteService;
import ftf.classes.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
