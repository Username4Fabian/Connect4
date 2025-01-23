package com.fabian.connect4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Connect4Application {

	public static void main(String[] args) {
		SpringApplication.run(Connect4Application.class, args);
		System.out.println("Application running at: http://localhost:8080");
	}

}
