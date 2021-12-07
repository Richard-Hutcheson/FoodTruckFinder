package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.UserRepository;
import ftf.Service.FoodTruckService;
import ftf.classes.FoodTruck;
import ftf.classes.User;
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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


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

    @MockBean
    private UserRepository userRepository;

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

    @Test
    public void testGetFoodTrucksByUsername() {

        List<FoodTruck> ftList = new ArrayList<>();
        FoodTruck ft = new FoodTruck();
        User truckOwner = new User();

        truckOwner.setUsername("JUNIT owner");
        ft.setTruckName("TEST Truck");
        ft.setOwner(truckOwner);

        foodTruckRepository.save(ft);
        userRepository.save(truckOwner);

        List<FoodTruck> retList = new ArrayList<>();
        retList.add(ft);

        when(foodTruckService.getFoodTrucksByUsername("JUNIT owner")).thenReturn(ftList);
        assertEquals(foodTruckService.getFoodTrucksByUsername("JUNIT owner"), ftList);
    }

    @Test
    public void testGetTrucksByFoodType() {
        List<FoodTruck> retList = new ArrayList<>();
        FoodTruck ft = new FoodTruck();
        ft.setFoodType("KOREAN");
        ft.setTruckName("KOREAN_TRUCK");

        foodTruckRepository.save(ft);

        retList.add(ft);

        when(foodTruckService.getTrucksByFoodType("KOREAN")).thenReturn(retList);
        assertEquals(foodTruckService.getTrucksByFoodType("KOREAN"), retList);
    }

    @Test
    public void testGetFoodTrucksByPriceRange() {
        List<FoodTruck> retList = new ArrayList<>();
        FoodTruck ft = new FoodTruck();
        ft.setMinRange(5.0);
        ft.setMaxRange(15.0);
        ft.setTruckName("TEST_TRUCK");

        foodTruckRepository.save(ft);

        when(foodTruckService.getTrucksPriceRange(5.0, 15.0)).thenReturn(retList);
        assertEquals(foodTruckService.getTrucksPriceRange(5.0, 15.0), retList);
    }

    @Test
    public void testGetFoodTrucksByLikeName() {
        List<FoodTruck> retList = new ArrayList<>();
        FoodTruck ft = new FoodTruck();
        ft.setTruckName("JUNIT TEST");
        ft.setTruckID(1L);

        retList.add(ft);

        when(foodTruckService.getTruckDetailsByLikeName("UNIT")).thenReturn(retList);
        assertEquals(foodTruckService.getTruckDetailsByLikeName("UNIT"), retList);
    }

}
