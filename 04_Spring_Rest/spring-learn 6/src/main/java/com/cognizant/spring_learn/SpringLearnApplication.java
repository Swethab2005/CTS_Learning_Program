package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.cognizant.spring_learn") // ensure all subpackages are scanned
public class SpringLearnApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
	}
}
