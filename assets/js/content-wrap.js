//slider
function contentWrapSlider(){
	a = $("#content-wrap .course_list .panel-box").width();
	console.log(a);
	$("#content-wrap .course_list button").eq(2).click(function() {
		console.log("a");
		$("#content-wrap .course_list .panel-box").css({
			position: "relative",
			transform: "translateX(-"+a+")"
		});
	});
}
contentWrapSlider();