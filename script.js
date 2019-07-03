window.onload = function(){
					// A product of bexheroes
				var high = 0;
				var started = 0;
				var score = 0;
				var gravity = 0.022;
				var speed = 0;
				$('div#game_in').click(function(){
					if(started == 0 || started==2){
						started = 1;
						$('#ss').text("0");
						score = 0;
						speed = 0;
					}
					
				});
				setInterval(function(){
					if(started==1){
						$('#before').css("display","none");
						$('#after').css("display","block");
						$('#gameover').css("display","none");
						
					}else if(started==2){
						$('#before').css("display","none");
						$('#after').css("display","none");
						$('#gameover').css("display","block");
						$('div.pipe1,div.pipe2').each(function(){
							$(this).remove();
						});
						ss = score-$('div.pipe1').length
						if(ss<0){
							ss=0;
						}
						$('#yourscore2').text(ss);
						if(score>high){
							high = score;
							$('#highscore').text(high);
							$('#highscore2').text(high);
						}
					}else{
						$('#before').css("display","block");
						$('#after').css("display","none");
						$('#gameover').css("display","none");
					}
				},100);
				setInterval(function(){
					$('#before_mid_in').fadeToggle(400);
					var top = document.querySelector("#bird").getBoundingClientRect().top;
					speed += gravity;
					top = top + speed;
					$('#bird').css("top",top);
					
					var left = $('#bird').position().left;
					var top = $('#bird').position().top;
						$('div.pipe1,div.pipe2').each(function(){
							var l = $(this).position().left;
							var t = $(this).position().top;
							var height = $(this).height()+10;
							if(l<190 && l>130){
								for(i=top;i<top+60;i++){
									if(i>t && i<t+height){
										started = 2;
									}
								}
							}
						});
					var top = document.querySelector("#bird").getBoundingClientRect().top;
					if(top>599){
						started=2;
						if(score>high){
							high = score;
							$('#highscore2').text(high);
						}
					}
					if(started==2){
						$('#game_in').mousemove(function(e){
							var top = e.clientY;
							var left = e.clientX;
						});
					}
				},1);
				$('#game,#game_in,#after').click(function(){
					if(started==1){
						speed = 0;
						var top = document.querySelector("#bird").getBoundingClientRect().top;
						var newtop = top - 100;
						if(newtop<0){
							newtop = 0;
						}
						$('#bird').animate({
							top:newtop
						},50);
					}
				});
				setInterval(function(){
					if(started==1){
						var salla = Math.random()*380;
						var salla2 = 490-salla;
						if(salla2<120){
							salla2 = 150;
							salla = 340;
						}
						$('#game_area').append("<div class='pipe'><div class='pipe_in'><div class='pipe1' style='height:"+salla+"px'><div id='pipe1_top'></div></div><div class='pipe2' style='height:"+salla2+"px'><div id='pipe2_top'></div></div></div></div>");
					}
				},2000);
				setInterval(function(){
					$('div.pipe1').each(function(index,value){
						var xx = $(this).position().left;
						if(xx<30){
							$(this).remove();
							score+=1;
							$('#ss').text(score);
						}
						var yy = xx - 10;
						$(this).css("left",yy);
					});
					$('div.pipe2').each(function(index,value){
						var xx = $(this).position().left;
						if(xx<30){
							$(this).remove();
						}
						var yy = xx - 10;
						$(this).css("left",yy);
					});
				},35);
			}
