package ftf.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import ftf.Service.UserService;
import ftf.classes.User;
import ftf.classes.View;
import ftf.exceptions.InvalidLoginException;
import ftf.exceptions.UsernameTakenException;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
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
            return null;
        }
    }

    @GetMapping("/findUser/{username}")
    public Optional<User> findUserByUsername(@PathVariable String username) {
        System.out.println("username = " + username);

        var user = userServe.findByUsername(username);
//        System.out.println(user.get().getId());
        if (user.isPresent()) {
            return user;
        }
        else {
            return null;
        }
    }

    @PostMapping("/saveuser")
    public User saveUser(@RequestBody User user) {
        //ONLY THING BACKEND NEEDS TO DO HERE IS VALIDATE THAT
        //THE USERNAME IS UNIQUE. IF SUCCESS, RETURN THIS:
        Optional<User> foundUser = userServe.findByUsername(user.getUsername());

        if (foundUser.isPresent())
            throw new UsernameTakenException("Username Already Exist");

        return userServe.saveUser(user);
    }

    //TODO: CHANGE THIS TO A PRINCIPLE AND USE THE SPRING SECURITY TO get a valid JSON Web Token
    @GetMapping("/login/{username}/{password}")
    @JsonView(View.UserView.class)
    public User login(@PathVariable String username, @PathVariable String password) {
        List<User> user = userServe.findByUsernameAndPassword(username,password);

        return user.stream().filter(users -> username.equals(users.getUsername()) && password.equals(users.getPassword()))
                .findAny().orElseThrow(() -> new InvalidLoginException("User not found!"));
    }



    //This is for testing purposes, it will retrieve all the usernames
    //within the database
    @GetMapping("/api/users")
    @JsonView(View.UserView.class)
    public List<User> getUsers(){
        return userServe.getUsers();
    }

}
