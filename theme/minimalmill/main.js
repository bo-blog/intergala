function scrollToTop () {
	$('html,body').animate({scrollTop: '0px'}, 400);
}


function lightboxImage (imgSrc) {
	$("#UI-lightbox").fadeIn();
	var winH=$(window).height();
	var img=new Image;
	img.src=imgSrc;
	$("#UI-lightbox").append( "<div id='lightbox-image'><img id='lightboxImage' src='"+imgSrc+"' alt='' /></div>" );
	$('#lightboxImage').load(function(){
		var windowWidth=$(window).width();
		var windowHeight=winH;
		var picWidth=img.width;
		var picHeight=img.height;

		var finalWidth;
		var finalHeight;

		var idealWidth=Math.floor(windowWidth*0.8)-20;
		var idealHeight=Math.floor(windowHeight*0.8)-20;


		if (picWidth<idealWidth && picHeight<idealHeight)
		{
			finalWidth=picWidth;
			finalHeight=picHeight;
		}

		else if (picWidth<idealWidth && picHeight>idealHeight)
		{
			finalHeight=idealHeight;
			finalWidth=Math.floor((picWidth/picHeight)*idealHeight);
		}

		else if (picWidth>idealWidth && picHeight<idealHeight)
		{
			finalWidth=idealWidth;
			finalHeight=Math.floor((picHeight/picWidth)*idealWidth);
		}


		else {
			if (picWidth>=picHeight)
			{
				finalWidth=idealWidth;
				finalHeight=Math.floor((picHeight/picWidth)*idealWidth);
				if (finalHeight>idealHeight)
				{
					finalHeight=idealHeight;
					finalWidth=Math.floor((picWidth/picHeight)*idealHeight);		
				}
			}
			if (picHeight>picWidth)
			{
				finalHeight=idealHeight;
				finalWidth=Math.floor((picWidth/picHeight)*idealHeight);
				if (finalWidth>idealWidth)
				{
					finalWidth=idealWidth;
					finalHeight=Math.floor((picHeight/picWidth)*idealWidth);
				}
			}
		}

		$("#lightboxImage").css("width", finalWidth+"px");
		$("#lightboxImage").css("height", finalHeight+"px");
		$("#lightbox-image").css("position", "fixed");
		$("#lightbox-image").css("top", Math.floor((windowHeight-finalHeight)/2));
		$("#lightbox-image").css("left", Math.floor((windowWidth-finalWidth)/2));
	});
	$('#lightboxImage').css("cursor", "pointer");
	$('#lightboxImage').click(function (){
		if (imgSrc.indexOf ('?imageView2/')!=-1)
		{
			var imgSrcs=imgSrc.split('?imageView2/');
			imgSrc=imgSrcs[0];
		}
		window.open(imgSrc);
	});
	$('#UI-lightbox').click(function (){
		$('#UI-lightbox').fadeOut();
		$("#UI-lightbox").html('');
		$("#UI-lightbox").unbind();
	});
}

function lightboxCore (VAction, URLorHTML) {
	$("#UI-lightbox").fadeIn(500);
	$("#UI-lightbox").append( "<div id='lightbox-message'></div>" );
	var windowWidth=$(window).width();
	var windowHeight=$(window).height();

	var finalWidth=$("#lightbox-message").width();
	var finalHeight=$("#lightbox-message").height();

	$("#lightbox-message").css("position", "fixed");
	$("#lightbox-message").css("top", Math.floor((windowHeight-finalHeight)/2));
	$("#lightbox-message").css("left", Math.floor((windowWidth-finalWidth)/2));

	if (VAction == "loader")
	{
		$("#lightbox-message").load(URLorHTML);
	} else {
		$("#lightbox-message").html(URLorHTML);
	}
}

function lightboxLoader (loadURL) {
	$(".commentArea").hide();
	lightboxCore ('loader', loadURL);
}

function lightboxContent (contentHTML) {
	lightboxCore ('HTML', contentHTML);
}

function lightboxLoaderDestroy () {
	$(".commentArea").show();
	$('#UI-lightbox').fadeOut();
	$("#UI-lightbox").html('');
	$("#UI-lightbox").unbind();
}

function changeNav ()
{
	var aPos=$(window).scrollTop();
	var bPos=$("#mainArea").position().top;
	if (aPos>bPos)
	{
		$("header").addClass('headerShrink');
	}
	else {
		$("header").removeClass('headerShrink');
	}
	t=setTimeout ("changeNav()", 200);
}


