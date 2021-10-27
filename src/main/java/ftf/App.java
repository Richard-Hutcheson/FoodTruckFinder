package ftf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("ftf")
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class App 
{
    public static void main( String[] args )
    {
        SpringApplication.run(App.class, args);
//        System.out.println( "Hello World!" );
    }
}
