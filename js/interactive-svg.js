function respond (response) {
		var t = $(this);
		t.addClass("svgLoaded");
		t.attr("xmlns", "http://www.w3.org/2000/svg");
		t.attr("xmlns:xlink", "http://www.w3.org/1999/xlink");
		/* xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"*/
		
		if (!response) { // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from a the http protocol (not locally) and have read <strong><a href="http://tympanus.net/codrops/?p=13831#the-javascript">this important part of the tutorial</a></strong>');
		}



$(function () {

	$("#britainStage").load('britishLine.svg', respond);
	$("#yorkStage").load('yorkishLine.svg', respond);

});
