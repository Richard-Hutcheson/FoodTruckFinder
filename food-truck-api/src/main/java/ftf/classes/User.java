package ftf.classes;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

@Data
@Entity
@Table(name = User.TABLE_NAME)
public class User {
    public static final String TABLE_NAME = "User";

    @Id
    @GeneratedValue(generator = TABLE_NAME + "_GENERATOR")
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )
    @Column(name = "userID")
    Long id;

    @JsonView(View.FoodTruckView.class)
    @Column(name = "username")
    String username;

    @Column(name = "password")
    String password;

    @Column(name = "role")
    String role;

    @Column(name = "name")
    String name;

    @Column(name = "address")
    String address;

    @Column(name = "city")
    String city;

    @Column(name = "state")
    String state;

    @Column(name = "email")
    String email;

    //this is equivalent to proximity
    @Column(name = "cityPref")
    String cityPref;

    @Column(name = "ratingPref")
    double ratingPref;

    @Column(name = "minPricePref")
    double minPricePref;

    @Column(name = "maxPricePref")
    double maxPricePref;
}
