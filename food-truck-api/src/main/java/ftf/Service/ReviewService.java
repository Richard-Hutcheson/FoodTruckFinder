package ftf.Service;
import ftf.Repository.ReviewRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Review;
import ftf.Repository.UserRepository;
import ftf.exceptions.InvalidLoginException;
import ftf.exceptions.UserNotFoundException;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public Optional<Review> findById(Long reviewId){
        return reviewRepository.findByReviewID(reviewId);
    }

    public List<Review> findByTruck(FoodTruck truck) {
        List<Review> reviews = reviewRepository.findByTruck(truck);
        return reviews;
    }

    public List<Review> findByUserId(Long id) {
        return reviewRepository.findByUserId(id);
    }

}
