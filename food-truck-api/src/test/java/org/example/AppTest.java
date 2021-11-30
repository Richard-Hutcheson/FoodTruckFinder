package org.example;

import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import ftf.Repository.FoodTruckRepository;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import org.json.JSONException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

/**
 * Unit test for simple App.
 */
@SpringBootTest(classes = FoodTruckService.class)
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
        assertSame(saveFT, foodTruckService.createNewTruck(saveFT));
    }
}
