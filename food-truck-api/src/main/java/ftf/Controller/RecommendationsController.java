package ftf.Controller;

import ftf.Service.RecommendationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecommendationsController {

    @Autowired
    RecommendationsService RecService;
}
