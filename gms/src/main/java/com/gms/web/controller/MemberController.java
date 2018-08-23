package com.gms.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/member")
@Controller
public class MemberController {
	@RequestMapping("/add")
	public void add() {}
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
	public void logout() {}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
