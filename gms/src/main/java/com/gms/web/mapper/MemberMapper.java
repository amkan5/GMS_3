package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.gms.web.domain.MemberDTO;
import com.gms.web.repository.MemberDAO;
@Repository
public class MemberMapper implements MemberDAO{
	@Autowired SqlSessionFactory factory;//새롭다
	private static final String ns = 
			"com.gms.web.mapper.MemberMapper"; //ns
	@Override
	public void insert(MemberDTO p) {
		System.out.println("Mapper 인서트까지넘어왔다");
		SqlSession sqlSession = factory.openSession();
		sqlSession.insert(ns+".insert",p);
	}

	@Override
	public List<?> selectList(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> selectSome(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberDTO selectOne(String p) {
		SqlSession sqlSession = factory.openSession();
		System.out.println("mapper까지는 옴");
		return(MemberDTO) sqlSession
				.selectOne(ns+".selectOne",p);
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void update(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public MemberDTO login(MemberDTO p) {
		return (MemberDTO)factory.openSession().selectOne(ns+".selectOne",p);
	}

}
