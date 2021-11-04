package ftf.Repository;


import ftf.classes.User;
import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @NotNull Optional<User> findById(Long userId);

    Optional<User> findByUsername(String username);

    List<User> findByUsernameAndPassword(String username, String password);

}
