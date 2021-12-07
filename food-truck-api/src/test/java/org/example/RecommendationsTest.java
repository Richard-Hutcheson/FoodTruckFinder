package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Repository.RouteRepository;
import ftf.Repository.UserRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.RecommendationsService;
import ftf.classes.FoodTruck;
import ftf.classes.Recommendations;
import ftf.classes.Route;
import ftf.classes.User;
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
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@SpringBootTest(classes = {RecommendationsService.class, App.class})
@WebAppConfiguration
@AutoConfigureMockMvc
@SpringJUnitConfig
class RecommendationsTest {

    @Mock
    RecommendationsService recommendationsService;

    @MockBean
    UserRepository userRepository;

    @MockBean
    RecommendationsRepository recommendationsRepository;

    @MockBean
    RouteRepository routeRepository;

    @MockBean
    FoodTruckRepository foodTruckRepository;

    @Test
    public void testCreateRecommendations() {
        User user = new User();
        user.setUsername("JUNIT_USER");
        userRepository.save(user);

        Recommendations retUser = new Recommendations();
        retUser.setRecID(1L);
        Optional<Recommendations> ret = Optional.of(retUser);

        when(recommendationsService.saveUser("JUNIT_USER")).thenReturn(ret);
        assertEquals(retUser, recommendationsService.saveUser("JUNIT_USER").get());

    }

    @Test
    public void testGetRecommendedFoodTrucks() {
        User user = new User();
        user.setUsername("JUNIT_USER");
        user.setMinPricePref("5.00");
        user.setMaxPricePref("15.0");
        user.setCityPref("Waco");
        user.setRatingPref("4.0");
        user.setFoodTypePref("FRENCH");
        user.setRole("a");

        FoodTruck ft  = new FoodTruck();
        ft.setTruckName("JUNIT_TRUCK");
        ft.setFoodType("FRENCH");
        ft.setTruckID(1L);
        ft.setMaxRange(14.00);

        Route r = new Route();
        r.setCity("Waco");
        r.setTruck(ft);
        r.setState("TX");
        r.setRouteID(2L);

        userRepository.save(user);
        foodTruckRepository.save(ft);
        routeRepository.save(r);

        List<FoodTruck> retList = new ArrayList<>();
        retList.add(ft);

        when(recommendationsService.getRecommendedFoodTrucks(user.getUsername())).thenReturn(retList);
        assertEquals(recommendationsService.getRecommendedFoodTrucks(user.getUsername()), retList);
    }

}