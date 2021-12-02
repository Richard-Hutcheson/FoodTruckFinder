package org.example;

import ftf.Repository.RecommendationsRepository;
import ftf.Repository.ReviewRepository;
import ftf.Service.RecommendationsService;
import ftf.Service.ReviewService;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringJUnitConfig
public class RecommendationsTest
{

    @MockBean
    RecommendationsService recommendationsService;

    @MockBean
    RecommendationsRepository recommendationsRepository;

}
