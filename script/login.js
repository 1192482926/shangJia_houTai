//time:217-03-28
//made by: kami
jQuery(document).ready(function(){
	//隐藏输入提示
	jQuery(".userbox .input-box .input").focus(function(){
		jQuery(this).next(".input-tips").hide();
	});
	//输入框失去焦点，检测输入框是否为空，如果为空则显示输入提示。
	jQuery(".userbox .input-box .input").focusout(function(){
		var _type = jQuery(this).attr("type");//判断输入框的类型
		if(_type=="password"){//如果是密码输入框
			var _input = jQuery(this).val();
			if(_input == ""){//如果为空，则显示输入提示
				jQuery(this).next(".input-tips").show();
			}
		}
		else{//不是密码输入框
			var _input = jQuery(this).val().replace(/(^\s*)|(\s*$)/g, "").replace(/\s/g,"");//获取输入框中去掉空格后的值
			if(_input == ""){//如果为空，则去掉输入框中的空格，并显示输入提示
				jQuery(this).val("");
				jQuery(this).next(".input-tips").show();
			}
			else{
				jQuery(this).val(_input);
			}
		}
	});
	//回车登录
	jQuery(".userbox input.input").keydown(function(event) {	
		if(event.which == 13){
			jQuery(".input").focusout();
			jQuery(".enter-btn").focus();
			jQuery(".enter-btn").click();
		}
	});
});