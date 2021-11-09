package ftf.Service;

import ftf.Repository.RecommendationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecommendationsService {

    @Autowired
    RecommendationsRepository recRepo;

}
