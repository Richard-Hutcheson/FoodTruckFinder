package ftf.classes;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = Review.TABLE_NAME)
public class Subscription {
    public static final String TABLE_NAME = "Subscription";
    @Id
    @GeneratedValue(generator = TABLE_NAME + "_GENERATOR")
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )
    @Column(name = "subscribeID")
    Long subscribeID;

    @JoinColumn(name = "truckID")
    @ManyToOne
    FoodTruck truck;

    @JoinColumn(name = "userID")
    @ManyToOne
    User user;

}
