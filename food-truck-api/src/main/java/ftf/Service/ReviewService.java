package ftf.Service;
import ftf.Repository.FoodTruckRepository;
import ftf.Repository.ReviewRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Review;
import ftf.Repository.UserRepository;
import ftf.classes.User;
import ftf.exceptions.FoodTypeNotFoundException;
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

    @Autowired
    private FoodTruckRepository foodTruckRepository;

    @Autowired
    private UserRepository userRepository;

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

    public Optional<Review> saveReview(String username, String truckName, double rating, String description) {
        Optional<User> poster = userRepository.findByUsername(username);
        Optional<FoodTruck> ft = foodTruckRepository.findFoodTruckByTruckName(truckName);
        Review r = new Review();

        if (!poster.isPresent())
            throw new UserNotFoundException("User has not been found");

        if (!ft.isPresent())
            throw new FoodTypeNotFoundException("Food Truck has not been found");

        r.setDescription(description);
        r.setUser(poster.get());
        r.setTruck(ft.get());
        r.setRating(rating);

        reviewRepository.save(r);

        return Optional.of(r);
    }

    public double getAvgFoodTruckRating(FoodTruck truck) {
        List<Review> reviews = reviewRepository.findByTruck(truck);
        double sum = 0.0;
        int count = 0;

        for (Review r : reviews) {
            sum += r.getRating();
            count++;
        }

        return (sum / (double)count);
    }
}
