package ftf.Repository;

import ftf.classes.FoodTruck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface FoodTruckRepository extends JpaRepository<FoodTruck, Long> {
    Optional<FoodTruck> getFoodTruckByTruckID(Long id);
    Optional<FoodTruck> getFoodTruckByName(String name);
}
