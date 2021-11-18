package ftf.Controller;

import ftf.Repository.ScheduleRepository;
import ftf.Service.ScheduleService;
import ftf.classes.Schedule;
import ftf.classes.User;
import ftf.exceptions.UserNotFoundException;
import ftf.exceptions.UsernameTakenException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class ScheduleController {
    @Autowired
    ScheduleService scheduleService;

    @PostMapping("/save/schedule")
    public Schedule saveSchedule(@RequestBody Schedule schedule) {
        return scheduleService.save(schedule);
    }

    @PatchMapping("/update/{truckName}")
    public Schedule updateSchedule(@PathVariable String truckName, @RequestBody Schedule updatedSchedule) {
        return scheduleService.updateSchedule(updatedSchedule,truckName);
    }

    @DeleteMapping("/delete/schedule/{ftName}")
    public void deleteSchedule( @PathVariable String ftName) {
        scheduleService.deleteSchedule(ftName);
    }

    @GetMapping("/get/schedule/{ftName}")
    public Schedule getSchedule(@PathVariable String truckName){
        return scheduleService.getSchedule(truckName);
    }
}
