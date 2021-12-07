package ftf.classes;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = Schedule.TABLE_NAME)
public class Schedule {
    public static final String TABLE_NAME = "Schedule";

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )

    @Column(name = "scheduleID")
    Long scheduleID;

    //A truck can have one schedule
    @JoinColumn(name = "truckID")
    @OneToOne
    FoodTruck truck;

    //Each of the following will contain a range of times for that
    //particular day in the format of "x:xxYY-x:xxYY", where x is time
    //and y is time of day (am or pm)
    @Column(name = "monday")
    String monday;

    @Column(name = "tuesday")
    String tuesday;

    @Column(name = "wednesday")
    String wednesday;

    @Column(name = "thursday")
    String thursday;

    @Column(name = "friday")
    String friday;

    @Column(name = "saturday")
    String saturday;

    @Column(name = "sunday")
    String sunday;

}
