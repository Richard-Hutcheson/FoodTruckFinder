package ftf.Repository;
import ftf.classes.FoodTruck;
import ftf.classes.Subscription;
import java.util.List;

import ftf.classes.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByUser(User user);
}
