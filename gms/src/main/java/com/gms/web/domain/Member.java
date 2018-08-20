package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Member {
	protected String memId,
	name,
	roll,
	teamId,
	age,
	password,
	ssn,
	gender,
	subject;

}
