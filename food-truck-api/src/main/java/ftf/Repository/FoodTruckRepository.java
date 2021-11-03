package ftf.Repository;

import ftf.classes.FoodTruck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodTruckRepository extends JpaRepository<FoodTruck, Long> {

}
