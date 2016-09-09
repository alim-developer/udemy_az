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