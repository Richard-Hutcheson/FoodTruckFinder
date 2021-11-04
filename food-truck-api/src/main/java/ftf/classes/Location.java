package ftf.classes;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = Location.TABLE_NAME)
public class Location {
    public static final String TABLE_NAME = "Location";

    @Id
    @GeneratedValue(generator = TABLE_NAME + "_GENERATOR")
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )
    @Column(name = "locationID")
    Long locationID;

    //-decimal degrees format-
    //reference: -90 to 90 for latitude
    //           -180 to 180 for longitude
    @Column(name = "latitude")
    double latitude;

    @Column(name = "longitude")
    double longitude;

    @JoinColumn(name = "currentRoute")
    @ManyToOne
    Routes route;
}
