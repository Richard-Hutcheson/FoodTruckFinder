package ftf.Controller;

import ftf.Service.SearchService;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {

    @Autowired
    SearchService searchService;

    @GetMapping("/searchTruck/{searchQuery}")
    public List<FoodTruck> searchTrucks(@PathVariable String searchQuery) {
         return searchService.searchTrucks(searchQuery);
    }

    @GetMapping("/searchTruck/nearby/{cityPref}")
    public List<Route> searchNearByTrucks(@PathVariable String cityPref) {
        return searchService.searchNearByTrucks(cityPref);
    }


}
