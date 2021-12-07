package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RouteRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.Service.SearchService;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
@SpringBootTest(classes = {ReviewService.class, App.class})
@WebAppConfiguration
@AutoConfigureMockMvc
@SpringJUnitConfig
public class SearchTest
{

    @Mock
    SearchService searchService;

    @MockBean
    FoodTruckRepository foodTruckRepository;

    @MockBean
    RouteRepository routeRepository;

    @Test
    public void testSearchTrucks() {
        List<FoodTruck> trucks = new ArrayList<>();
        FoodTruck ft = new FoodTruck();
        ft.setTruckName("JUNIT TRUCK");

        foodTruckRepository.save(ft);

        List<FoodTruck> ret = new ArrayList<>();
        ret.add(ft);

        when(searchService.searchTrucks("JUNIT")).thenReturn(ret);
        assertEquals(searchService.searchTrucks("JUNIT"), ret);


    }

    @Test
    public void testSearchNearbyTrucks() {

        List<Route> r = new ArrayList<>();
        FoodTruck ft = new FoodTruck();

        ft.setTruckID(1L);
        ft.setTruckName("TEST_TRUCK");

        Route newRoute = new Route();
        newRoute.setTruck(ft);
        newRoute.setCity("Waco");

        foodTruckRepository.save(ft);
        routeRepository.save(newRoute);

        when(searchService.searchNearByTrucks("Waco")).thenReturn(r);
        assertEquals(searchService.searchNearByTrucks("Waco"), r);
    }

}
