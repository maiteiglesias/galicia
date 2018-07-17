jQuery(document).ready(function($){

	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
        $('body').addClass('modal-open');
        $('.cd-panel:after').animate({
           opacity: '1',
        }, 5000, function() {
            
        });
        $('.cd-panel-container').animate({
            right: "0",
        }, 500, function() {
            
        });
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
        if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
            closePanel();
        }
	});

    $(document).keyup(function(e) {
        if(e.which == 27){
            if($('.cd-panel.is-visible').length > 0){
                closePanel();
            }
        }
    });


    function closePanel() {
            $('.cd-panel-container').animate({
            right: "-420px",
            }, 500, function() {
                $('.cd-panel').removeClass('is-visible');
                $('body').removeClass('modal-open');
            });
            event.preventDefault();
    }


    inputEfects();

    function inputEfects() {  
	/* input efects */
    var e = $("input.form-control"),
        t = $(".showPassword");
    e.each(function() {
        var inputVal = $(this).val();
        var t = $(this).closest(".inputArea"),
        elem = $(this);
        if(inputVal != ""){
            t.addClass("typed");  
        }
        
        elem
            .on("focus blur", function(event) {
                if( event.type === "focus" )
                    t.addClass("focus");
                else {
                    t.removeClass("focus");
                }
                t
                    .toggleClass("typed", elem.val() !== "")
                    //.toggleClass("invalid", elem[0].validity.valid);
           })
           .on("input", function() {
               elem.toggleClass("typed", elem.val() !== "");
               t.toggleClass("typed", elem.val() !== "");
           });
        });

        t.each(function() {
            $(this).bind( "touchstart touchend, mousedown", function(e){
                var t = $(this).closest(".inputArea").find("input.hidden-control"); 
                t.attr("type","text");
            });
            $(this).bind( "touchleave, mouseup mouseleave", function(e){
                var t = $(this).closest(".inputArea").find("input.hidden-control");
                t.attr("type","password");
            });
        });



        }


if($(".msg-alert").length > 0){
    $(".msg-alert + div").addClass("push-msg");
    $('.msg-alert a.icon-close').on('click', function(event){
        event.preventDefault();
        $('.sidebar' ).animate({
        top: "-=84",
        }, 500, function() {

        });

        $('.msg-alert' ).animate({
        marginTop: "-=84",
        }, 500, function() {
            $( ".push-msg" ).removeClass('push-msg');
            $( ".msg-alert" ).remove();
        });

    });
}


    $('.banner .icon-close').on('click', function(event){
        event.preventDefault();
        $(this).closest( '.banner' ).fadeOut( "slow", function() { });
    });






hiddenMenu();
showMenu();
fixedMenu();
fixPerfil();
fixedHeader();
inputAutosize();

});

function fixedHeader() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 0,
            header = $(".page-header:not(.highlight)");
        if (distanceY > shrinkOn) {
            header.addClass('fixed');
            $('.navbar-default').addClass('fixed');
        } else {
            header.removeClass('fixed');
            $('.navbar-default').removeClass('fixed');
        }
    });
}

function fixPerfil() {
    if($(".highlight").length > 0){
        
        fixPadding();
        
        $( window ).resize(function() {
            fixPadding();
        });

        window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = height - 84;
        if (distanceY > shrinkOn) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
            fixPadding();
        }
        });
    }
}

function fixPadding(){
    header = $(".highlight");
    height = header.outerHeight();
    header.next().css("margin-top", height+"px");
}


     function fixedMenu() {
        if($('.sidebar').length > 0){  
       var stickyNavTop = $('.sidebar').offset().top; 
       $(window).scroll(function() { 
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= stickyNavTop) {
                $('.sidebar').addClass('fixed');
            } else {
                $('.sidebar').removeClass('fixed');
            }
        });
        }
    }


    function hiddenMenu() {  
        if($(".highlight").length > 0){
            $('.navbar-default').addClass('hidden');
        }
    }

    function showMenu() {  
    //open the lateral panel
    $('.navbar-toggle').on('click', function(event){
        event.preventDefault();
        $('.sidebar').addClass('in');
        $('body').css( "overflow", "hidden" );
        $('.sidebar').animate({
            left: "0",
        }, 300, function() {
            
        });
        $('.main').on('click', function(event){
            $('body').removeClass('modal-open');
            $('.sidebar').animate({
            left: "-250px",
            }, 300, function() {
                $('.sidebar').removeClass('in');
                $('.sidebar').removeAttr( "style" );
                $('body').removeAttr( "style" )
            });
        });


    });
    }



function inputAutosize() { 
    var e = $(".inputAutosize");
        e.each(function() {
        var ccat = $(this).find(".copycat");
        $(this).find('.inputAuto').on("input", function(){
            var inputVal = $(this).val();
            ccat.html( inputVal === "" ?  "" : inputVal );
            $(this).width(ccat.width());
        });

      $(this).find('.inputAuto').width(ccat.width());        
      var t = $(this).closest(".inputAutosize");
      var elem = $(this).find('.inputAuto');


      $(this).find('.inputAuto').on("focus blur", function(event) {
        if( event.type === "focus" ){
            t.addClass("focus");
        } else {
            t.removeClass("focus");
        }
            t.toggleClass("typed", $(this).val() !== "")

            .on("input", function() {
               console.log(elem.val());
               t.toggleClass("typed", elem.val() !== "");
           });

        if(t.find(".placeholder").length > 0){
            if(t.find('.inputAuto').val() == ""){
                ccat.html(t.find(".placeholder").html());
                $(this).width(ccat.width());
            }
        }

        });

        if(t.find('.inputAuto').val() != ""){
            ccat.html(t.find('.inputAuto').val());
            $(this).find('.inputAuto').width(ccat.width());
            t.addClass("typed");
        }

        if(t.find(".placeholder").length > 0){
            pWidth = t.find(".placeholder").width();
            t.find('.inputAuto').css('min-width', pWidth + "px");
            
            if(t.find('.inputAuto').val() == ""){
                ccat.html(t.find(".placeholder").html());
                $(this).find('.inputAuto').width(ccat.width());
            }

            t.find(".placeholder").click(function() {
              t.addClass("focus");
              t.find('.inputAuto').focus();
            });
        }


        });
}
