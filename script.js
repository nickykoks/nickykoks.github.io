$(document).ready(function(){
	//Promeni LocalStorage sa Cookies kad naucis!
	var toStory;
	if(JSON.parse(localStorage.getItem('toStory')) != null){
		toStory = JSON.parse(localStorage.getItem('toStory'));
	}
	 
	/*function setCookie(cname, cvalue) {
	  document.cookie = cname + "=" + cvalue + ";path=/";
	}
	setCookie('djoka', 5); */
	
	$(window).load(function(){
		//Cookies.set("tooo", "true", { expires:7 }); sa onim cmd-om
		if(toStory == true){
			$('.blackScreenStart').fadeOut(1500);
			$('#backgroundImg').css({
				transform : 'scale(1)',
				transition: 'all ease 15s'
			});
			$('#mainPageText').attr('id', 'mainPageTextClicked');
			$('#mainPageTextClicked .welcome').hide();
			$('#mainPageTextClicked .lineUp').hide();
			$('#mainPageTextClicked .lineDown').hide();
			$('.diveInBtn').css({
				opacity : '0'
			});
			mySlideShow.play();
			slideshowPlaying = true;
			diveInFoo2();
			
			toStory = false;
			localStorage.setItem('toStory', JSON.stringify(toStory));
		
			slideshowPlaying = false;
			$('.blackScreenStart').fadeOut(1500);
			$('#backgroundImg').css({
				transform : 'scale(1)',
				transition: 'all ease 15s'
			});
		}else{
			slideshowPlaying = false;
			$('.blackScreenStart').fadeOut(1500);
			$('#backgroundImg').css({
				transform : 'scale(1)',
				transition: 'all ease 15s'
			});
		}
	});
	
	//mainText disappear, slider appear.
	var divedIn = false;
	$('.diveInBtn').on('click', diveInFoo);
	$('#storiesList').on('click', diveInFoo);
	if(window.location.href == 'file:///C:/Users/Ivan/Desktop/vitezovi/site/mainPage.html'){
	$(document).keypress(function(e) {
		if(e.which == 13 && divedIn == false) {
			diveInFoo();
			setTimeout(function(){divedIn = true;}, 1200);
		}
	});
	}
	function diveInFoo(){
		var lokacija = 'file:///C:/Users/Ivan/Desktop/vitezovi/site/mainPage.html';
		if(window.location.href != lokacija){
			var destination = 'mainPage.html';
			zatamnjenjeFoo(destination);
			toStory = true;
			localStorage.setItem('toStory', JSON.stringify(toStory));
		}else{
			$('#mainPageText').attr('id', 'mainPageTextClicked');
			$('#mainPageTextClicked .welcome').fadeOut(555);
			$('#mainPageTextClicked .lineUp').fadeOut(555);
			$('#mainPageTextClicked .lineDown').fadeOut(555);
			$('.diveInBtn').css({
				transition : '900',
				opacity : '0'
			});
			if(slideshowPlaying == false){
				mySlideShow.play();
				slideshowPlaying = true;
			}
			setTimeout(function(){
				$('.diveInBtn').hide();
				$('#backgroundImg').css({
				filter : 'grayscale(100%)',
				transition: '2s'
				});
				$('#sliderWrapper').fadeIn(2000);
			}, 800);
		}
	}
	var slideshowPlaying = false; //da zapocne slideshow tek kad se udje na tu stranicu.
	function diveInFoo2(){
		$('#mainPageText').attr('id', 'mainPageTextClicked');
		$('#mainPageTextClicked .welcome').hide();
		$('#mainPageTextClicked .lineUp').hide();
		$('#mainPageTextClicked .lineDown').hide();
		$('.diveInBtn').css({
			opacity : '0'
		});
		if(slideshowPlaying == false){
			mySlideShow.play();
			slideshowPlaying = true;
		}
			$('.diveInBtn').hide();
			$('#backgroundImg').css({
			filter : 'grayscale(100%)',
			transition: '2s'
			});
			$('#sliderWrapper').fadeIn(800);
	}
	//dropDownMenuItems
	$('#storiesListWrap').on('mouseleave', function(){
		$('.dropDownList').hide();
	});
	$('#storiesList').on('mouseenter', function(){
		$('.dropDownList').slideDown('fast');
	});
	$('.dropDownList').on('mouseleave', function(){$(this).hide();});
	//dropDownMenuItems i ostali linkovi onClick zatamnjenjeFoo
	$('#arturList').on('click', function(e){
			e.preventDefault();
			var destination = 'arthurPage.html';
			zatamnjenjeFoo(destination);
	});
	$('#parsifalList').on('click', function(e){
			e.preventDefault();
			var destination = 'parsifalPage.html';
			zatamnjenjeFoo(destination);
	});
	$('#ritterList').on('click', function(e){
			e.preventDefault();
			var destination = 'ritterPage.html';
			zatamnjenjeFoo(destination);
	});
	$('#contactPage').on('click', function(e){
			e.preventDefault();
			var destination = 'contact.html';
			zatamnjenjeFoo(destination);
	});
	$('#homePage').on('click', function(e){
			e.preventDefault();
			var destination = 'mainPage.html';
			zatamnjenjeFoo(destination);
	});
	$('#logo').on('click', function(e){
			e.preventDefault();
			var destination = 'mainPage.html';
			zatamnjenjeFoo(destination);
	});
	
	
	var that, destination;
	var thumbIndex = 2;
	var picArr = ['startPageImg/knight1.jpg','startPageImg/knight2.jpg','startPageImg/knight3.jpg'];
	//postavi slike iz niza u thumbnail wrapper
	$('.slides').each(function(index){$(this).attr('src', picArr[index]);});
	// Are we in the middle of an animation?
	var currentlyAnimating = false;
	//funkcija za ime viteza na slideru
	function knightsName(){
		$('#bookNameField').fadeOut(222, function(){
		var that = $('#bookNameField');
		switch($('#mainSlide').attr('src')){
			case 'startPageImg/knight1.jpg':
				that.html('PARSIFAL');
				break;
			case 'startPageImg/knight2.jpg':
				that.html('ARTHUR');
				break;
			case 'startPageImg/knight3.jpg':
				that.html('MALI DJOKICA');
				break;
		}
		$(this).fadeIn(222);
		});
	}
	
	var mySlideShow = (function(){
		var intervalHolder;
		var slide = function(){
			if(thumbIndex == 0){
			$('#slides').fadeOut(800, function(){
				$('#mainSlide').attr('src', picArr[1]);
				$('#firstSlide').attr('src', picArr[0]);
				$('#lastSlide').attr('src', picArr[2]);
				$(this).fadeIn(800);
			knightsName();
			});
			}else if(thumbIndex == 1){
			$('#slides').fadeOut(800, function(){
				$('#mainSlide').attr('src', picArr[2]);
				$('#firstSlide').attr('src', picArr[1]);
				$('#lastSlide').attr('src', picArr[0]);
				$(this).fadeIn(800);
			knightsName();
			});
			}else if(thumbIndex == 2){
			$('#slides').fadeOut(800, function(){
				$('#mainSlide').attr('src', picArr[0]);
				$('#firstSlide').attr('src', picArr[2]);
				$('#lastSlide').attr('src', picArr[1]);
				$(this).fadeIn(800);
			knightsName();
			});
			}
			thumbIndex--;
			if(thumbIndex==-1){thumbIndex=2;}
		}
		function play(){intervalHolder = setInterval(slide, 12000);}
		
		function stop(){clearInterval(intervalHolder);}
		
		return {
			play:play,
			stop:stop
		};
	})();
		
	//idi na stranicu viteza sa slike
	var knight1 = 'startPageImg/knight1.jpg';
	var knight2 = 'startPageImg/knight2.jpg';
	var knight3 = 'startPageImg/knight3.jpg';
	$('.slides').on('click', function(){
		that = $(this);
		if($(this).attr('src') == knight1){
			destination = 'parsifalPage.html';
			zatamnjenjeFoo(destination);
		}else if($(this).attr('src') == knight2){
			destination = 'arthurPage.html';
			zatamnjenjeFoo(destination);
		}else if($(this).attr('src') == knight3){
			destination = 'ritterPage.html';
			zatamnjenjeFoo(destination);}
	});
	//on bannerButton click redirect to appropriate page with screen fading in black.
	function btnsClick(){
		var that = $(this);
		if($('#mainSlide').attr('src') == knight1){
			destination = 'parsifalPage.html';
			zatamnjenjeFoo(destination);
		}else if($('#mainSlide').attr('src') == knight2){
			destination = 'arthurPage.html';
			zatamnjenjeFoo(destination);
		}else if($('#mainSlide').attr('src') == knight3){
			destination = 'ritterPage.html';
			zatamnjenjeFoo(destination);
		}
	}
	$('#bookNameField').on('click', btnsClick);
	$(document).on('keypress', function(e) {
		if(e.which == 13 && divedIn == true) {
			btnsClick();
			divedIn = false;
		}
	});
	//zatamnjenjeFoo funkcija
	function zatamnjenjeFoo(destinacija){
			$('.slideArrows').fadeOut(250);
			$('.blackScreenStart').fadeIn(500, function(){
			window.location.href = destinacija;
		});
	}
	
	//leva strelica
	$('#arrowLeft').on('click', arrowLeftFoo);
	function arrowLeftFoo(){
		if (currentlyAnimating){return;}
		currentlyAnimating = true;
		mySlideShow.stop();
		thumbIndex--;
		if(thumbIndex==-1){thumbIndex=2;}
		if(thumbIndex == 2){
			$('#slides').fadeOut('fast', function(){
				$('#mainSlide').attr('src', picArr[1]);
				$('#firstSlide').attr('src', picArr[0]);
				$('#lastSlide').attr('src', picArr[2]);
				$(this).fadeIn('slow',function(){currentlyAnimating = false;});
			});	
			knightsName();
			}else if(thumbIndex == 0){
			$('#slides').fadeOut('fast', function(){
				$('#mainSlide').attr('src', picArr[2]);
				$('#firstSlide').attr('src', picArr[1]);
				$('#lastSlide').attr('src', picArr[0]);
				$(this).fadeIn('slow',function(){currentlyAnimating = false;});
			});
			knightsName();
			}else if(thumbIndex == 1){
			$('#slides').fadeOut('fast', function(){
				$('#mainSlide').attr('src', picArr[0]);
				$('#firstSlide').attr('src', picArr[2]);
				$('#lastSlide').attr('src', picArr[1]);
				$(this).fadeIn('slow',function(){currentlyAnimating = false;});
			});
			knightsName();
			}
	}//leva strelica na tastaturi
	$(document).on('keydown', function(e){if(e.which == 37){arrowLeftFoo();}});
	//leva strelica hover img
	$('#arrowLeft').mouseover(function(){$(this).attr('src', 'strelice/blueleft.png')});
	$('#arrowLeft').mouseleave(function(){$(this).attr('src', 'strelice/left.png')});
	/* Onaj drugi efekat strelice
	$('#arrowLeft').mouseover(function(){
		$(this).css({
			'opacity' : '1',
			'transition' : '1s',
			'transform' : 'scale(1.2)'
		})
	});
	$('#arrowLeft').mouseleave(function(){
		$(this).css({
			'opacity' : '0',
			'transition' : '0.8s',
			'transform' : 'scale(1)'
			})
		}); */
	//desna strelica
	$('#arrowRight').on('click', arrowRightFoo);
	function arrowRightFoo(){
		if (currentlyAnimating){return;}
		currentlyAnimating = true;
		mySlideShow.stop();
		thumbIndex++;
		if(thumbIndex==3){thumbIndex=0;}
		if(thumbIndex == 2){
			$('#slides').fadeOut('fast', function(){
				$('#mainSlide').attr('src', picArr[1]);
				$('#firstSlide').attr('src', picArr[0]);
				$('#lastSlide').attr('src', picArr[2]);
				$(this).fadeIn('slow',function(){currentlyAnimating = false;});
			});	
			knightsName();
			}else if(thumbIndex == 0){
			$('#slides').fadeOut('fast', function(){
				$('#mainSlide').attr('src', picArr[2]);
				$('#firstSlide').attr('src', picArr[1]);
				$('#lastSlide').attr('src', picArr[0]);
				$(this).fadeIn('slow',function(){currentlyAnimating = false;});
			});
			knightsName();
			}else if(thumbIndex == 1){
			$('#slides').fadeOut('fast', function(){
				$('#mainSlide').attr('src', picArr[0]);
				$('#firstSlide').attr('src', picArr[2]);
				$('#lastSlide').attr('src', picArr[1]);
				$(this).fadeIn('slow',function(){currentlyAnimating = false;});
			});
			knightsName();
			}
	}//desna strelica na tastaturi
	$(document).on('keydown', function(e) {if(e.which == 39) {arrowRightFoo();}});
	//desna strelica hover img
	$('#arrowRight').mouseover(function(){$(this).attr('src', 'strelice/blueright.png')});
	$('#arrowRight').mouseleave(function(){$(this).attr('src', 'strelice/right.png')});
			
//ako hocu da biram brzinu #smoothscrolla
 /* $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
 */

//text-pages

//page-up-btn
$('.page-up-btn').on('mouseleave', function(){
	$(this).attr('src', 'strelice/left.png');
});
$('.page-up-btn').on('mouseenter', function(){
	$(this).attr('src', 'strelice/blueleft.png');
});
$(function(){
$(window).scroll(function() {
	if ($(this).scrollTop() >= 300) {
	$('.page-up-btn').fadeIn('slow');
	}else {$('.page-up-btn').fadeOut('fast');}
});
});
//page-up-btn FULLSCREEN
$('.page-up-btn-fulls').on('mouseleave', function(){
	$(this).attr('src', 'strelice/left.png');
});
$('.page-up-btn-fulls').on('mouseenter', function(){
	$(this).attr('src', 'strelice/blueleft.png');
});
$(function(){
$(window).scroll(function() {
	if ($(this).scrollTop() >= 300) {
	$('.page-up-btn-fulls').fadeIn('slow');
	}else {$('.page-up-btn-fulls').fadeOut('fast');}
});
});


//slide down menu levo
$(".story-navigator").hover(function() {
	$(".story-headings").stop().slideDown(300);
	$('.btn1case').css({'background':'black', 'color':'#f3b51e'});
}, function(){
    $(".story-headings").stop().slideUp(300);
	$('.btn1case').css({'background':'rgba(255,255,255,0.6)', 'color':'black'});
});
//arthur show sve hide (jer se ponavlja vise puta)
function arthurShow(){
	$('#anchor-1-arthur').show();
	$('#anchor-2-arthur').hide();
	$('#anchor-3-arthur').hide();
	$('#anchor-4-arthur').hide();
}
//parsifal show
function parsifalShow(){
	$('#anchor-1-parsifal').show();
	$('#anchor-2-parsifal').hide();
	$('#anchor-3-parsifal').hide();
	$('#anchor-4-parsifal').hide();
}
//ritter show
function ritterShow(){
	$('#anchor-1-ritter').show();
	$('#anchor-2-ritter').hide();
	$('#anchor-3-ritter').hide();
	$('#anchor-4-ritter').hide();
}
//idi na arthur story kad kliknes navigate the story button
$('.btn1case-arthur').on('click', function(){
	arthurShow();
});
$('.sidebar-btn-anchors').on('click', function(){
	arthurShow();
});
$('.btn1case-parsifal').on('click', function(){
	parsifalShow();
});
$('.sidebar-btn-anchors').on('click', function(){
	parsifalShow();
});
$('.btn1case-ritter').on('click', function(){
	ritterShow();
});
$('.sidebar-btn-anchors').on('click', function(){
	ritterShow();
});
//opcije levo "more" da sve se pojavljuju na toj istoj stranici
$('#side-btn-1').on('click', function(){
	$(window).scrollTop(0);
	arthurShow();
});
//arthur
$('#side-btn-2').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-arthur').hide();
	$('#anchor-2-arthur').show();
	$('#anchor-3-arthur').hide();
	$('#anchor-4-arthur').hide();
});
$('#side-btn-3').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-arthur').hide();
	$('#anchor-2-arthur').hide();
	$('#anchor-3-arthur').show();
	$('#anchor-4-arthur').hide();
});
$('#side-btn-4').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-arthur').hide();
	$('#anchor-2-arthur').hide();
	$('#anchor-3-arthur').hide();
	$('#anchor-4-arthur').show();
});
//parsifal
$('#side-btn-2-parsifal').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-parsifal').hide();
	$('#anchor-2-parsifal').show();
	$('#anchor-3-parsifal').hide();
	$('#anchor-4-parsifal').hide();
});
$('#side-btn-3-parsifal').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-parsifal').hide();
	$('#anchor-2-parsifal').hide();
	$('#anchor-3-parsifal').show();
	$('#anchor-4-parsifal').hide();
});
$('#side-btn-4-parsifal').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-parsifal').hide();
	$('#anchor-2-parsifal').hide();
	$('#anchor-3-parsifal').hide();
	$('#anchor-4-parsifal').show();
});
//ritter
$('#side-btn-2-ritter').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-ritter').hide();
	$('#anchor-2-ritter').show();
	$('#anchor-3-ritter').hide();
	$('#anchor-4-ritter').hide();
});
$('#side-btn-3-ritter').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-ritter').hide();
	$('#anchor-2-ritter').hide();
	$('#anchor-3-ritter').show();
	$('#anchor-4-ritter').hide();
});
$('#side-btn-4-ritter').on('click', function(){
	$(window).scrollTop(0);
	$('#anchor-1-ritter').hide();
	$('#anchor-2-ritter').hide();
	$('#anchor-3-ritter').hide();
	$('#anchor-4-ritter').show();
});
//butoni za prikaz i sakrivanje sidebar menija
//skrivanje
$('#menu-hide-btn').on('mouseleave', function(){
	$(this).attr('src', 'strelice/left.png');
});
$('#menu-hide-btn').on('mouseenter', function(){
	$(this).attr('src', 'strelice/blueleft.png');
});
$('#menu-hide-btn').on('click', function(){
	$('.sidebar').css('transition', '0s').fadeOut(300);
	$('#menu-show-btn').fadeIn(300);
	$('.menu-btn2').fadeIn(300);
});
// za fullscreen
$('#menu-hide-btn-fulls').on('mouseleave', function(){
	$(this).attr('src', 'strelice/left.png');
});
$('#menu-hide-btn-fulls').on('mouseenter', function(){
	$(this).attr('src', 'strelice/blueleft.png');
});
$('#menu-hide-btn-fulls').on('click', function(){
	$('.sidebar-fulls').css('transition', '0s').fadeOut(300);
	$('#menu-show-btn-fulls').fadeIn(300);
	$('.menu-btn2-fulls').fadeIn(300);
});
//prikaz
$('#menu-show-btn').on('mouseleave', function(){
	$(this).attr('src', 'strelice/left.png');
});
$('#menu-show-btn').on('mouseenter', function(){
	$(this).attr('src', 'strelice/blueleft.png');
});
$('#menu-show-btn').on('click', function(){
	$('.sidebar').css('transition', '0s').fadeIn(300);
	$(this).fadeOut(300);
	$('.menu-btn2').fadeOut(100);
});
// za fullscreen
$('#menu-show-btn-fulls').on('mouseleave', function(){
	$(this).attr('src', 'strelice/left.png');
});
$('#menu-show-btn-fulls').on('mouseenter', function(){
	$(this).attr('src', 'strelice/blueleft.png');
});
$('#menu-show-btn-fulls').on('click', function(){
	$('.sidebar-fulls').css('transition', '0s').fadeIn(300);
	$(this).fadeOut(300);
	$('.menu-btn2-fulls').fadeOut(100);
});

//fullscreen button
$('#fs-btn').on('click', function(){
	$('.sidebar-fulls').css('transition', '0.5s');
	$('.sidebar').css('transition', '0.5s');
	setTimeout(function(){
		$('.sidebar').attr('class', 'sidebar-fulls');
		$('#leviPatern').attr('id', 'leviPatern-fulls');
		$('.leviPaternKlasa1').attr('class', 'backClassFS1');
		$('.leviPaternKlasa2').attr('class', 'backClassFS2');
		$('.leviPaternKlasa3').attr('class', 'backClassFS3');
		$('.fulls-background').fadeIn();
		$('.text-pages').attr('class', 'text-pages-fulls');
		$('.menu-show-btn').attr('class', 'menu-btn-fulls menu-show-btn-fulls');
		$('.menu-hide-btn').attr('class', 'menu-btn-fulls menu-hide-btn-fulls');
		$('.page-up-btn').attr('class', 'page-up-btn-fulls');
		$('.menu-btn2').attr('class', 'menu-btn2-fulls');
		$('#fs-btn').hide();
		$('#fs-btn-hide').show();
		$('#menu-show-btn').hide();
		$('#menu-hide-btn').hide();
		$('#menu-show-btn-fulls').show();
		$('#menu-hide-btn-fulls').show();
		$('#fs-btn-a').hide();
		$('#fs-btn-a-hide').show();
		$('#footer').hide();
	},5);
});
//fullscreen leave button
$('#fs-btn-hide').on('click', function(){
	$('.sidebar').css('transition', '0.5s');
	$('.sidebar-fulls').css('transition', '0.5s');
	setTimeout(function(){
		$('.sidebar-fulls').attr('class', 'sidebar');
		$('#leviPatern-fulls').attr('id', 'leviPatern');
		$('.backClassFS1').attr('class', 'leviPaternKlasa1');
		$('.backClassFS2').attr('class', 'leviPaternKlasa2');
		$('.backClassFS3').attr('class', 'leviPaternKlasa3');
		$('.fulls-background').fadeOut();
		$('.text-pages-fulls').attr('class', 'text-pages');
		$('.menu-show-btn-fulls').attr('class', 'menu-btn menu-show-btn');
		$('.menu-hide-btn-fulls').attr('class', 'menu-btn menu-hide-btn');
		$('.page-up-btn-fulls').attr('class', 'page-up-btn');
		$('.menu-btn2-fulls').attr('class', 'menu-btn2');
		$('#fs-btn-hide').hide();
		$('#fs-btn').show();
		$('#menu-show-btn-fulls').hide();
		$('#menu-hide-btn-fulls').hide();
		$('#menu-show-btn').show();
		$('#menu-hide-btn').show();
		$('#fs-btn-a').show();
		$('#fs-btn-a-hide').hide();
		$('#footer').hide();
	},5);
});

$('#submitButton').on('click', function(){
	var name = $('#name').val();
	var subject = $('#subject').val();
	var textarea = $('#textarea').val();
	var zarez = ', ';
	
	if(subject == "" || name == ""){zarez = ' ';}
	
	window.open('mailto:xempegex@hotmail.com?subject='+(subject + zarez + name)+'&body=' + textarea);
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('#footer').fadeIn('fast');
   }else{ $('#footer').hide();}
});


























	
});