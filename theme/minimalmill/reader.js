var imgNewWidth = $(window).width();
function mobileReader () {
	$("#ajax-article-list .details img").each (function () {
		var imgOrigWidth = $(this).width();
		var imgURL = $(this).attr('src');
		var imgOrigHeight = $(this).height();
		var imgTop = $(this).offset().top;
		var imgNewHeight = imgOrigHeight / imgOrigWidth * imgNewWidth;
		$(this).attr('height', imgNewHeight);
		$('body').append('<a href="'+imgURL+'" target="_blank"><img src="'+imgURL+'" style="position: absolute; top:'+imgTop+'px; left:0; width:'+imgNewWidth+'px" class="readerImg"></a>');
	});
}

$(window).load(function (){
	if (imgNewWidth<770) {
		$('.pageLink').unbind("click");
		mobileReader ();
	}
});
