//<!------------头部点击弹出的js------------------->
			// 渐变弹出层
			$(document).ready(function() {
				$(".glyphicon-plus").click(function(event) { //绑定事件处理
					$(".top2").slideDown(); //动画显示
					$(".top1").slideUp();
					$(".searchbox1").css("margin-top","60px");
				});
				$(".glyphicon-remove").click(function(event) {
					$(".top1").slideDown();
					$(".top2").slideUp();
					$(".searchbox1").css("margin-top","0px");
					
				}); //点击close隐藏

			});
		
//<!------------------导航栏固定的js------------------------>
          
			$(function(){
				var a = $('.navbar'),
				b =a.offset();
				p=$('.logo img'),
				$(document).on('scroll',function(){
					var	c = $(document).scrollTop();
					if(b.top<=c){
						a.css({'position':'fixed','top':'-1px','z-index':'2','width':'100%'})
						p.css({'width':'17%'})
						$(".searchbox1").css("margin-top","-41px");
					}else{
						a.css({'position':'static','top':'40px'})
						p.css({'width':'21%'})
						$(".searchbox1").css("margin-top","0px");
					}
					})
				})
//<!------------------点击汉堡包的js------------------------>
          $(document).ready(function() {
				$(".glyphicon-menu-hamburger").click(function() { //绑定事件处理
					; //动画显示
					$(".navbar-header").hide();
					$(".navbar-header2").show()
					$(".nav-top2").show();
				});
				$(".glyphicon-remove").click(function() {
					$(".navbar-header").show();	
					$(".navbar-header2").hide();
					$(".nav-top2").hide();						
				}); 
			});


//<!-------------------联系我们弹出框的js---------------------->
			$(document).ready(function(){
				$(".contact-us").hover(
					function(){
					$(".wechat-mado").slideDown();				
				},function(){
					$(".wechat-mado").hide();
				});
				
			})
			
//<!------------------登录注册弹出框的js------------------------->
			$(document).ready(function(){
				$(".login").hover(
					function(){
					$(".login-mado").slideDown();				
				},function(){
					$(".login-mado").hide();
				});
				
			})
		
//<!------------------购物袋弹出框的js----------------------------->
			$(document).ready(function(){
				$(".cart").hover(
					function(){
					$(".cart-mado").slideDown();				
				},function(){
					$(".cart-mado").hide();
				});
				
			})
//<!----------------------向左滑动------------------------------>
			$(document).ready(function() {
			$(".searchbox1").click(function(){
				
				$(this).animate({
					width:"290px"	
			},2000)
			})
				$(".schBox .glyphicon-search").click(function(){
				$(".searchbox1").animate({
					width:"125px"	
			},2000)
			})
			})
			
//<!------------------导航栏下方弹出框的js------------------------->
            $(document).ready(function() {
				$(".jump").hover(
					function() {
					$(".jump").eq($(this).index()).addClass("lady").siblings().removeClass('lady');
					$(".sub-menu-box").hide().eq($(this).index()).slideDown();},
					function(){
						$(".sub-menu-box").hide();
				});
			}); 
//			$(document).ready(function() {
//				$(".jump").mouseover(function() {
//					$(".jump").eq($(this).index()).addClass("MainActive").siblings().removeClass('MainActive');
//					$(".sub-menu-box").hide().eq($(this).index()).slideDown();	
//				})
//				//这里需要完善
//				$(".sub-menu-box").mouseover(function() {
//					$(".sub-menu-box").eq($(".jump").index()).show();
//				})
//				$(".jump,.sub-menu-box").mouseout(function() {
//					$(".sub-menu-box").hide();
//				
//				})
//			});

//<!---------------------页脚下面的js----------------------->
//			点击文字时出现内容
			$(document).ready(function() {
				$(".right-section dt,.right-section .plus").click(function(event) { //绑定事件处理
					console.log($(this).parent());
					$(this).parent().find(".slidebox").show();
					$(this).parent().find(".plus").hide();
					$(this).parent().find(".minus").show();
					
				$(".right-section dt,.right-section .minus").click(function(event) { //绑定事件处理
					console.log($(this).parent());
					$(this).parent().find(".slidebox").hide();
					$(this).parent().find(".minus").hide();
					$(this).parent().find(".plus").show();
					
				});
				});
			});
//			点击图标时出现内容			
//			$(document).ready(function() {
//				$(".right-section .plus").click(function(event) { //绑定事件处理
//					console.log($(this).parent());
//					$(this).parent().find(".slidebox").show();
//					$(this).parent().find(".plus").hide();
//					$(this).parent().find(".minus").show();
//					
//				});
//			});
//			$(document).ready(function() {
//			    $(".right-section .minus").click(function(event) { //绑定事件处理
//					console.log($(this).parent());
//					$(this).parent().find(".slidebox").hide();
//					$(this).parent().find(".minus").hide();
//					$(this).parent().find(".plus").show();
//					
//				});
//			});

//<!--------------------返回顶部TOP的js-------------------->
                //显隐按钮  
                function showReposBtn(){  
                    var clientHeight = $(window).height();  
                    var scrollTop = $(document).scrollTop();  
                    var maxScroll = $(document).height() - clientHeight;  
                    //滚动距离超过可视一屏的距离时显示返回顶部按钮  
                    if( scrollTop > clientHeight ){  
                        $('.footer-returnTop').show();  
                    }else{  
                        $('.footer-returnTop').hide();  
                    }  
                    //滚动距离到达最底部时隐藏返回底部按钮  
//                  if( scrollTop >= maxScroll ){  
//                      $('#rebtmbtn').hide();  
//                  }else{  
//                      $('#rebtmbtn').show();  
//                  }  
               }                   
                window.onload = function(){  
                    //获取文档对象  
                    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");  
                    //显示按钮  
                    showReposBtn();  
                }                    
                window.onscroll = function(){  
                    //滚动时调整按钮显隐  
                    showReposBtn();  
                }                    
                //返回顶部  
                function returnTop(){  
                    $body.animate({scrollTop: 0},400);  
                }                    
                //返回底部  
//              function returnBottom(){  
//                  $body.animate({scrollTop: $(document).height()},400);  
//              }  
