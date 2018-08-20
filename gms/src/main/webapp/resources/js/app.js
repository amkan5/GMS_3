/**
 * 
 */

var common = (()=>{
	return{
		main : x=>{
			alert("하이");
			//메뉴박스에 있던아이 
			document.getElementById('moveToAdmin') //# 빼먹지말자 
			.addEventListener('click',function(){
				/*router.move({context: x,
					domain : 'admin',
					action: 'search',
					page: 'main'})*/
			var isAdmin = confirm('관리자입니까'); //윈도우의 객체.앞이 생략.윈도우가 객체로 만드는것을 bom
				//function이고 객체다는 교과서
			if(isAdmin){
				var password = prompt('관리자 비번을 입력 바랍니다');
				if(password == 1){
					router.move({context: x,
						domain : 'admin',
						action: 'search',
						page: 'main'})
			}
				else{
				alert('관리자만 접근이 허용됩니다')
			}	
			}
			});	 	
		}
	}
})();

var admin = (()=>{
	return{
			main : x=>{
				service.addClass(
						 document.getElementById('searchBox'),
						 'width80pt center'
					);
					service.addClass(
							document.getElementById('searchWord'),
							'width80px floatRight'
					);
					service.addClass(
							document.getElementById('searchOption'),
							'floatRight '
					);
					service.addClass(
							document.getElementById('searchBtn'),
							'floatRight '
					);
					service.addClass(
							document.getElementById('contentBoxTab'),
							'width90pt center marginTop30px '
					);
					service.addClass(
							document.getElementById('contentBoxMeta'),
							'bgColorYellow '
					);
					
					
					//마이페이지로 이동 
					for(var i of document.querySelectorAll('.username')){
						service.addClass(
								i,
								'cursor fontColorBlue'
								);
							i.style.color = 'blue';
							i.style.cursor = 'pointer';
							i.addEventListener('click',function(){
							location.href= x+'/member.do?action=retrieve&page=retrieve&userid='
								+this.getAttribute('id');
						})
					};
					
					//카운트
					for(var k of document.querySelectorAll('.pageNums')){
						service.addClass(
								k,
								'cursor fontColorBlue'
								);
						k.style.color = 'blue';
						k.addEventListener('click',function(){
							location.href= x+'/admin.do?action=search&page=main&pageNum='
							+this.getAttribute('id');
						})
					};
					
					//페이지블락
					for(var k of document.querySelectorAll('.pageBlocks')){
						service.addClass(
								k,
								'cursor fontColorBlue'
								);
						k.style.color = 'blue';
						k.addEventListener('click',function(){
							location.href= x+'/admin.do?action=search&page=main&pageNum='
							+this.getAttribute('id');
						})
					};
					
					//넥스트 이전버전
					/*document.getElementById("nextBlock")
					.addEventListener('click',()=>{ //function()을 바꿔줌 
						location.href=x+'/admin.do?action=list&page=main&pageNum='
						;
					})
					document.getElementById("prevBlock")
					.addEventListener('click',()=>{ //function()을 바꿔줌 
						location.href=x+'/admin.do?action=list&page=main&pageNum='
						;
					})*/
					
					//All List의 과거 
					/* var x = document.querySelectorAll('.username'); //위에 classname 
					for(i in x){
						x[i].style.color = 'blue';
						x[i].style.cursor = 'pointer';
						x[i].addEventListener('click',function(){
							alert('클릭'+this.getAttribute('id')); 
							//자바에서 this는 필드. 여기서는 this가 x[i]를 지칭.근데 function안이 아닌데 this가 어떡해 지칭하는가?
							//리턴이 스칼라개념으로 움직인다. 
							//저 위에 x인 집합체로 잡으면 this를 못잡는데..? callback함수(클릭이후 호출하는함수) this는 최초 object
							//그니까 x[i]가 최초의 함수임 
						location.href='${ctx}/admin.do?action=retrieve&page=memberDetail&userid='
								+this.getAttribute('id')
						});
					}*/
					
					//써치
					document.getElementById("searchBtn")
					.addEventListener('click',function (){
						alert('써치함수 진입함');
						location.href = (document.getElementById('searchOption').value==='userid')? 
								x+'/admin.do?action=retrieve&page=memberDetail&userid='
								+ document.getElementById('searchWord').value
									: 
									x+'/admin.do?action=search&page=main&&searchOption='
									+ document.getElementById('searchOption').value
									+'&searchWord='
									+ document.getElementById('searchWord').value
									;
					});

			}
	};})();


var member = (()=>{ //파라미터 봉쇄해놨음. 보안걸림.  클로져를 걸어둔 객체. 
	var _userId, _ssn, _password,_age,_roll,_teamId,_gender,_subject; //앞에 _를 붙이면 인스턴스변수
	var setUserid = (userId)=>{this._userId = userId;}
	var setSsn = (ssn)=>{this._ssn = ssn;}
	var setPassword = (password)=>{this._password = password;}
	var setAge = x=>{
		var date = new Date().getFullYear(); //오늘날짜 뽑아짐. 올해연도. 
		this._age = parseInt(date)-1899-parseInt(x.substring(0,2));
		}
	var setGender = x=>{
		var gender = "";
		if(Number(x.substring(7,8))%2==0){
			gender = "여자";
		}else{
			gender = "남자";
		};
		this._gender = gender;
		}
	var setRoll = (roll)=>{this._roll = roll;}
	var setTeamId = (teamId)=>{this._teamId = teamId;}
	var setSubject = (subject)=>{this._subject = subject;}
	var getMemid = ()=>{return this._userid;}
	var getSsn = ()=>{return this._ssn;}
	var getPassword = ()=>{return this._password;}
	var getAge = ()=>{return this._age;}
	var getGender = ()=>{return this._gender;}
	var getRoll = ()=>{return this._roll;}
	var getSubject = ()=>{return this._subject;}
	var getTemaId = ()=>{return this.teamId;}
		return{ //여기서부터 열려있는거 
			setUserid : setUserid,
			setSsn : setSsn,
			setPassword : setPassword,
			setAge : setAge,
			setGender : setGender,
			getMemid : getMemid,
			getSsn : getSsn,
			getPassword : getPassword,
			getAge : getAge,
			getGender : getGender,
			join : x=>{
				member.setUserid(x.userid);
				 member.setPassword(x.password);
				 member.setSsn(x.ssn);
				member.setAge(x.ssn);
				member.setGender(x.ssn);
			 },
			update : x=>{
				member.setPassword(x.oldPass+"/"+x.newPass);
				member.setTeamId(x.teamId);
				member.setRoll(x.roll);
			},
			main : x=>{
				document.getElementById('moveToAdmin') 
				.addEventListener('click',function(){
					router.move({context: x,
						domain : 'admin',
						action: 'search',
						page: 'main'})
				})
			/*	retrieve에 있는애들
			 * document.getElementById('myPageMoveToUpdate')
				.addEventListener('click',function(){
				alert('넘어간다요');
				router.move({context:'${ctx}',
							domain : 'member',
							action: 'move',
							page: 'modify'})
							});
							
				document.getElementById('myPageMoveToDelete')
				.addEventListener('click',function(){
				alert('넘어간다요');
				router.move({context:'${ctx}',
							domain : 'member',
							action: 'move',
							page: 'remove'})
							});*/
				
				
			}
		}
})();
