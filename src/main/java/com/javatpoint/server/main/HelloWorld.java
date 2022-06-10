package com.javatpoint.server.main;
import java.util.*;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

public class HelloWorld {
	static Scanner sc = new Scanner(System.in);
	
	public static String getUserName() {
		System.out.print("Enter your name : " );
	    String name = sc.next();
		return name;
	}

	public static void main(String[] args) {
	   System.out.println("Hello " + HelloWorld.getUserName() + "....");
	}
}
