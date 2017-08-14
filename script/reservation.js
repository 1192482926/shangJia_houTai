//time:217-05-03
//made by: kami

jQuery(document).ready(function(){
	//展开下拉项
	jQuery(".drop-down").live("click",function(e){
		e.stopPropagation();
		if(jQuery(this).hasClass("show")){
			jQuery(this).removeClass("show");
		}
		else{
			jQuery(".drop-down").removeClass("show");
			jQuery(this).addClass("show");
		}
	});
	//选择下拉内容
	jQuery(".drop-down .select-list li").live("click",function(e){
		e.stopPropagation();
		var _select = jQuery(this).text();
		jQuery(this).parents(".drop-down").find(".select").text(_select);
		jQuery(this).parents(".drop-down").removeClass("show");
	});
	//点击页面关闭下拉列表
	jQuery(document).click(function(){
		jQuery(".drop-down").removeClass("show");
	});
});