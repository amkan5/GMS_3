package com.gms.web.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.domain.MemberDTO;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.service.MemberService;


@Service //스프링에서 꺼내와야함 
public class MemberServiceImpl implements MemberService{
	@Autowired MemberMapper memberDAO;
	@Override
	public void add(MemberDTO p) {
		if((Integer.parseInt(p.getSsn().substring(7,8))%2)==0) {
			p.setGender("여자");
		}else{
			p.setGender("남자");
		};
		p.setAge(String.valueOf(119-Integer.parseInt(p.getSsn().substring(0, 2))));
		memberDAO.insert(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return memberDAO.selectList(p);
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return memberDAO.selectSome(p);
	}

	@Override
	public MemberDTO retrieve(String p) {
		return memberDAO.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return memberDAO.count(p);
	}

	@Override
	public void modify(Map<?, ?> p) {
		memberDAO.update(p);
		
	}

	@Override
	public void remove(Map<?, ?> p) {
		memberDAO.delete(p);
		
	}

	@Override
	public boolean login(MemberDTO p) {
		return (memberDAO.login(p)!=null);
	}

}
