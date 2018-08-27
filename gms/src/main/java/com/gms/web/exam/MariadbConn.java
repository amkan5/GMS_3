package com.gms.web.exam;


import java.sql.*;
import java.util.*;

public class MariadbConn {
	public String exam() {
		Connection conn;
		Statement stmt;
		String s = "";
		try {
			Class.forName("org.mariadb.jdbc.Driver"); 
			conn =  DriverManager.getConnection(
					"jdbc:mariadb://localhost:3306/mariadb",
					"mariadb",
					"mariadb");
			stmt = conn.createStatement(); 
			String sql = "SELECT USERID FROM MEMBER WHERE USERID LIKE 'joon'";
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()) {
				s = rs.getString("USERID");
			}
		} catch (Exception e) { 
			// TODO Auto-generated catch block
			System.out.println("연결 실패");
			e.printStackTrace();
		} 
		return s;
	}
}


