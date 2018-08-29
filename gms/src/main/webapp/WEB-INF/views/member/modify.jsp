<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<form id="updateForm">
	<div id="contentBox" style="width:100%; height:500px;">
	<table id="updateTable" style="width:100%; height:80%;">
		<tr>
			<td id="updateMemberProfile" rowspan="3" colspan="2">
				<img  src="${img}/mypage/profile.png" alt="" />
			</td>
			<td style="width: 50px">ID</td>
			<td id="userid"></td>
		</tr>
		<tr>
			<td>이름</td>
			<td id="name"></td>
		</tr>
		<tr>
			<td>비밀번호</td>
			<td>
				<input id="password" type="text" name="password" placeholder="${member.password}"/>
			</td>
		</tr>
		<tr>
			<td style="width: 50px;height: 50px">성별</td>
			<td>${member.gender}</td>
			<td style="width: 50px;height: 50px">팀</td>
			<td>
	           <input type="radio" id="teamid_1" name="teamid" 
	           			value="a" />걍놀자
	           <input type="radio" id="teamid_2" name="teamid" 
	           			value="h" />지은이네
	           <input type="radio" id="teamid_3" name="teamid" 
	           			value="s" />왕거북이
	           <input type="radio" id="teamid_4" name="teamid" 
	           			value="c" />코딩스타 
			</td>
		</tr>
		<tr>
			<td style="width: 50px;height: 50px">나이</td>
			<td>${member.age}</td>
			<td style="width: 50px;height: 50px">역할</td>
			<td>
				<select name="roll" id="roll">
					<option value="Leader" selected="selected">팀장</option>
					<option value="front">프론트개발</option>
					<option value="back">백단개발</option>
					<option value="android">안드로이드개발</option>
					<option value="minfe">민폐</option>
				</select>
			</td>
		</tr>
	</table>
	<input type="button" id="modify_submit" value="수정확인" />
	</div>
	</form>
<form method="POST" enctype="multipart/form-data" 
		action="${context}/member.do?action=fileupload&page=retrieve">
  파일업로드: <input type="file" name="upfile"><br/>
  <input type="submit" value="파일업로드"> 
</form>
<script>
app.session.getmember();
$('#userid').text(app.m().userid);
$('#name').text(app.m().name);
console.log('modify에서 : '+app.session.getmember().userid);
console.log('modify에서2 : '+app.m('userid'));
console.log('${member}');
/* var form = document.getElementById('updateForm');
for(var i=1;i<=4;i++){
	if(document.getElementById('teamid_'+i).value
			==='${user.teamid}'){
		document.getElementById('teamid_'+i).checked = true;
	}
}
var roll = document.getElementById("roll");
for(var i=0;i<roll.options.length;i++){
	 if(roll.options[i].value==='${user.roll}'){
		 roll.options[i].setAttribute("selected","selected");
	} 	
}
form.team.setAttribute("selected","selected");
	document.getElementById("confirmBtn")
	.addEventListener('click',function(){
		alert('수정확인버튼 클릭함 !!');
		// 업데이트 실행 하세요..DB 까지
	}); */
</script>














