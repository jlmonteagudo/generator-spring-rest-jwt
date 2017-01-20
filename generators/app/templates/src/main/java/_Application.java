package <%= packageName %>;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class <%= projectName %>Application {

	public static void main(String[] args) {
		SpringApplication.run(<%= projectName %>Application.class, args);
	}
}
