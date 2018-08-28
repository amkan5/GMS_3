package com.gms.web.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;


@Controller 
@RequestMapping("/member")
public class MemberController {
	/*static final Logger logger = LoggerFactory.getLogger(HomeController.class);*/
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
		System.out.println("add 진입");
		System.out.println("name is "+member.getName());
		memberService.add(member);
		return "public:member/login.tiles";
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
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute MemberDTO member,
			Model model) {
		/*@PathVariable String userid,
		@PathVariable String password*/
		String path = "";
		if(memberService.login(member)) {
			model.addAttribute("member", 
					memberService.retrieve(member.getUserid()));
			path = "auth:member/retrieve.tiles";
			System.out.println("로그인 성공");
		}else {
			System.out.println("로그인 실패");
			path = "public:member/login.tiles";
		}
		return path;
	}
	@RequestMapping("/logout")
	public String logout() {
		//걍 로그아웃되게끔하자 ㅎㅎㅎ
		return "home:common/content.tiles";
		
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
}
