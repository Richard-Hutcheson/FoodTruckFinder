package ftf.Service;


import ftf.Repository.FoodTruckRepository;
import ftf.Repository.RecommendationsRepository;
import ftf.Repository.UserRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Recommendations;
import ftf.classes.User;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.FoodTypeNotFoundException;
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

    public Optional<Recommendations> updateFoodTypeRecommendation(String username, String foodType) {
        Optional<User> user = userRepository.findByUsername(username);
        Optional<Recommendations> recommendations = recRepo.findRecommendationsByUserID(user.get());
        Recommendations rec = recommendations.get();

        if (!recommendations.isPresent())
            throw new UserNotFoundException("Recommendation for user not found");


        if (foodType.equalsIgnoreCase("American")) {
            rec.setAmericanCount(rec.getAmericanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Chinese")) {
            rec.setChineseCount(rec.getChineseCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("French")) {
            rec.setFrenchCount(rec.getFrenchCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("German")) {
            rec.setGermanCount(rec.getGermanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Greek")) {
            rec.setGreekCount(rec.getGreekCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Indian")) {
            rec.setIndianCount(rec.getIndianCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Italian")) {
            rec.setItalianCount(rec.getItalianCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Japanese")) {
            rec.setJapaneseCount(rec.getJapaneseCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Korean")) {
            rec.setKoreanCount(rec.getKoreanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Mexican")) {
            rec.setMexicanCount(rec.getMexicanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Thai")) {
            rec.setThaiCount(rec.getThaiCount() + 1);
        }
        else if (foodType.equalsIgnoreCase("Vietnamese")) {
            rec.setVietnameseCount(rec.getVietnameseCount() + 1);
        }
        else {
            throw new FoodTypeNotFoundException("Food Type does not exist");
        }

        recRepo.save(rec);

        return Optional.of(rec);
    }

    public List<FoodTruck> getRecommendUserByFoodType(String username) {
        Optional<User> userRec = userRepository.findByUsername(username);

        if (!userRec.isPresent())
            throw new UserNotFoundException("User not found");

        Optional<Recommendations> recFoodTypes = recRepo.findRecommendationsByUserID(userRec.get());
        Recommendations rec = recFoodTypes.get();

        // IMPORTANT: do we want to create a entry in the userRec table like this?
        // Or do we want to call and endpoint to do it?
//        if (!recFoodTypes.isPresent())
//            saveUser(userRec.get());

        ArrayList<Map.Entry<Integer, String>> occurencesOfEachType = new ArrayList<Map.Entry<Integer, String>>();


//        TreeMap<Integer, String> occurencesOfEachType = new TreeMap<>();


        /* BUG: Because Tree map doesn't allow duplicate keys if food types have
        * the same number of occurences the Tree map will only choose one of the
        *  two
        */
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getAmericanCount(), "American"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getChineseCount(), "Chinese"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getFrenchCount(), "French"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getGermanCount(), "German"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getGreekCount(), "Greek"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getIndianCount(), "Indian"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getItalianCount(), "Italian"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getJapaneseCount(), "Japanese"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getKoreanCount(), "Korean"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getMexicanCount(), "Mexican"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getThaiCount(), "Thai"));
        occurencesOfEachType.add(new AbstractMap.SimpleEntry<Integer, String>(recFoodTypes.get().getVietnameseCount(), "Vietnamese"));

        // Sort each occurence in descending order
        Collections.sort(occurencesOfEachType, new Comparator<Map.Entry<Integer, String>>() {
            @Override
            public int compare(Map.Entry<Integer, String> o1, Map.Entry<Integer, String> o2) {
                return o2.getKey() - o1.getKey();
            }
        });

//        ArrayList<String> descendingOrderStrings = new ArrayList<String>();
        ArrayList<FoodTruck> foodTrucks = new ArrayList<FoodTruck>();

        int count = 0;

        while (occurencesOfEachType.get(count).getKey() > 0 && count < occurencesOfEachType.size()) {
            String value = occurencesOfEachType.get(count).getValue();
            if (!foodTruckRepository.findFoodTrucksByFoodType(value).isEmpty())
                foodTrucks.addAll(foodTruckRepository.findFoodTrucksByFoodType(value));

            count++;
        }

        // user has no recomendations for trucks
        if (foodTrucks.isEmpty())
            throw new FoodTruckNotFoundException("No Recommended trucks found because user has not searched enough");

        return foodTrucks;
    }

    public Optional<Recommendations> saveUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);

        if (!user.isPresent())
            throw new UserNotFoundException("User not found");


        Optional<Recommendations> recommendations = recRepo.findRecommendationsByUserID(user.get());
        Recommendations rec;

        if (!recommendations.isPresent()) {

            rec = new Recommendations();

            rec.setUserID(user.get());

            rec.setAmericanCount(0);
            rec.setChineseCount(0);
            rec.setFrenchCount(0);
            rec.setGermanCount(0);
            rec.setGreekCount(0);
            rec.setIndianCount(0);
            rec.setItalianCount(0);
            rec.setJapaneseCount(0);
            rec.setKoreanCount(0);
            rec.setMexicanCount(0);
            rec.setThaiCount(0);
            rec.setVietnameseCount(0);

            recRepo.save(rec);
        }
        else {
            rec = recommendations.get();
        }

        return Optional.of(rec);
    }
}
