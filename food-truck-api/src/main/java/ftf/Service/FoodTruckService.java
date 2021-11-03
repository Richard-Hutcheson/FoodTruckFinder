package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodTruckService {

    @Autowired
    FoodTruckRepository foodTruckRepository;

    @Autowired
    public FoodTruckService(FoodTruckRepository foodTruckRepository) { this.foodTruckRepository = foodTruckRepository; }
}
