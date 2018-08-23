"use strict"; //엄격한 문법을 적어 틀리면 에러처리하라는 명령 

var app = app || {};
app = {
		init : x=>{
			console.log('step 1');
			app.session.context(x); //경로를 먼저 저장 : 안드로이드+노드
			app.onCreate(x);
		},
		onCreate : ()=>{
			app.setContentView();
			//selector 떄문에 있으면 있고 없으면 없는거야 
			$('#login_btn').click(()=>{
				location.href = app.x()+"/move/member/login";
			});
			$('#join_btn').click(()=>{
				location.href = app.x()+"/move/member/add"
			});
			
			$('#log_submit').click(()=>{
				console.log('들어왔니?')
				location.href = app.x()+"/move/member/retrieve"
			});
			$('#add_btn').click(()=>{
				location.href = app.x()+"/move/member/retrieve"
			});
			$('#logout_btn').click(()=>{
				location.href = app.x()+"/move/common/content"
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
			sessionStorage.setItem('css',x+'resources/css');
			sessionStorage.setItem('img',x+'resources/img');
		},
		path : x=>{
			return sessionStorage.getItem(x);
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
app.i = ()=>{
	return app.session.path('img');
};


