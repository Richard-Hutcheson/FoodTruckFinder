package ftf.Service;

import ftf.Repository.FoodTruckRepository;
import ftf.Repository.ScheduleRepository;
import ftf.classes.FoodTruck;
import ftf.classes.Schedule;
import ftf.classes.Subscription;
import ftf.classes.User;
import ftf.exceptions.FoodTruckNotFoundException;
import ftf.exceptions.SubscriptionDoesntExist;
import ftf.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ScheduleService {
    @Autowired
    FoodTruckRepository foodTruckRepository;
    @Autowired
    ScheduleRepository scheduleRepository;


    public Schedule save(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Schedule updateSchedule(Schedule schedule,String truckName) {
        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckName(truckName);
        if(!foodTruck.isPresent()){
            throw new FoodTruckNotFoundException("Food Truck not found");
        }

        Optional<Schedule> foundSchedule = scheduleRepository.findScheduleByTruck(foodTruck.get());

        if (!foundSchedule.isPresent()) {
            throw new RuntimeException("Schedule not found");
        }


        Schedule updatedSchedule = foundSchedule.get();


        updatedSchedule.setTruck(schedule.getTruck());
        updatedSchedule.setMonday(schedule.getMonday());
        updatedSchedule.setTuesday(schedule.getTuesday());
        updatedSchedule.setWednesday(schedule.getWednesday());
        updatedSchedule.setThursday(schedule.getThursday());
        updatedSchedule.setFriday(schedule.getFriday());
        updatedSchedule.setSaturday(schedule.getSaturday());
        updatedSchedule.setSunday(schedule.getSunday());

        scheduleRepository.save(updatedSchedule);

        return updatedSchedule;
    }

    public void deleteSchedule(String ftName) {

        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckName(ftName);
        if(!foodTruck.isPresent()) {
            throw new FoodTruckNotFoundException("Food truck not found");
        }
        Optional<Schedule> scheduleToDelete = scheduleRepository.findScheduleByTruck(foodTruck.get());
        if(!scheduleToDelete.isPresent()){
            throw new RuntimeException("Schedule not found");
        }
        scheduleRepository.delete(scheduleToDelete.get());

    }

    public Schedule getSchedule(String truckName) {
        Optional<FoodTruck> foodTruck = foodTruckRepository.findFoodTruckByTruckName(truckName);
        if(!foodTruck.isPresent()) {
            throw new FoodTruckNotFoundException("Food truck not found");
        }
        Optional<Schedule> schedule = scheduleRepository.findScheduleByTruck(foodTruck.get());
        if(!schedule.isPresent()){
            throw new RuntimeException("Schedule not found");
        }
        return schedule.get();
    }
}
