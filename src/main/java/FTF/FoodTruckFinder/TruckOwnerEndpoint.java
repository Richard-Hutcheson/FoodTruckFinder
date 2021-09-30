package FTF.FoodTruckFinder;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
public class TruckOwnerEndpoint {
    @GetMapping("/truck-owner")
    public String truckOwner() {
        return "You are a truck owner!";
    }

    @GetMapping("/memory-truck-owner")
    public String memoryTruckOwner() {
        return String.format("Max available memory: %.3f MB", (Runtime.getRuntime().maxMemory() / (1024.0 * 1024.0)));
    }
}