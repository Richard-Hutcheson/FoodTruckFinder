package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.ReviewRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.ReviewService;
import ftf.classes.FoodTruck;
import ftf.classes.Review;
import ftf.classes.User;
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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@SpringBootTest(classes = {ReviewService.class, App.class})
@WebAppConfiguration
@AutoConfigureMockMvc
@SpringJUnitConfig
public class ReviewTest
{

    @Mock
    ReviewService reviewService;

    @MockBean
    ReviewRepository reviewRepository;

    @MockBean
    FoodTruckRepository foodTruckRepository;

    @Test
    public void testSaveReview() {
        Review r = new Review();
        r.setRating(3.4);
        r.setDescription("HI");

        when(reviewService.saveReview("hi", "TRUCK_NAME", 3.4, "HI")).thenReturn(Optional.of(r));
        assertEquals(reviewService.saveReview("hi", "TRUCK_NAME", 3.4, "HI").get(), r);
    }

    @Test
    public void testGetAvgTruckRating() {
        FoodTruck ft = new FoodTruck();
        ft.setTruckName("JUNIT_TRUCK");

        Review r = new Review();
        r.setTruck(ft);
        r.setReviewID(1L);
        r.setRating(3.4);

        Review r2 = new Review();
        r2.setTruck(ft);
        r2.setReviewID(2L);
        r2.setRating(4.7);

        double avg = (r.getRating() + r2.getRating()) / 2.0;

        when(reviewService.getAvgFoodTruckRating(ft)).thenReturn((r.getRating() + r2.getRating()) / 2.0);
        assertEquals(reviewService.getAvgFoodTruckRating(ft), avg);
    }

    @Test
    public void testFindReviewsByTruck() {
        FoodTruck ft = new FoodTruck();
        ft.setTruckID(1L);
        ft.setTruckName("JUNIT_TRUCK");

        Review r = new Review();
        r.setTruck(ft);
        r.setRating(3.5);
        r.setDescription("description");

        List<Review> retList = new ArrayList<>();
        retList.add(r);

        when(reviewService.findByTruck(ft)).thenReturn(retList);
        assertEquals(reviewService.findByTruck(ft), retList);

    }
}
