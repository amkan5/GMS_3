package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class MemberDTO {
	protected String userid,
	name,
	roll,
	teamid,
	age,
	password,
	ssn,
	gender,
	subject;

}
