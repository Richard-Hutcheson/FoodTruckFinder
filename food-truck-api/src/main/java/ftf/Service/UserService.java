package ftf.Service;

import ftf.classes.User;
import ftf.Repository.UserRepository;
import ftf.exceptions.InvalidLoginException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


    public List<User> getUsers() {
        //will return all the users based on username
        return userRepository.findAll();
    }



    /*
    public User findByUserPass(String username, String password) {
        return userRepository.findByUserPass(username,password).orElseThrow(() -> new InvalidLoginException("No user found with" + username));

    }

     */
}
