package org.example;

import ftf.App;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Repository.UserRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.RecommendationsService;
import ftf.classes.FoodTruck;
import ftf.classes.Recommendations;
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

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@SpringBootTest(classes = {RecommendationsService.class, App.class})
@WebAppConfiguration
@AutoConfigureMockMvc
@SpringJUnitConfig
class RecommendationsTest {

    @Mock
    RecommendationsService recommendationsService;

    @MockBean
    UserRepository userRepository;

    @MockBean
    RecommendationsRepository recommendationsRepository;

    @Test
    public void testCreateRecommendations() {
        User user = new User();
        user.setUsername("JUNIT_USER");
        userRepository.save(user);

        Recommendations retUser = new Recommendations();
        retUser.setRecID(1L);
        Optional<Recommendations> ret = Optional.of(retUser);

        when(recommendationsService.saveUser("JUNIT_USER")).thenReturn(ret);
        assertEquals(retUser, recommendationsService.saveUser("JUNIT_USER").get());

    }

}