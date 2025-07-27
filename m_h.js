window.onload = function(){
	var winW = $(window).width();
	var winH = $(window).height();
	var n = 0;
	var istrue = true;
	var wrap = $('#wrap');
	var list = wrap.children('div');
	list.height(winH);
	wrap.height(list.length*winH);

	var num = wrap.attr('data-num');

	$('body').on('touchmove',function(e){e.preventDefault();})

	$('body').swipeUp(function(){
		if(istrue){
			istrue = false
			if(n == list.length-1){
				//n = list.length-1;
				if(num == 0){
					window.location.href = 'p2_1.html';
				}else if(num == 1){
					window.location.href = 'p2_2.html';
				}else if(num == 2){
					window.location.href = 'p2_3.html';
				}else if(num == 3){
					window.location.href = 'p2_4.html';
				}else if(num == 4){
					window.location.href = 'p2_5.html';
				}else if(num == 5){
					window.location.href = 'p2_6.html';
				}else if(num == 6){
					window.location.href = 'p2_7.html';
				}else if(num == 7){
					window.location.href = 'p2_8.html';
				}else if(num == 8){
					window.location.href = 'p2_9.html';
				}else if(num == 9){
					window.location.href = 'p3.html';
				}else if(num == 10){
					window.location.href = 'yinshiwenhua.html';
				}else if(num == 11){
					window.location.href = 'renquanxuanyan.html';
				}else if(num == 12){
					window.location.href = 'houji.html';
				}else if(num == 13){
					window.location.href = 'fengmian.html';
				}else if(num == 14){
					window.location.href = 'index.html';
				}
			}else{
				n++;
			}
			wrap.css('-webkit-transform','translate3D(0,'+ -winH*n +'px,0)');
			var t = setTimeout(function(){
				istrue = true;
				list.eq(n).addClass('active').siblings().removeClass('active');
			},500);
		}	
	})

	$('body').swipeDown(function(){
		if(istrue){
			istrue = false;
			if(n == 0){
				if(num == 0){
					window.location.href = 'index.html';
				}else if(num == 1){
					window.location.href = 'p2_1.html';
				}else if(num == 2){
					window.location.href = 'p2_2.html';
				}else if(num == 3){
					window.location.href = 'p2_3.html';
				}else if(num == 4){
					window.location.href = 'xianzhi.html';
				}else if(num == 5){
					window.location.href = 'jingdian.html';
				}else if(num == 6){
					window.location.href = 'qingzhensi.html';
				}else if(num == 7){
					window.location.href = 'gulanjing.html';
				}else if(num == 8){
					window.location.href = 'yishuwenhua.html';
				}else if(num == 9){
					window.location.href = 'huanjing.html';
				}else if(num == 10){
					window.location.href = 'renquan.html';
				}else if(num == 11){
					window.location.href = 'wenming.html';
				}else if(num == 12){
					window.location.href = 'yinshiwenhua.html';
				}else if(num == 13){
					window.location.href = 'renquanxuanyan.html';
				}
			}else{
				n--;
			}
			wrap.css('-webkit-transform','translate3D(0,'+ -winH*n +'px,0)');
			var t = setTimeout(function(){
				istrue = true;
				list.eq(n).addClass('active').siblings().removeClass('active');
			},500);
		}
		
	})
}