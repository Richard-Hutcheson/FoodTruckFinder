package org.example;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.ReviewRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
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
public class ReviewTest
{

    @MockBean
    ReviewService reviewService;

    @MockBean
    ReviewRepository reviewRepository;

}
