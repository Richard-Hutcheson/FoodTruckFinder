package ftf.Service;


import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Repository.UserRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Recommendations;
import ftf.classes.User;
import ftf.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecommendationsService {

    @Autowired
    RecommendationsRepository recRepo;

    @Autowired
    UserRepository userRepository;

    @Autowired
    FoodTruckRepository foodTruckRepository;

    public List<FoodTruck> getRecommendUserByFoodType(String username) {
        Optional<User> userRec = userRepository.findByUsername(username);

        if (!userRec.isPresent())
            throw new UserNotFoundException("User not found");

        Optional<Recommendations> recFoodTypes = recRepo.findRecommendationsByUserID(userRec.get());
        Recommendations rec = recFoodTypes.get();

        if (!recFoodTypes.isPresent()) {
            rec = new Recommendations();
            rec.setUserID(userRec.get());
            recRepo.save(rec);
            recFoodTypes = recRepo.findRecommendationsByUserID(userRec.get());
        }

        ArrayList<FoodTruck> topRecListByType = new ArrayList<>();

        TreeMap<Integer, String> occurencesOfEachType = new TreeMap<>();


        occurencesOfEachType.put(recFoodTypes.get().getAmericanCount(), "American");
        occurencesOfEachType.put(recFoodTypes.get().getChineseCount(), "Chinese");
        occurencesOfEachType.put(recFoodTypes.get().getFrenchCount(), "French");
        occurencesOfEachType.put(recFoodTypes.get().getGermanCount(), "German");
        occurencesOfEachType.put(recFoodTypes.get().getGreekCount(), "Greek");
        occurencesOfEachType.put(recFoodTypes.get().getIndianCount(), "Indian");
        occurencesOfEachType.put(recFoodTypes.get().getItalianCount(), "Italian");
        occurencesOfEachType.put(recFoodTypes.get().getJapaneseCount(), "Japanese");
        occurencesOfEachType.put(recFoodTypes.get().getKoreanCount(), "Korean");
        occurencesOfEachType.put(recFoodTypes.get().getMexicanCount(), "Mexican");
        occurencesOfEachType.put(recFoodTypes.get().getThaiCount(), "Thai");
        occurencesOfEachType.put(recFoodTypes.get().getVietnameseCount(), "Vietnamese");

        ArrayList<String> descendingOrderStrings = new ArrayList<>(occurencesOfEachType.descendingMap().values());
        ArrayList<FoodTruck> foodTrucks = new ArrayList<FoodTruck>();

        // find top three food type occurences
        for (String str : descendingOrderStrings) {
            foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodType(str));
        }

        return foodTrucks;
    }
}
