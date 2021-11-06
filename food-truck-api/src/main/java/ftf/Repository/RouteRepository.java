package ftf.Repository;


import ftf.classes.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
//    Optional<Route> findRouteByTruckID(Long truckID);
//    Optional<Route> findRouteByRouteID(Long routeID);
}
