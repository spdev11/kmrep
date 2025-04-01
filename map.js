$(document).ready(function() {
	$('.object-name').hover(function(){
		var a = $(this).attr("class");
		var b = a.toString().slice(-2);
   		$('.object-marker').toggleClass(`object-marker${b}`);
	});
});