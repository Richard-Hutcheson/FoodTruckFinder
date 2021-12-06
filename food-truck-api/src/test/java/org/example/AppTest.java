package org.example;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import ftf.Repository.FoodTruckRepository;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringJUnitConfig
public class AppTest 
{

    @MockBean
    FoodTruckService foodTruckService;

    @MockBean
    FoodTruckRepository foodTruckRepository;

    @Test
    public void testCreateFoodTruck() {
        FoodTruck saveFT = new FoodTruck();
        saveFT.setTruckName("Junit Test Truck");

        when(foodTruckService.createNewTruck(saveFT)).thenReturn(saveFT);
        assertEquals(saveFT, foodTruckService.createNewTruck(saveFT));
    }
}
