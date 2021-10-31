package ftf.Service;

import ftf.classes.User;
import ftf.Repository.UserRepository;
import ftf.exceptions.InvalidLoginException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<User> findUser(Long userId) {
        return userRepository.findById(userId);
    }
    public Optional<User> findByUsername(String username) {return userRepository.findByUsername(username);}

    public User saveUser(User user) {

        /*checking user information and determining whether the account information
        provided is valid
         */

        return userRepository.save(user);
    }

    public User updateUser(String userId, User user) {
        return userRepository.updateUser(user);
    }

    public List<User> getUsers() {
        //will return all the users based on username
        return userRepository.findAll();
    }


    public List<User> findByUsernameAndPassword(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}
