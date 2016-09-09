//width 760px den asagida search un islemesi
function searchbar(){
	$("#header-wrap button").click(function() {
		if($(window).width() < 760){
			$("#header-wrap .navigator").hide();
			$(this).hide();
			$("#header-wrap .logo2").hide();
			$("#header-wrap .shopping").hide();
			$("#header-wrap .search input").css({
				display: 'block'
			});
			$("#header-wrap .search").css({
				width: '100%'
			});
		}
	});

	$("#header-wrap .search .submit").click(function() {
		if($(window).width() < 760){
			$("#header-wrap .navigator").show();
			
			$("#header-wrap .logo2").show();
			$("#header-wrap .shopping").show();
			$("#header-wrap .search input").css({
				display: 'none'
			});
			$("#header-wrap button").show();
			$("#header-wrap .search").css({
				width: '0'
			});
		}
	});
}
searchbar();


//Sol menunun uzunlugunun footere qeder uzanmasi
function leftMenuWidth(){
		a = $("#content-wrap").height();
		$("#header-wrap .fixedMenuBar").height(a);
		$("#header-wrap .fixedMenuBar").find('ul').height(a);
}
leftMenuWidth();




// function sidebar(){
// var deg=0;
// var count = 0;
// var nav_s = $('.navigator i');  
// var window_s = $("html,body");
// var collapse_s = $(".navigator .myCollapse");
// var i;


// 	nav_s.on('click', function(e) {
// 	e.preventDefault()
// 	if(count==0){
// 		collapsing();
// 	}
// 	else{
// 		nonecollapse();
// 	}
// });	
// 	function nonecollapse() {
// 		count=0;
// 		nav_s.animate({left: '0'}, 500);
// 		window_s.animate({marginLeft: '0'}, 500);
// 		collapse_s.animate({right:'-270px'}, 500);
// 	}
// 	function collapsing() {
// 		count=1;
// 		nav_s.animate({left: '-245px'}, 500);
// 		window_s.animate({marginLeft: '-270px'}, 500);
// 		collapse_s.animate({right:'0'}, 500);
// 	}
// }

// sidebar();