package ftf.Repository;
import ftf.classes.FoodTruck;
import ftf.classes.Route;
import ftf.classes.Schedule;
import ftf.classes.Subscription;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Optional<Schedule> findScheduleByTruck(FoodTruck foodTruck);
}
