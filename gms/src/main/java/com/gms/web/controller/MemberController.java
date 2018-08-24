package com.gms.web.controller;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.domain.MemberDTO;


@Controller 
@RequestMapping("/member")
public class MemberController {
	/*static final Logger logger = LoggerFactory.getLogger(HomeController.class);*/
	@Autowired MemberDTO member;
	@RequestMapping("/add")
	public void add() {
		//후후후
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public void retrieve() {}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modify")
	public void modify() {}
	@RequestMapping("/remove")
	public void remove() {}
	@RequestMapping("/login")
	public void login() {}
	@RequestMapping("/logout")
	public void logout() {
		
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
