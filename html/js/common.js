// JavaScript Document
$(function(){
   $('.onBox a').last().css('margin-right','0');
   $('.foot .youqlj a').last().css('margin-right','0');   //底部友情链接图片
   $(".videos li:nth-child(3n)").css('margin-right','0px')
   $(".tvlanmu .box:nth-child(3n)").css('margin-right','0px')
   $(".picture li:nth-child(4n)").css('margin-right','0px')
})

$(function(){
	$("#side-bar .gotop").click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});
})