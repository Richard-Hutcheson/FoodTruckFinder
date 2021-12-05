package org.example;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import ftf.Repository.FoodTruckRepository;
import ftf.Service.FoodTruckService;
import ftf.Service.UserService;
import ftf.classes.User;
import org.junit.Before;
import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * Unit test for simple App.
 */
//@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringJUnitConfig
public class UserTest
{
    @MockBean
    UserService userService;

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setUsername("JUnit");

        when(userService.saveUser(user)).thenReturn(user);
        assertEquals(user, userService.saveUser(user));
    }

    @Test
    public void testEditUser() {
        User user = new User();
        user.setUsername("JUnit");

        when(userService.saveUser(user)).thenReturn(user);
        assertEquals(user, userService.saveUser(user));
    }
}