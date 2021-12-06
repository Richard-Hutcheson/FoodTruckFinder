package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
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

    @Autowired
    SearchService searchService;


    @Test
    public void testSearchNearbyTrucks() {
        List<Route> ft = searchService.searchNearByTrucks("Waco");



    }

}
