//time:217-05-03
//made by: kami

jQuery(document).ready(function(){
	//
	jQuery(".nature li").live("click",function(){
		jQuery(".nature li").removeClass("on");
		jQuery(this).addClass("on");
	}); 
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
	//是否需要提前预约
	jQuery(".reservation label").live("click",function(){
		var _now = jQuery(this).text().replace(/(^\s*)|(\s*$)/g, "");
		if(_now === "是"){
			jQuery(".reservation-input").show();
		}
		else{
			jQuery(".reservation-input").hide();
		}
	});
	//选择系统封面或者自定义封面
	jQuery(".package-img-check label").live("click",function(){
		var _now = jQuery(this).index();
		if(_now === 0){
			jQuery(".diy-img").hide();
			jQuery(".system-img").show();
		}
		else{
			jQuery(".system-img").hide();
			jQuery(".diy-img").show();
		}
	});
	//选择套餐类型，加载系统默认封面
	jQuery(".package-type li").live("click",function(){
		jQuery(".system-img .no-style").hide();
		jQuery(".system-img .system-img-list").show();
	});
	//选择系统封面选中后改变边框样式
	jQuery(".system-img .system-img-list li").live("click",function(){
		jQuery(".system-img .system-img-list li").removeClass("on");
		jQuery(this).addClass("on");
	});
	//鼠标经过系统封面，查看封面图片大图
	jQuery(".system-img .system-img-list li img").live("mouseover mouseout",function(e){
		if(e.type === "mouseover"){
			var _src = jQuery(this).attr("src");
			var _viewImg = jQuery('<div class="viewImg"><img src="'+_src+'" /></div>');
			_viewImg.appendTo(".system-img");
			jQuery(".viewImg").fadeIn();
		}
		else{
			jQuery(".viewImg").remove();
		}
	});
	//显示体检项目列表
	jQuery(".department-name").live("click",function(){
		jQuery(this).toggleClass("show");
		jQuery(this).next(".department-list").stop().slideToggle();
	});
	//显示子项内容
	jQuery(".department .department-list .class-name li").live("click",function(){
		var _thenum = jQuery(this).index();
		jQuery(this).parent().find("li").removeClass("on");
		jQuery(this).addClass("on");
		jQuery(this).parents(".row").find(".item ul").hide();
		jQuery(this).parents(".row").find(".item ul").eq(_thenum).fadeIn();
	});
	//添加或删除已选项
	jQuery(".department .department-list .item li").live("click",function(){
		var _text = jQuery(this).text().replace(/(^\s*)|(\s*$)/g, "");
		if(jQuery(this).find("i").hasClass("on")){//删除
			var _size = jQuery(this).parents(".row").find(".chose li").size();
			for(var i = 0;i < _size;i++){
				if(_text === jQuery(this).parents(".row").find(".chose li").eq(i).text().replace(/(^\s*)|(\s*$)/g, "")){
					jQuery(this).parents(".row").find(".chose li").eq(i).remove();
					jQuery(this).parents(".department").find(".department-name span em").text(jQuery(this).parents(".row").find(".chose li").size());
				}
			}
		}
		else{//添加
			jQuery('<li><i></i>'+_text+'</li>').appendTo(jQuery(this).parents(".row").find(".chose"));
			jQuery(this).parents(".department").find(".department-name span em").text(jQuery(this).parents(".row").find(".chose li").size());
		}
		jQuery(this).find("i").toggleClass("on");
	});
	//删除按钮删除已选项
	jQuery(".department .department-list .chose li i").live("click",function(){
		var _text = jQuery(this).parent().text().replace(/(^\s*)|(\s*$)/g, "");
		var _size = jQuery(this).parents(".row").find(".item li").size();
		for(var i = 0; i < _size; i++){
			if(_text === jQuery(this).parents(".row").find(".item li").eq(i).text().replace(/(^\s*)|(\s*$)/g, "")){
				jQuery(this).parents(".row").find(".item li").eq(i).find("i").removeClass("on");
			}
		}
		jQuery(this).parents(".department").find(".department-name span em").text(jQuery(this).parents(".row").find(".chose li").size()-1);
		jQuery(this).parent("li").remove();
		
	});
	//显示删除图片
	jQuery(".photo .img-box").live("hover",function(){
		jQuery(this).find(".del").toggle();
	});
	//删除上传的图片
	jQuery(".photo .img-box .del a").live("click",function(){
		jQuery(this).parents(".img-box").remove();
	});
});