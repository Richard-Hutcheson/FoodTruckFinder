package org.example;

import ftf.Service.FoodTruckService;
import ftf.Service.SubscriptionService;
import ftf.Service.UserService;
import ftf.classes.FoodTruck;
import ftf.classes.Subscription;
import ftf.classes.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
@WebAppConfiguration
@SpringJUnitConfig
public class SubscriptionTest {
    @MockBean
    SubscriptionService subService;
    @MockBean
    UserService userService;

    @MockBean
    FoodTruckService ftService;

    @Test
    public void testSubscribe() {
        User user = new User();
        user.setUsername("JUnit");
        userService.saveUser(user);
        FoodTruck foodTruck = new FoodTruck();
        foodTruck.setTruckName("FTJUnit");
        ftService.createNewTruck(foodTruck);
        Subscription sub = new Subscription();

        when(subService.subscribe("JUnit","FTJunit")).thenReturn(sub);
        assertEquals(sub, subService.subscribe("JUnit","FTJunit"));
    }

}
