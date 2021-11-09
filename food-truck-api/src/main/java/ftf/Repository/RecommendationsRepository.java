package ftf.Repository;

import ftf.classes.Recommendations;
import ftf.classes.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecommendationsRepository extends JpaRepository<Recommendations, Long> {
    Optional<Recommendations> findRecommendationsByUserID(User user);

}
