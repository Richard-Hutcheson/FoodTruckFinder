package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.ReviewRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.classes.FoodTruck;
import ftf.classes.Review;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {ReviewService.class, App.class})
@WebAppConfiguration
@AutoConfigureMockMvc
@SpringJUnitConfig
public class ReviewTest
{

    @Autowired
    ReviewService reviewService;

    @MockBean
    ReviewRepository reviewRepository;

    @Test
    public void testSaveReview() {
        Review r = new Review();
        r.setRating(3.4);
        r.setDescription("HI");

        when(reviewService.saveReview("hi", "TRUCK_NAME", 3.4, "HI")).thenReturn(Optional.of(r));
        assertEquals(reviewService.saveReview("hi", "TRUCK_NAME", 3.4, "HI").get(), Optional.of(r));
    }
}
