"use strict"; //엄격한 문법을 적어 틀리면 에러처리하라는 명령 

var app = app || {};
var user = user || {};
app = {
		init : x=>{
			console.log('step 1');
			app.session.context(x); //경로를 먼저 저장 : 안드로이드+노드
			app.onCreate(x);
		},
		onCreate : ()=>{
			app.setContentView();
			//selector 떄문에 있으면 있고 없으면 없는거야 z
			$('#login_btn').click(()=>{
				location.href = app.x()+"/move/public/member/login";
			});
			$('#join_btn').click(()=>{
				location.href = app.x()+"/move/public/member/add";
			});
		/*	
		   $('#add_submit').click(function(){ //얘는 달러 쓰는순간 dom객체 html
				alert(app.x()+"/member/add");
				var form = document.getElementById('addForm');
		    	form.action = app.x()+"/member/add";
				form.method = "post";
				form.submit(); 
			});*/
			//j query방법 
			$('#add_submit').click(function(){ 
				alert(app.x()+"/member/add");
				$('#addForm').attr({
				action:app.x()+"/member/add",
				method: "POST"
				}).submit();
			});
			$('#log_submit').click(()=>{
				$('#loginForm').attr(
						{
					action:app.x()+"/member/login",
					method: "POST"
					}
						).submit();
				//$('#github').attr("href", "https://www.naver.com");
				
				//location.href = app.x()+"/member/login";
			});
			$('#logout_btn').click(()=>{
				//id주고 value 
			
				//로그아웃 어케줌?? app.session.member("");
				location.href = app.x()+"/move/home/common/content";
			});
			$('#mypage_btn').click(()=>{
				location.href = app.x()+"/move/auth/member/retrieve";
			});
			$('#remove_btn').click(()=>{
				location.href = app.x()+"/move/home/common/content";
			});
			$('#home_btn').click(()=>{
				location.href = app.x()+"/move/home/common/content";
			});
			$('#moveToUpdate').click(()=>{
				/*$('#updateForm').attr(
				);*/
				/*$('#retriveForm').attr({
					action: app.x()+"/member/retrieve",
					method: "POST"	
					}).submit();*/	
				$('#updateForm').attr({
						'userid': app.m().userid,
						'name': app.m().name});
				location.href = app.x()+"/move/auth/member/modify";
			});
			$('#moveToDelete').click(()=>{
				location.href = app.x()+"/move/auth/member/remove";
			});
			$('#modify_submit').click(()=>{
				$('#updateForm').attr({
					action: app.x()+"/member/modify",
					method: "POST"	
					}).submit();
			});
			
		},
		setContentView : ()=>{
			console.log('step 4 '+app.session.path('js'));
		}
};

app.session = { //init에 접근가능 
		context : x=>{
			console.log('step 2'+x);
			sessionStorage.setItem('context', x);
			sessionStorage.setItem('js',x+'/resources/js');
			sessionStorage.setItem('css',x+'/resources/css');
			sessionStorage.setItem('img',x+'/resources/img');
		},
		path : x=>{
			return sessionStorage.getItem(x);
		},
		setmember : x=>{
			if(x.userid!=""){
			$.each(x, function(k,v){
				sessionStorage.setItem(k,v);
			});
			}
			/*sessionStorage.setItem('userid', x.userid);
			sessionStorage.setItem('password', x.password);
			sessionStorage.setItem('name', x.name);
			sessionStorage.setItem('teamid', x.teamid);
			sessionStorage.setItem('age', x.age);
			sessionStorage.setItem('gender', x.gender);
			sessionStorage.setItem('subject', x.subject);*/
		},
		getmember : ()=>{
			//return sessionSotrage.getItem(x);
			return {"userid":sessionStorage.getItem('userid'),
				"password":sessionStorage.getItem('password'),
				"name":sessionStorage.getItem('name'),
				"teamid":sessionStorage.getItem('teamid'),
				"age":sessionStorage.getItem('age'),
				"gender":sessionStorage.getItem('gender'),
				"subject":sessionStorage.getItem('subject')};
		}
};


app.x = ()=>{
	return app.session.path('context');
};
app.j = ()=>{
	return app.session.path('js');
};
app.c = ()=>{
	return app.session.path('css');
};
app.i = ()=>{S
	return app.session.path('img');
};
app.m = ()=>{
	return app.session.getmember();
};


