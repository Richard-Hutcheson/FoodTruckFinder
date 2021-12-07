package ftf.classes;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;
import org.hibernate.annotations.Formula;

import java.net.URL;

@Data
@Entity
@Table(name = FoodTruck.TABLE_NAME)
public class FoodTruck {
    public static final String TABLE_NAME = "food_truck";

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )
    @Column(name = "truckID")
    Long truckID;

    @Column(name = "name")
    String truckName;

    @JoinColumn(name = "userID")
    @ManyToOne
    User owner;
    //(this is the truck owner AKA user_id)

    @Column(name = "description")
    String description;

    // make more descriptive: minPrice
    @Column(name = "min")
    double minRange;

    // make more descriptive: maxPrice
    @Column(name = "max")
    double maxRange;

    //@Formula("(SELECT")

    @Column(name = "foodType")
    String foodType;

    @Column(name = "menuURL", columnDefinition="VARCHAR(500)")
    String menuURL;
}
