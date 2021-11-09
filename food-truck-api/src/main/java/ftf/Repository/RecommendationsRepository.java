package ftf.Repository;

import ftf.classes.Recommendations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationsRepository extends JpaRepository<Recommendations, Long> {

}
