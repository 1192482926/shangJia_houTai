//time:217-05-22
//made by: kami

//上传体检报告
function UploadReport(fuvalue){
	jQuery(".tbody .tr").eq(fuvalue).find(".operating").html("<a href='javascript:;' class='view'>查看</a>");//上传成功执行
	closepopup();
}
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
	//显示上传体检报告弹窗
	jQuery(".order-list .operating a.upload").live("click",function(){
		var _name = jQuery(this).parents(".tr").find(".package-name").text();
		var popuptitle = "上传体检报告";//弹窗标题
		var popupcontent = "<div class='popupline'><div class='text'>上传体检报告：</div><div class='fileurl'></div><a href='javascript:;'>选择文件</a></div><div class='popupline'><em>（支持上传的文件格式：word、excel、jpg、png,文件大小不能超过5M）</em></div><div class='clear'></div>";//弹窗内容
		var btns = "2";//按钮数量
		var backfunction = "UploadReport";//调用函数
		var fuvalue = jQuery(this).parents(".tr").index()-1;//调用函数传值
		popupbgshow();//弹出删除提示
		popupshow(popuptitle,popupcontent,btns,backfunction,fuvalue);
	});
	//查看体检报告
	jQuery(".order-list .operating a.view").live("click",function(){
		var _name = jQuery(this).parents(".tr").find(".name").text();
		var _page = jQuery(".view-report .report-list .report-box").size();
		jQuery(".view-close em").text(_name);
		jQuery(".view-report .report-page .pagenumber span").text(_page);
		popupbgshow();
		jQuery(".view-report").fadeIn();
		jQuery(".view-close a").focus();
		jQuery(".view-report .report-list .report-box").hide();
		jQuery(".view-report .report-page .pagenumber em").text(1);
		jQuery(".view-report .report-list .report-box:first").show();
	});
	//体检报告翻页
	jQuery(".view-report .report-page .next a").live("click",function(){//下一页
		if(!jQuery(".view-report .report-list .report-box").is(":animated")){
			var _page = jQuery(".view-report .report-page .pagenumber span").text();
			var _now = jQuery(".view-report .report-page .pagenumber em").text();
			if(_now<_page){
				jQuery(".view-report .report-list .report-box").hide();
				jQuery(".view-report .report-list .report-box").eq(_now).fadeIn();
				jQuery(".view-report .report-page .pagenumber em").text(parseInt(_now)+1);
			}
		}
	});
	jQuery(".view-report .report-page .prev a").live("click",function(){//上一页
		if(!jQuery(".view-report .report-list .report-box").is(":animated")){
			var _page = jQuery(".view-report .report-page .pagenumber span").text();
			var _now = jQuery(".view-report .report-page .pagenumber em").text();
			if(_now>1){
				jQuery(".view-report .report-list .report-box").hide();
				jQuery(".view-report .report-list .report-box").eq(_now-2).fadeIn();
				jQuery(".view-report .report-page .pagenumber em").text(parseInt(_now)-1);
			}
		}
	});
	//左右键翻页
	jQuery(document).keydown(function(event) {
		if(jQuery(".view-report").css("display") === "block"){
			if(event.which == 37){
				jQuery(".view-report .report-page .prev a").click();
			}
			if(event.which == 39){
				jQuery(".view-report .report-page .next a").click();
			}
		}
	});
	jQuery(".view-report .report-page .pagenumber a.first-page").live("click",function(){//首页
		if(!jQuery(".view-report .report-list .report-box").is(":animated")){
			var _now = jQuery(".view-report .report-page .pagenumber em").text();
			if(parseInt(_now)!==1){
				jQuery(".view-report .report-list .report-box").hide();
				jQuery(".view-report .report-list .report-box:first").fadeIn();
				jQuery(".view-report .report-page .pagenumber em").text(1);
			}
		}
	});
	jQuery(".view-report .report-page .pagenumber a.last-page").live("click",function(){//尾页
		if(!jQuery(".view-report .report-list .report-box").is(":animated")){
			var _now = jQuery(".view-report .report-page .pagenumber em").text();
			var _page = jQuery(".view-report .report-page .pagenumber span").text();
			if(_now !== _page){
				jQuery(".view-report .report-list .report-box").hide();
				jQuery(".view-report .report-list .report-box:last").fadeIn();
				jQuery(".view-report .report-page .pagenumber em").text(_page);
			}
		}
	});
	//关闭体检报告查看
	jQuery(".view-close a,.view-report .bottom a").live("click",function(){
		jQuery(".view-report").fadeOut();
		jQuery(".pop-up-bg").fadeOut(function(){
			jQuery(".pop-up-bg").remove();
		});
	});
});