//time:2017-03-23
//made by:kami

//遮罩层大小
function popupbg(){
	jQuery(".pop-up-bg").fadeIn();
}
//弹窗位置
function popup(){
	var popupwidth = jQuery(".pop-up").width()/2;//页面宽度
	var popupheight = jQuery(".pop-up").height()/2;//页面高度
	jQuery(".pop-up").css("margin-left",-popupwidth);
	jQuery(".pop-up").css("margin-top",-popupheight);
	jQuery(".pop-up").fadeIn();
}
//显示遮罩层
function popupbgshow(){
	var popupbghtml = jQuery('<div class="pop-up-bg"><div class="bg"></div></div>');
	popupbghtml.appendTo("body");
	popupbg();
}
//显示弹窗
function popupshow(popuptitle,popupcontent,btns,backfunction,fuvalue){
	//popuptitle 弹出层标题 ,popupcontent 弹出层提示内容 ,btns 按钮数量 ,backfunction 执行函数 , fuvalue 函数传值;
	if(btns == 1){
	var popuphtml = jQuery('<div class="pop-up">'
				+'		<div class="pop-up-title">'+popuptitle+'</div>'
				+'		<div class="pop-up-content">'
				+'			<ul>'+popupcontent+'</ul>'
				+'		</div>'
				+'		<div class="pop-up-btns">'
				+'			<a href="javascript:cancel();">确定</a>'
				+'		</div>'
				+'	</div>');
	}
	else{
	var popuphtml = jQuery('<div class="pop-up">'
				+'		<div class="pop-up-title">'+popuptitle+'</div>'
				+'		<div class="pop-up-content">'
				+'			<ul>'+popupcontent+'</ul>'
				+'		</div>'
				+'		<div class="pop-up-btns">'
				+'			<a href="javascript:'+backfunction+'('+fuvalue+');" class="yes">确定</a>'
				+'			<a href="javascript:cancel();" class="cancel">取消</a>'
				+'		</div>'
				+'	</div>');
	}
	popuphtml.appendTo("body");
	popup();
	jQuery(".pop-up-btns a:first").focus();
}
//弹窗取消和关闭
function cancel(){
	closepopup();
}
function closepopup(){
	jQuery(".pop-up").fadeOut(function(){
		jQuery(".pop-up").remove();
	})
	jQuery(".pop-up-bg").fadeOut(function(){
		jQuery(".pop-up-bg").remove();
	});
}
//设置
function topset(){
	//显示密码修改框
	var popuptitle = "修改密码";//弹窗标题
	var popupcontent = "<div class='topset'>";//弹窗内容
	popupcontent += "<div class='set-line'><label class='line-l' for='old'>旧密码：</label><input type='password' id='old' value='' /></div>";//弹窗内容
	popupcontent += "<div class='set-line'><label class='line-l' for='new'>新密码：</label><input type='password' id='new' value='' /></div>";//弹窗内容
	popupcontent += "<div class='set-line'><label class='line-l' for='confirm'>确认密码：</label><input type='password' id='confirm' value='' /></div>";//弹窗内容
	popupcontent += "<div class='error-line'>错误提示</div>";//弹窗内容
	popupcontent += "<div class='clear'></div></div>";//弹窗内容
	var btns = "2";//按钮数量
	var backfunction = "changepassword";//调用函数
	var fuvalue = "";//调用函数传值
	popupbgshow();//弹出删除提示
	popupshow(popuptitle,popupcontent,btns,backfunction,fuvalue);
}
//修改密码
function changepassword(){
	//验证旧密码和提交新密码
	closepopup();
}
jQuery(window).load(function(){
	
});

/* x-add 高度等于当前窗口的高度 */
$(".main-right").css('min-height',$(window).height());
$(".main-left").css('min-height',$(window).height()); 
