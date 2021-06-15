$(document).ready(function(){
    
    $(".menu a").each(function(index,elemento){
        $(this).css({
            "top": "-200px"
        });
        $(this).animate({
            top: "0"
        },1000+(index * 500)); 
    });


    if( $(window).width() > 800){ 
        $("header .textos").css({
            "opacity": "0",
            "martinTop":"0"
        });
        $("header .textos").animate({
            "opacity": "1",
            "martinTop":"-52"
        },1000); 
    }


    var scrollAcercaDe = $("#acerca-de").offset().top;

    $("#btn-acercaDe").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: scrollAcercaDe 
            },500);
    });

    var platillos = $("#platillos").offset().top;
    $("#btn-menu").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: platillos -100  
            },500);
    });

    var galeria = $("#galeria").offset().top;
    $("#btn-galeria").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria -100 
            },500);
    });
    var ubicacion = $("#ubicacion").offset().top;
    $("#btn-ubicacion").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion -100 
            },500);
    });



    $(window).scroll(function(){
        var windowAncho = $(window).width(); 
        if(windowAncho > 800){
            var scroll = $(window).scrollTop();
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });
            $('#acerca-de article').css({
                'transform': 'translate(0px,-' + scroll / 6 + '%)' 
            });
        }

    }); 
    $(window).resize(function(){ 
    if(windowAncho < 800){
            var scroll = $(window).scrollTop();
            $('#acerca-de article').css({
                'transform': 'translate(0px,0px)' 
            });
        }

    });
});
