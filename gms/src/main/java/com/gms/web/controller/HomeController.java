package com.gms.web.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 * Handles requests for the application home page.
 */

@Controller
@SessionAttributes("context")
public class HomeController {
	
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	
	@RequestMapping(value = "/", method = RequestMethod.GET) //web.xml에서 왔어
	public String home(HttpSession session, HttpServletRequest request) {
		String context = request.getContextPath();
		logger.info("Welcome home! The client locale is {}.", context);
		session.setAttribute("context", context);
		//model.addAttribute("context", "");
		return "home:common/content.tiles";
	}
	@RequestMapping("/move/{prifix}/{dir}/{page}")
	public String move(
			@PathVariable String prifix,
			@PathVariable String dir,
			@PathVariable String page
			) {
		logger.info("HomeController ::: move() {}.", "ENTER");
		System.out.println(prifix+ "+" +dir+"+"+page);
		/*if(page.equals("login")||page.equals("add")) {
			ret =  "auth:"+dir+"/"+page+".tiles";
		}*/
		//로그인상태면 prifix -> auth // 아니면 public값으로 바꾸기
		return prifix+":"+dir+"/"+page+".tiles";
	}
}
