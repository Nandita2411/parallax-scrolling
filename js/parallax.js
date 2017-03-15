
var $cog = $('#donut2'),
		$xyz=$('#flame2'),
    $body = $(document.body),
    bodyHeight = $body.height();
		var divs = $('.donuts, .title');

	$('#cramb1').click(function(){
		console.log("click");
	 $('html, body').stop(true, false).animate({ scrollTop:0}, 1600);
	});
	$('#cramb2').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:800}, 1600);
	});
	$('#cramb3').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:1665}, 1600);
	});
	$('#cramb4').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:2265}, 1600);
	});
	$('#cramb5').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:2965}, 1600);
	});
	$('#cramb6').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:3865}, 1600);
	});
	$('#cramb7').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:4565}, 1600);
	});
	$('#cramb8').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:5165}, 1600);
	});
	$('#cramb9').click(function(){
		console.log("click");
	$('html, body').stop(true, false).animate({ scrollTop:5865}, 1600);
	});

		//-------------------------for blinking not just a pretzel------------------------//
setInterval(function(){blink()}, 1000);


	function blink() {
			$("#heading").fadeTo(100, 0).fadeTo(900, 1.0);
	}
	//---------------------------for scroll function---------------------------//
$(window).on('scroll',function(){






	var topDistance =$(window).scrollTop();
	$('section[data-type="ac-details"]').each(function(){

	              var acDetails = $(this);
	              scrollStart = $(this).offset().top - $(window).innerHeight()*0.02;

	               if( topDistance > scrollStart){
	                  var yPos = -( (topDistance%scrollStart) * acDetails.data('speed') );
	                 acDetails.css({'background-position':'center calc(1.0% + '+ yPos +'px)'});
	               }
	          });


	 if($(this).scrollTop()>900){

	 $("#flame1").css({

	 				'transform': 'translateY(' + ($body.scrollTop() / bodyHeight * 170) + 'px)'
	 		});
	  }
	//----------------------------------for rotating donut2----------------------------//
	if($(this).scrollTop()>0){
	$("#donut2").css({
	        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
	    });
}
	//------------------------------for fade out section1------------------------//
			if($(this).scrollTop()>450){
			$("#section1").fadeOut("200");

		}
		else {
			$("#section1").fadeIn("8200");
		}
//------------------------------------------------------------//
if ($(window).scrollTop()> 5528 && $(window).scrollTop()<6400 ){


				$("#d1").css({'left':  (($(window).scrollTop()-$(".footer_img").offset().top)*0.5) + 'px'});
				$("#d2").css({'top': (($(window).scrollTop()-$(".footer_img").offset().top)*0.02) + 'px'});
				$("#d3").css({'left': (($(window).scrollTop()-$(".footer_img").offset().top)*-0.3) + 'px'});
				$("#d4").css({'left': (($(window).scrollTop()-$(".footer_img").offset().top)*-0.09) + 'px'});



					 }



var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;//how much i can scroll
var original_packet = document.getElementsByClassName('packet')[0];
var everything_packet = document.getElementsByClassName('packet')[1];
var sesame_packet = document.getElementsByClassName('packet')[2];
var sprinkle_breadcrumbs=document.getElementById("sprinkle_breadcrumbs");
var desc=document.getElementsByClassName("desc");
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea;
	 if($(this).scrollTop()>180){

		 $(".packets").css({
			"display":"block"
		}).animate({"top":"30%"});}


 if($(this).scrollTop()>180 &&  $(this).scrollTop()<820){
  everything_packet.style.top = (scrollPercent*window.innerWidth )/900+ 'px';
		// if(original_packet.style.left == '-400px'  || sesame_packet.style.left == '400px'){
		console.log(sesame_packet.style.left);
	  	original_packet.style.left = -scrollPercent*window.innerWidth*0.068+ 'px';
		  sesame_packet.style.left = scrollPercent*window.innerWidth*0.068+ 'px';
		// 	console.log(sesame_packet.style.left);
		// }
	}


// if($(this).scrollTop()>2300){
$("#flame2").css({
				'transform': 'translate3d(0,' + ($body.scrollTop() *  0.5) + 'px,0)'
		});
// }
});
var windowHeight1 = window.innerHeight;
var windowWidth1 = window.innerWidth;
var scrollArea1 = 1000 - windowHeight1;//how much i can scroll
var desc=document.getElementsByClassName("desc");
window.addEventListener('scroll', function() {
  var scrollTop1 = window.pageYOffset || window.scrollTop;
  var scrollPercent1 = scrollTop1/scrollArea1;

 if ($(this).scrollTop()> 1000){
divs.stop(true,true).fadeIn("5000");
$("#donut_original").css({
				'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
		});
		$("#donut_everything").css({
						'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
				});
				$("#donut_sesame").css({
								'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
						});
 }
else{
	divs.stop(true,true).fadeOut("5000");

}

//--------------------for fade out section3-------------------------//
if($(this).scrollTop()>1900){
$(".section3").fadeOut("200");

}
else {
$(".section3").fadeIn("8200");
}

//-------------------------------for stage4-------------------------------------//
if($(this).scrollTop()>2200){

	$("#originaldonut").css({"display":"block","position":"absolute"});
}
else {
	$("#originaldonut").css({"display":"none"});
}
if($(this).scrollTop()>2300){

	$("#everythingdonut").css({"display":"block","position":"absolute","left":"25%"});
}
else {

	$("#everythingdonut").css({"display":"none"});

}



if($(this).scrollTop()>2400){

	$("#sesamedonult").css({"display":"block","position":"absolute","left":"55%"});
}
else {

	$("#sesamedonult").css({"display":"none"});

}



if($(this).scrollTop()>2800){
$(".text").fadeIn("slow");

}else {
	$(".text").fadeOut("slow");
}
if($(this).scrollTop()>3200 && $(this).scrollTop()<3400){
$("#bakedDonut").css({"transform":"scale(1.3,1.3)","opacity":"0.5"},2000);
}
else{
	$("#bakedDonut").css({"transform":"scale(1,1)","opacity":"0.7"},5000);
}
//------------------------------------------------------------------//


//-----------------------------------foe section6-------------------------//

if($(this).scrollTop()>3450 && $(this).scrollTop()<4412){
$(".quality").fadeIn("slow");

}else {
	$(".quality").fadeOut("slow");
}

//---------------------------------------for section7-----------------------------//
if($(this).scrollTop()>4360){
	$("#dough").css({"display":"block"}).animate({"margin-top":"5%","opacity":"1","z-index":"9"});
	$("#flour").css({"display":"block"}).fadeIn("9000");
}
else{
	$("#dough").css({"display":"none","opacity":"0"});
	$("#flour").css({"display":"none","opacity":"0.1"}).fadeOut("5000");
}

if($(this).scrollTop()>4460){
$(".info1").css({"display":"block"}).animate({"left":"40%","opacity":"1","z-index":"9"});

}
else{
	$("#dough").css({"display":"none","opacity":"0"});
}


//-----------------------------------for section8----------------------------------//
if($(this).scrollTop()>4300 && $(this).scrollTop()<4570){
$(".info_stage8").css({"transform":"scale(1.7,1.7)"});
}
else{
	$(".info_stage8").css({"transform":"scale(1,1)"});
}

if($(this).scrollTop()>4600 && $(this).scrollTop()<5000){
$("#wheat").css({"transform":"scale(1.3,1.3)"});
}
else{
	$("#wheat").css({"transform":"scale(1,1)"});
}
//------------------------for section9-----------------------------//



if($(this).scrollTop()>5099 && $(this).scrollTop()<5565){

$("#stage9_img").css({
				"position":"fixed",
			 'transform': 'translateY(' + ($body.scrollTop() / bodyHeight * 1) + '%)'
	 });
 }


 if($(this).scrollTop()<4620){

 $("#stage9_img").css({
 				"position":"absolute",

 	 });
  }

 if($(this).scrollTop()>5004){
$("#grp_donut").fadeIn("6000");

 }
 else{
	 $("#grp_donut").fadeOut("slow");
 }

});//scrll fn close//
//----------------------------for original_packet----------------------------//
$("#original_packet").mouseenter(function(){
$("#original_packet").css({"cursor":"pointer","transform":"scale(1.5,1.5)"},5000);
$("#everything_packet").css({"opacity":"0.3"});
$("#sesame_packet").css({"opacity":"0.3"});
});
$("#original_packet").mouseleave(function(){
$("#original_packet").css({"cursor":"pointer","transform":"scale(1,1)"},5000);
$("#everything_packet").css({"opacity":"1"});
$("#sesame_packet").css({"opacity":"1"});
});
//-------------------------------------for everything_packet----------------------------//
$("#everything_packet").mouseenter(function(){
$("#everything_packet").css({"cursor":"pointer","transform":"scale(1.5,1.5)"},5000);
$("#original_packet").css({"opacity":"0.3"});
$("#sesame_packet").css({"opacity":"0.3"});
});
$("#everything_packet").mouseleave(function(){
$("#everything_packet").css({"cursor":"pointer","transform":"scale(1,1)"},5000);
$("#original_packet").css({"opacity":"1"});
$("#sesame_packet").css({"opacity":"1"});
});
//-------------------------------------for sesame_packet----------------------------------//
$("#sesame_packet").mouseenter(function(){
$("#sesame_packet").css({"cursor":"pointer","transform":"scale(1.5,1.5)"},5000);
$("#everything_packet").css({"opacity":"0.3"});
$("#original_packet").css({"opacity":"0.3"});
});
$("#sesame_packet").mouseleave(function(){
$("#sesame_packet").css({"cursor":"pointer","transform":"scale(1,1)"},5000);
$("#everything_packet").css({"opacity":"1"});
$("#original_packet").css({"opacity":"1"});
});


//---------------------------for original packet-------------------------------------//
$("#donut_original").mouseenter(function(){
$("#donut_original").css({"cursor":"pointer","transform":"scale(1.4,1.4)"});
$("#donut_everything").css({"opacity":"0.3"});
$("#donut_sesame").css({"opacity":"0.3"});
$(".title").css({"display":"none"});
$(".description_of_original").css({"display":"block"});
});
$("#donut_original").mouseleave(function(){
$("#donut_original").css({"cursor":"pointer","transform":"scale(1,1)"});
$("#donut_everything").css({"opacity":"1"});
$("#donut_sesame").css({"opacity":"1"});
$(".title").css({"display":"block"});
$(".description_of_original").css({"display":"none"});
});


//------------------------------for everything packet--------------------------------------//
$("#donut_everything").mouseenter(function(){
$("#donut_everything").css({"cursor":"pointer","transform":"scale(1.4,1.4)"});
$("#donut_original").css({"opacity":"0.3"});
$("#donut_sesame").css({"opacity":"0.3"});
$(".title").css({"display":"none"});
$(".description_of_everything").css({"display":"block"});
});
$("#donut_everything").mouseleave(function(){
$("#donut_everything").css({"cursor":"pointer","transform":"scale(1,1)"});
$("#donut_original").css({"opacity":"1"});
$("#donut_sesame").css({"opacity":"1"});
$(".title").css({"display":"block"});
$(".description_of_everything").css({"display":"none"});

});


//----------------------------------foe sesame packet-----------------------------------//
$("#donut_sesame").mouseenter(function(){
$("#donut_sesame").css({"cursor":"pointer","transform":"scale(1.4,1.4)"});
$("#donut_original").css({"opacity":"0.3"});
$("#donut_everything").css({"opacity":"0.3"});
$(".title").css({"display":"none"});
$(".description_of_sesame").css({"display":"block"});
});
$("#donut_sesame").mouseleave(function(){
$("#donut_sesame").css({"cursor":"pointer","transform":"scale(1,1)"});
$("#donut_everything").css({"opacity":"1"});
$("#donut_original").css({"opacity":"1"});
$(".title").css({"display":"block"});
$(".description_of_sesame").css({"display":"none"});
});


//-------------------------------------------------------------------------------------------//





if($(window).scrollTop()>1700 && $(window).scrollTop()<2500){
    $('.desc').css({
    'transform':'translate3d('+($(window).scrollTop()-2250)+'px,0px,0px)'
   });
 }


 if($(window).scrollTop()>4565 && $(window).scrollTop()<5000){
  $('#sprinkle_breadcrumbs').css({
 'transform':'translate3d(0px,'+($(window).scrollTop()-4500)+'px,5px)'
 });
  }


});
