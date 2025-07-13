package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class Main implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Save users
        userRepository.save(new User("Swetha"));
        userRepository.save(new User("Swetha Babu"));

        // Fetch all users
        List<User> users = userRepository.findAll();
        System.out.println("All Users:");
        for (User user : users) {
            System.out.println(user.getId() + " - " + user.getName());
        }
    }
}
