package ftf.Repository;


import ftf.classes.FoodTruck;
import ftf.classes.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    Optional<Route> findRouteByRouteID(Long routeID);
    List<Route> findByTruck(FoodTruck truck);
}
