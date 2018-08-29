<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<form id="retriveForm">
<div id="contentBox" style="width:100%; height:500px;">
		<table id="mypageTable" style="width:100%; height:70%;" >
			<tr>
				<td id="mypageImg" rowspan="3" colspan="2">
					<img  src="${img}/${profile}" alt="" />
				</td>
				<td style="width: 50px">ID</td>
				<td>${member.userid}</td>
			</tr>
			<tr>
				<td>이름</td>
				<td>${member.name}</td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td>${member.password}</td>
			</tr>
			<tr>
				<td style="width: 50px">성별</td>
				<td>${member.gender}</td>
				<td style="width: 50px">팀</td>
				<td>${member.teamid}</td>
			</tr>
			<tr>
				<td>나이</td>
				<td>${member.age}</td>
				<td>역할</td>
				<td>${member.roll}</td>
			</tr>
		</table>
		<input type="hidden" name="userid" value="${member.userid}" readonly="readonly"/>
		<input type="hidden" name="name" value="${member.name}" readonly="readonly"/>
		<input type="hidden" name="password" value="${member.password}" readonly="readonly"/>
		<input type="hidden" name="gender" value="${member.gender}" readonly="readonly"/>
		<input type="hidden" name="teamid" value="${member.teamid}" readonly="readonly"/>
		<input type="hidden" name="age" value="${member.age}" readonly="readonly"/>
		<input type="hidden" name="roll" value="${member.roll}" readonly="readonly"/>
	</div>
	</form>
<h2><a id="moveToUpdate">UPDATE FORM</a></h2>
<h2><a id="moveToDelete">DELETE FORM</a></h2>


