//time:217-05-26
//made by: kami
jQuery(document).ready(function(){
	jQuery(".filter").live("click",function(){
		jQuery(".filter").removeClass("on");
		jQuery(this).addClass("on");
	});
});