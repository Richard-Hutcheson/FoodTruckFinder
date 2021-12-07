//package org.example;
//
//
//import ftf.App;
//import ftf.Service.FoodTruckService;
//import ftf.Service.RouteService;
//import ftf.Service.UserService;
//import ftf.classes.FoodTruck;
//import ftf.classes.Recommendations;
//import ftf.classes.Route;
//import ftf.classes.User;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.context.SpringBootTest;
//import static org.mockito.Mockito.when;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//import java.util.Optional;
//import static org.junit.Assert.*;
//
//
//@SpringBootTest(classes = {RouteService.class, App.class})
//@WebAppConfiguration
//@AutoConfigureMockMvc
//@SpringJUnitConfig
//public class RouteTest {
//
//    @MockBean
//    RouteService routeService;
//
//    @MockBean
//    FoodTruckService ftService;
//
//    @MockBean
//    UserService userService;
//
//    FoodTruck truck;
//
//    @BeforeEach
//    void initialize(){
//
//        User user = new User();
//        user.setUsername("noahTEST");
//        user.setPassword("testPass");
//        user.setRole("O");
//        user.setEmail("test@baylor.edu");
//        user.setAddress("Speight Ave");
//        user.setCityPref("Waco");
//        user.setState("Texas");
//        userService.saveUser(user);
//
//
//
//        truck = new FoodTruck();
//        truck.setTruckName("Truck test");
//        truck.setDescription("Test description");
//        truck.setMenuURL("menuURL.com");
//        truck.setFoodType("American");
//        truck.setMaxRange(10);
//        truck.setMinRange(1);
//        truck.setOwner(user);
//        ftService.createNewTruck(truck);
//    }
//
//    @Test
//    void saveRouteTest(){
//        Route route = new Route();
//        route.setTruck(truck);
//        route.setAddress("address test");
//        route.setCity("city test");
//        route.setState("state test");
//        route.setSchedule("This is a schedule: TR: 3:30 - 4:45");
//        Optional<Route> r = Optional.of(route);
//
//        String truckName = "Truck test";
//        String address = "address test";
//        String city = "city test";
//        String state = "state test";
//        String schedule = "This is a schedule: TR: 3:30 - 4:45";
//
//        when(routeService.setRouteByTruckName(truckName,address,city,state,schedule)).thenReturn(r);
//        Assertions.assertEquals(routeService.setRouteByTruckName(truckName,address,city,state,schedule),r);
//        System.out.println(r.get().toString());
//
//    }
//
//}
