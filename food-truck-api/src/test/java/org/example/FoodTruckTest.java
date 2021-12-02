package org.example;

import ftf.Repository.FoodTruckRepository;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringJUnitConfig
public class FoodTruckTest
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
