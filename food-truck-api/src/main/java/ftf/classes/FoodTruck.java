package ftf.classes;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;
import org.hibernate.annotations.Formula;

@Data
@Entity
@Table(name = FoodTruck.TABLE_NAME)
public class FoodTruck {
    public static final String TABLE_NAME = "FoodTruck";

    @Id
    @GeneratedValue(generator = TABLE_NAME + "_GENERATOR")
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
    //might need to

    @Column(name = "description")
    String description;

    @Column(name = "min")
    double minRange;

    @Column(name = "max")
    double maxRange;

    //@Formula("(SELECT")

    @Column(name = "foodType")
    String foodType;

}
