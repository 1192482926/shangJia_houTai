//time:217-05-03
//made by: kami  
//查看是否有体检项
function noexamination(){
	var commodity = jQuery(".tbody .tr").length;
	if(commodity<1){
		jQuery(".no-examination-item").show();
		jQuery("#allcheck").attr("checked",false);
	}
	else{
		jQuery(".no-examination-item").hide();
	}
}
//检测体检项是否处于全选状态
function IfCheckAll(){
	var _checkbox = jQuery(".tbody .checkbox").length;
	if(_checkbox>0){
		var checked = 0;
		for(var i=0;i < _checkbox ;i++){
			if(jQuery(".tbody .checkbox").eq(i).is(":checked")){
				checked = checked + 1;
			}				
		}
		if(checked === _checkbox){
			jQuery("#allcheck").attr("checked",true);
		}
		else{
			jQuery("#allcheck").attr("checked",false);
		}
	}
}
//删除体检项
function DeleteExamination(fuvalue){
	jQuery(".tbody .tr").eq(fuvalue).remove();
	closepopup();
	noexamination();
	IfCheckAll();
}
//删除多个体检项
function Deletemore(){
	var _checkbox = jQuery(".tbody .checkbox").length;
	for(var i=0;i < _checkbox ;i++){
		if(jQuery(".tbody .checkbox").eq(i).is(":checked")){
			jQuery(".tbody .tr").eq(i).remove();
			i = i -1;
			_checkbox = _checkbox -1;
		}
	}
	closepopup();
	noexamination();
	IfCheckAll();
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
	//选择体检项
	jQuery(".tbody .checkbox").on("click",function(){
		var _checkbox = jQuery(".tbody .checkbox").length;
		if(jQuery(this).is(":checked")){
			//没有选中
			var checked = 0;
			for(var i=0;i < _checkbox ;i++){
				if(jQuery(".tbody .checkbox").eq(i).is(":checked")){
					checked = checked + 1;
				}				
			}
			if(checked === _checkbox){
				jQuery("#allcheck").attr("checked",true);
			}
		}
		else{
			//选中状态
			jQuery("#allcheck").attr("checked",false);
		}
	});
	//全选
	jQuery("#allcheck").on("click",function(){
		if(jQuery(this).is(":checked")){
			//没有选中
			var _checkbox = jQuery(".tbody .checkbox").length;
			jQuery("#allcheck").attr("checked",true);
			jQuery(".tbody .checkbox").attr("checked",true);
		}
		else{
			//选中
			jQuery("#allcheck").attr("checked",false);
			jQuery(".tbody .checkbox").attr("checked",false);
		}
	});
	//单个删除提示
	jQuery(".order-list .operating .del").on("click",function(){
		var _name = jQuery(this).parents(".tr").find(".item-name").text();
		var popuptitle = "温馨提示";//弹窗标题
		var popupcontent = "<p>您确定要删除体检项“<em>"+_name+"</em>”吗？</p>";//弹窗内容
		var btns = "2";//按钮数量
		var backfunction = "DeleteExamination";//调用函数
		var fuvalue = jQuery(this).parents(".tr").index()-1;//调用函数传值
		popupbgshow();//弹出删除提示
		popupshow(popuptitle,popupcontent,btns,backfunction,fuvalue);
	});
	//多个删除提示
	jQuery(".main .btns .delete").on("click",function(){
		//查看选中的体检人数量
		var _checkbox = jQuery(".tbody .checkbox").length;
		var n = 0;//选中的数量
		var _name = "";
		for(var i=0;i < _checkbox ;i++){
			if(jQuery(".tbody .checkbox").eq(i).is(":checked")){
				_name += "“<em>"+jQuery(".tbody .checkbox").eq(i).parents(".tr").find(".item-name").text()+"</em>”";
				n = n + 1 ;
			}
		}
		if(n>0){
			var popuptitle = "温馨提示";//弹窗标题
			var popupcontent = "<p>您确定要删除体检项"+_name+"吗？</p>";//弹窗内容
			var btns = "2";//按钮数量
			var backfunction = "Deletemore";//调用函数
			var fuvalue = "";//调用函数传值
			popupbgshow();//弹出删除提示
			popupshow(popuptitle,popupcontent,btns,backfunction,fuvalue);
		}
	});
});