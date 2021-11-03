package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.classes.FoodTruck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class FoodTruckService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    public FoodTruckService(FoodTruckRepository foodTruckRepository) { this.foodTruckRepository = foodTruckRepository; }

    public FoodTruck getTruckDetails(Long id) {
        Optional<FoodTruck> truck = foodTruckRepository.getFoodTruckByTruckID(id);


        return truck.orElseThrow(new TruckNotFoundException())
    }

    public FoodTruck getTruckDetails(String name) {
        Optional<FoodTruck> truck = foodTruckRepository.getFoodTruckByName(name);

        return truck.orElseThrow(new TruckNotFoundException());
    }
}
