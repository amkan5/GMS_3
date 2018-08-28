package com.gms.web.service;
import java.util.*;
import org.springframework.web.bind.annotation.RequestMapping;
import com.gms.web.domain.MemberDTO;

public interface MemberService {
	public void add(MemberDTO p);
	public List<?> list(Map<?,?> p);
	public List<?> search(Map<?,?> p);
	public MemberDTO retrieve(String p);
	public int count(Map<?,?> p) ;
	public void modify(Map<?,?> p) ;
	public void remove(Map<?,?> p) ;
	public boolean login(MemberDTO p) ;
}
