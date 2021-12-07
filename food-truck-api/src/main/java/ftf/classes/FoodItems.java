package ftf.classes;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = FoodItems.TABLE_NAME)
public class FoodItems {
    public static final String TABLE_NAME = "FoodItems";

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )
    @Column(name = "foodID")
    Long foodID;

    @JoinColumn(name = "truckID")
    @ManyToOne
    FoodTruck truck;

    @Column(name = "foodItem")
    String foodItem;

    @Column(name = "price")
    double price;

}
