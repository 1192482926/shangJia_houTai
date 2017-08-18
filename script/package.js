//time:217-05-03
//made by: kami
//查看是否有体检项
/*function noPackage(){
	var commodity = jQuery(".tbody .tr").length;
	if(commodity<1){
		jQuery(".no-package").show();
	}
	else{
		jQuery(".no-package").hide();
	}
}*/
//删除体检套餐
function DeletePackage(fuvalue){
	jQuery(".tbody .tr").eq(fuvalue).remove();
	closepopup();
//	noPackage();
}
jQuery(document).ready(function(){
	//展开下拉项
	jQuery(".drop-down").on("click",function(e){
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
	jQuery(".drop-down .select-list li").on("click",function(e){
		e.stopPropagation();
		var _select = jQuery(this).text();
		jQuery(this).parents(".drop-down").find(".select").text(_select);
		jQuery(this).parents(".drop-down").removeClass("show");
	});
	//点击页面关闭下拉列表
	jQuery(document).click(function(){
		jQuery(".drop-down").removeClass("show");
	});
	//删除提示
	jQuery(".order-list .operating .del").on("click",function(){
		var _name = jQuery(this).parents(".tr").find(".package-name").text();
		var popuptitle = "温馨提示";//弹窗标题
		var popupcontent = "<p>您确定要删除套餐“<em>"+_name+"</em>”吗？</p>";//弹窗内容
		var btns = "2";//按钮数量
		var backfunction = "DeletePackage";//调用函数
		var fuvalue = jQuery(this).parents(".tr").index()-1;//调用函数传值
		popupbgshow();//弹出删除提示
		popupshow(popuptitle,popupcontent,btns,backfunction,fuvalue);
	});
});