package ftf.Controller;

import ftf.Service.UserService;
import ftf.classes.User;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userServe;

    @GetMapping("/noah")
    public String lol() {
        return "austin";
    }

    @GetMapping("/user/{id}")
    public Optional<User> findUserById(@PathVariable Long id) {
        var user = userServe.findUser(id);

        if (user.isPresent()) {
            return user;
        }
        else {
            return Optional.empty();
        }
    }

    @PostMapping("/user")
    public User saveUser(@RequestBody User user) {
        return userServe.saveUser(user);
    }
}
