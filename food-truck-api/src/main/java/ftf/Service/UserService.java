package ftf.Service;

import ftf.user.User;
import ftf.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


}
