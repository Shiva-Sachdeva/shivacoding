package com.javatpoint.server.main;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;

@Testable
class TestCase {

	@Test
	void test() {
		assertFalse(HelloWorld.getUserName().isEmpty());
	}

}
