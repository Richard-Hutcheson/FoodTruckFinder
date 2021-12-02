package org.example;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.RecommendationsService;
import ftf.classes.FoodTruck;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringJUnitConfig
class RecommendationsTest {

    @MockBean
    RecommendationsService recommendationsService;

    @MockBean
    RecommendationsRepository recommendationsRepository;

}