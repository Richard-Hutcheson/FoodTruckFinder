package ftf.Service;


import ftf.Repository.*;
import ftf.classes.*;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.FoodTypeNotFoundException;
import ftf.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;
import java.util.stream.Collectors;

import static org.hibernate.sql.InFragment.NULL;

@Service
public class RecommendationsService {

    @Autowired
    RecommendationsRepository recRepo;

    @Autowired
    UserRepository userRepository;

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    ReviewService reviewService;

    @Autowired
    RouteRepository routeRepository;

    public Optional<Recommendations> updateFoodTypeRecommendation(String username, String foodType) {
        Optional<User> user = userRepository.findByUsername(username);
        Optional<Recommendations> recommendations = recRepo.findRecommendationsByUserID(user.get());
        Recommendations rec = recommendations.get();

        if (!recommendations.isPresent())
            throw new UserNotFoundException("Recommendation for user not found");


        if (foodType.equalsIgnoreCase(FoodType.AMERICAN.name())) {
            rec.setAmericanCount(rec.getAmericanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.CHINESE.name())) {
            rec.setChineseCount(rec.getChineseCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.FRENCH.name())) {
            rec.setFrenchCount(rec.getFrenchCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.GERMAN.name())) {
            rec.setGermanCount(rec.getGermanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.GREEK.name())) {
            rec.setGreekCount(rec.getGreekCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.INDIAN.name())) {
            rec.setIndianCount(rec.getIndianCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.ITALIAN.name())) {
            rec.setItalianCount(rec.getItalianCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.JAPANESE.name())) {
            rec.setJapaneseCount(rec.getJapaneseCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.KOREAN.name())) {
            rec.setKoreanCount(rec.getKoreanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.MEXICAN.name())) {
            rec.setMexicanCount(rec.getMexicanCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.THAI.name())) {
            rec.setThaiCount(rec.getThaiCount() + 1);
        }
        else if (foodType.equalsIgnoreCase(FoodType.VIETNAMESE.name())) {
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
        ArrayList<Map.Entry<Integer, String>> occurencesOfEachType = new ArrayList<Map.Entry<Integer, String>>();

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
            throw new FoodTruckNotFoundException("No recommended trucks found because user has not searched enough");

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

    public List<FoodTruck> getRecommendedByPriceRange(User user) throws Exception {

        Double min = null, max = null;
        if(user.getMinPricePref() != null && user.getMaxPricePref() != null) {
            min = Double.parseDouble(user.getMinPricePref());
            max = Double.parseDouble(user.getMaxPricePref());
            //return foodTruckRepository.findFoodTrucksByMinRangeIsGreaterThanEqualAndMaxRangeIsLessThanEqual(min, max);
            return foodTruckRepository.findFoodTrucksByMaxRangeIsLessThanEqual(max);
        }else{
            throw new Exception("Min and Max must both not be null");
        }
    }

    public List<FoodTruck> getRecommendedByFoodType(User user) {
        return foodTruckRepository.findFoodTrucksByFoodType(user.getFoodTypePref());
    }

    public List<FoodTruck> getRecommendedByRating(User user) throws Exception {
        if(user.getRatingPref() == null){
            throw new Exception("Rating is null");
        }

       List <FoodTruck> allTrucks = foodTruckRepository.findAll();
       List<FoodTruck> fts = new ArrayList<>();

       for (FoodTruck ft : allTrucks) {
           if (reviewService.getAvgFoodTruckRating(ft) >= Double.parseDouble(user.getRatingPref())) {
               fts.add(ft);
           }
       }

       return fts;
    }

    public List<FoodTruck> getRecommendedByLocation(User user) {
        List<Route> route = routeRepository.findRoutesByCity(user.getCityPref());

        List<FoodTruck> fts = new ArrayList<>();

        for (Route r : route) {
            fts.add(r.getTruck());
        }

        return fts;
    }

    public List<FoodTruck> getRecommendedFoodType(User user) {
        return foodTruckRepository.findFoodTrucksByFoodType(user.getFoodTypePref());
    }

    public List<FoodTruck> getRecommendedFoodTrucks(String username) {

        //this will be a counter to determine what to be prioritized first
        int countPrefs = 0;
        Optional<User> userPreferences = userRepository.findByUsername(username);

        List<FoodTruck> foodTrucks = foodTruckRepository.findAll();
        List<FoodTruck> foodTypeTrucks = new ArrayList<>();
        List<FoodTruck> foodLocationTrucks = new ArrayList<>();
        List<FoodTruck> foodRatingTrucks = new ArrayList<>();
        List<FoodTruck> foodTrucksPrice = new ArrayList<>();
        HashMap<List<FoodTruck>,Boolean> m = new HashMap<>();


        if (!userPreferences.isPresent())
            throw new UserNotFoundException("User not found");

        //need to determine what preferences to utilize, so first check if they are
        //null

        if(!Objects.equals(userPreferences.get().getFoodTypePref(), null)){
            foodTypeTrucks = getRecommendedFoodType(userPreferences.get());
            m.put(foodTypeTrucks,new Boolean(true));
        }else{
            m.put(foodTypeTrucks,new Boolean(false));
        }

        if(!Objects.equals(userPreferences.get().getCityPref(), null)){
            foodLocationTrucks = getRecommendedByLocation(userPreferences.get());
            m.put(foodLocationTrucks,new Boolean(true));
        }else{
            m.put(foodLocationTrucks,new Boolean(false));
        }

        if(!Objects.equals(userPreferences.get().getMaxPricePref(), null) &&
            !Objects.equals(userPreferences.get().getMinPricePref(), null)){
            try {
                foodTrucks = getRecommendedByPriceRange(userPreferences.get());
            } catch (Exception e) {
                e.printStackTrace();
            }
            m.put(foodTrucksPrice,new Boolean(true));
        }else{
            m.put(foodTrucksPrice,new Boolean(false));
        }

        if(!Objects.equals(userPreferences.get().getRatingPref(), null)){
            try {
                foodRatingTrucks = getRecommendedByRating(userPreferences.get());
            } catch (Exception e) {
                e.printStackTrace();
            }
            m.put(foodRatingTrucks,new Boolean(true));
        }else{
            m.put(foodRatingTrucks,new Boolean(false));
        }

        //This is the list that will contain the final trucks that will be
        //provided to the user, it will be used to convert it into a list
        //and sort based on the number of times the particular food truck
        //appears in the recommended
        HashMap<FoodTruck,Integer> finalTrucks = new HashMap<>();

        for(Map.Entry<List<FoodTruck>,Boolean> listEntry: m.entrySet()){
            //if it is true (i.e. a recommendation that fits the criteria
            //the user had
            if(listEntry.getValue()){
                //Iterate through the entire list for that key

                for(FoodTruck truck : listEntry.getKey()){
                    Integer num = finalTrucks.get(truck);
                    finalTrucks.put(truck,(num == null) ? 1 : num + 1);
                }

                countPrefs++;


                //find intersects based on if there are price preferences
                //THIS IS JUST A FILTER (WAS MY ORIGINAL ALGORITHM)
                //foodTrucks.retainAll(listEntry.getKey());
            }
        }

        //Converts the Map to a List, and stores the food trucks in the order from
        //the greatest occurrences (i.e. more relevant) to least relevant.
        List<FoodTruck> sortedTrucks = finalTrucks.entrySet().stream()
                .sorted(Comparator.comparing(Map.Entry::getValue, Comparator.reverseOrder()))
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        if(countPrefs == 0){
            //if there were no preferences at all, then it will just return
            //a random list, so just randomize the list
            Collections.shuffle(foodTrucks);
            return foodTrucks;
        }else{
            //If the sorted trucks are less than the number of trucks that will be
            //presented to the user (5)
            if (sortedTrucks.size() < 5) {
                //randomly shuffle the food trucks as the remainders will
                //just be random since there are no preferences to fill.
                Collections.shuffle(foodTrucks);
                while(sortedTrucks.size() < 5){
                    Random rand = new Random();
                    FoodTruck randomTruck = foodTrucks.get(rand.nextInt(foodTrucks.size()));
                    sortedTrucks.add(randomTruck);
                }
                //After randomly inserted the sorted trucks to hit that "5" recommendations
                //size, return the sorted truck list.
                return sortedTrucks;
            }else{
                //Normal, so just return that sorted trucks list
                //Richard will just trim the number if the list exceeds the amount
                //of recommendations (5)
                return sortedTrucks;
            }
        }

        // intersect of price and food type
        //foodTrucks.retainAll(foodTypeTrucks);
        //foodTrucks.retainAll(foodRatingTrucks);
        //foodTrucks.retainAll(foodLocationTrucks);


        //return foodTrucks;
    }
}
