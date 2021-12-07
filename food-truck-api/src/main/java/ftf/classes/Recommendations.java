package ftf.classes;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = Recommendations.TABLE_NAME)
public class Recommendations {
    public final static String TABLE_NAME = "Recommendations";

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )

    @Column(name = "RecID")
    Long RecID;

    @JoinColumn(name = "userID")
    @OneToOne
    User userID;

    @Column(name = "AmericanCount")
    int americanCount;

    @Column(name = "ChineseCount")
    int chineseCount;

    @Column(name = "ItalianCount")
    int italianCount;

    @Column(name = "MexicanCount")
    int mexicanCount;

    @Column(name = "GreekCount")
    int greekCount;

    @Column(name = "KoreanCount")
    int koreanCount;

    @Column(name = "JapaneseCount")
    int japaneseCount;

    @Column(name = "VietnameseCount")
    int vietnameseCount;

    @Column(name = "ThaiCount")
    int thaiCount;

    @Column(name = "IndianCount")
    int indianCount;

    @Column(name = "FrenchCount")
    int frenchCount;

    @Column(name = "GermanCount")
    int germanCount;
}
