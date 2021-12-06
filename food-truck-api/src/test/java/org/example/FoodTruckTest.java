package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
//@RunWith(App.class)
@SpringBootTest(classes = {FoodTruckService.class, App.class})
@WebAppConfiguration
@AutoConfigureMockMvc
@SpringJUnitConfig
public class FoodTruckTest
{

    @Mock
    private FoodTruckService foodTruckService;

    @MockBean
    private FoodTruckRepository foodTruckRepository;

    @Test
    public void testCreateFoodTruck() {
        FoodTruck saveFT = new FoodTruck();
        FoodTruck test = new FoodTruck();
        saveFT.setTruckName("JUNIT_TRUCK");
        test.setTruckName("TEST_RET");

        when(foodTruckService.createNewTruck(saveFT)).thenReturn(test);
        assertEquals(foodTruckService.createNewTruck(saveFT), test);
    }

    @Test
    public void testEditTruckByName() {
        FoodTruck ft = new FoodTruck();
        ft.setTruckName("TEST_TRUCK");
        ft.setTruckID(1L);
        foodTruckRepository.save(ft);

        FoodTruck retVal = new FoodTruck();
        retVal.setTruckName("TEST_RET");

        when(foodTruckService.editTruckDetails(ft)).thenReturn(retVal);
        assertEquals(foodTruckService.editTruckDetails(ft), retVal);
    }

//    @Test
//    public void testDeleteTruckByName() {
//        FoodTruck saveFT = new FoodTruck();
//        FoodTruck test = new FoodTruck();
//        saveFT.setTruckName("JUNIT_TRUCK");
//        test.setTruckName("TEST_RET");
//
//        when(foodTruckService.deleteTruck(saveFT.getTruckName());
//
//
//
//    }
}
