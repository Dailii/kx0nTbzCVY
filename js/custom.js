$.noConflict(),jQuery(document).ready((function(e){e("#sti-menu").iconmenu({animMouseenter:{mText:{speed:200,easing:"easeOutExpo",delay:250,dir:1},sText:{speed:200,easing:"easeOutExpo",delay:0,dir:1},icon:{speed:200,easing:"easeOutExpo",delay:500,dir:1}},animMouseleave:{mText:{speed:200,easing:"easeInExpo",delay:250,dir:1},sText:{speed:200,easing:"easeInExpo",delay:500,dir:1},icon:{speed:200,easing:"easeInExpo",delay:0,dir:1}}}),e("#slider").nivoSlider({effect:"boxRainGrow,boxRainGrowReverse",animSpeed:300,pauseTime:5e3,directionNav:!1,directionNavHide:!0,controlNav:!0,controlNavThumbs:!1}),e("#quickContactForm").ajaxForm((function(a){1==a?(e("#success").fadeIn("slow"),e("#bademail").fadeOut("slow"),e("#badserver").fadeOut("slow"),e("#contact").resetForm()):2==a?e("#badserver").fadeIn("slow"):3==a&&e("#bademail").fadeIn("slow")})),e(window).scroll((function(){e(this).scrollTop()>100?e("a[href=#top]").fadeIn():e("a[href=#top]").fadeOut()})),e("a[href=#top]").click((function(){return e("html, body").animate({scrollTop:0},"slow"),!1})),e("ul.nav").superfish({pathClass:"current",animation:{opacity:"show",height:"show"},delay:400}),e(window).scroll((function(){e(window).scrollTop()>300?e("#slidebox").animate({left:"0px"},500):e("#slidebox").stop(!0).animate({left:"-230px"},0)})),e("#slidebox .close").bind("click",(function(){e(this).parent().remove()})),e("#quickName").val("Имя"),e("#quickEmail").val("Email"),e("#quickComment").val("Сообщение"),e("#quickName").focus((function(){e(this).val("")})),e("#quickEmail").focus((function(){e(this).val("")})),e("#quickComment").focus((function(){e(this).val("")}))})),jQuery(document).ready((function(){var e=jQuery("#widget-overlay-container"),a=jQuery("#overlay-open a"),o=e.height()+3;e.css({marginTop:-o,display:"block"}),a.toggle((function(){e.animate({marginTop:0},800,"easeOutBounce"),a.addClass("close")}),(function(){e.animate({marginTop:-o},800,"easeOutBounce"),a.removeClass("close")}))}));