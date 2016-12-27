$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    // $(function()  {

    //     $(".rellax").addClass("rellax-position");

    // });

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    // bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    // modifProperties();

    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    getSliderShadowPosition();

    getBgLinesHeight();


    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------------------------------------------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -----------------------------------------------------------------------------

        // modifProperties();

        // ---------------------------------

        // For Popup

        $(".callback-block").css({"top" : ( $(window).height() - $(".callback-block").height() ) / 2 + "px" });

        // ---------------------------------

        $(".slide-mask").css({
                          "width" : $(".about-us-slider").width() + "px",
                          "height" : $(".about-us-slider").height() + "px"
                        });

        $(".slide-mask").offset({top : $(".about-us-slider").offset().top , left : $(".about-us-slider").offset().left});

        // ----------------------------------

        getSliderShadowPosition();

        getBgLinesHeight();

    });

    // ------------------------------------------------------------

    $(function() {

        $(".slick-prev.slick-arrow").appendTo(".about-us-slider-arrows");
        $(".slick-next.slick-arrow").appendTo(".about-us-slider-arrows");

    });

    // ------------------------------------------------------------

    // $(function() {

    //     var countArticles = $(".article").length;

    //     var indexArticle = 0;

    //     for( indexArticle = 0; indexArticle <=  countArticles; indexArticle++ ) {

    //         $(".article:eq("+ ( countArticles - indexArticle ) +")").css({"z-index" : indexArticle });

    //     }

    //     $(".services-sect-h").css({"z-index" : indexArticle + 1 });

    // });


    // ------------------------------------------------------------


    $(function() {

        if( $(".header div").hasClass("header-bg") ) {

            $(".header-bg").fadeIn(3000);

        } else {

            $(".header").addClass("with-bg");

        }

    });



    // $(".image_1-box").offset({top : $(".article:eq("+ 0 +")").offset().top });

    // -------------------------------------------------------------

    $(".show-popup").click(function() {

        $(".callback-popup").fadeIn(300);

        $(".callback-block").css({"top" : ( $(window).height() - $(".callback-block").height() ) / 2 + "px" });

    });

    $(".callback-popup-bg, .close-popup-btn").click(function() {

        $(".callback-popup").fadeOut(300);

    });


    $(function() {

        $(".hover-block").click(function() {

            var inputIndex = $(".hover-block").index(this);

            $(".input-box:eq("+ inputIndex +")").fadeIn(300);

        });

    });


    $(function() {

        var countImages = $(".image-article-box").length - 1;

        var indexImage = 0;

        var topCoor;

        // $(".for-paralaks").height($(".services-sect").outerHeight(true));

        for(indexImage = 0; indexImage <= countImages; indexImage++) {

            topCoor = $(".image-article-box:eq("+ indexImage +")").offset().top - $(".services-sect").offset().top;

            $(".image-article-box:eq("+ indexImage +")").appendTo(".for-paralaks");

            var position = parseInt($(".image-article-box:eq("+ indexImage +") img").attr("data-position") );

            $(".image-article-box:eq("+ indexImage +")").css({"top" : ( topCoor - position ) + "px"});            

        }

        // $(".image-article-box").appendTo(".for-paralaks");

        $(".article").css({"position" : "relative"});



    });

    // ------------------------------------------------------

        $(function() {

            $(".respmenubtn").click(function() {

                $(".respmenubtn").toggleClass("respmenubtn-active");

                if( $(".main-nav-resp-box").is(":hidden") ) {

                    $(".main-nav-resp-box").fadeIn(300);

                } else if ( $(".main-nav-resp-box").is(":visible") ) {

                    $(".main-nav-resp-box").fadeOut(300);

                }


            });

        });

    // ------------------------------------------------------


    $(".slider-sect").append("<div class='slide-mask'></div>");

    $(".slide-mask").css({
                          "width" : $(".about-us-slider").width() + "px",
                          "height" : $(".about-us-slider").height() + "px"
                        });

    $(".slide-mask").offset({top : $(".about-us-slider").offset().top , left : $(".about-us-slider").offset().left});



    $(".slide-mask").bind({

         mouseenter: function() {

            $(".about-us-slide.slick-active .slide-image").animate({"opacity" : 0}, 700);

        },

        mouseleave: function() {

            $(".about-us-slide.slick-active .slide-image").animate({"opacity" : 1}, 700);

        }       

    });

    // ------------------------------------------------------

    // Navigation scroll

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {

                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900);
                        return false;
                    }
                }
            });
        });


    // -----------------


    function getBgLinesHeight() {

        setTimeout(function() {

            $(".left-line, .right-line, .middle-line").height($(".wrapper").outerHeight(true));

        }, 1000);

    }


    // ------------------

    function getSliderShadowPosition() {

        $(".shadow").css({"width" : $(".about-us-slider").width() + "px",
                          "height" : $(".about-us-slider").height() + "px"
                        });

        $(".shadow").offset({top : $(".about-us-slider").offset().top , left : $(".about-us-slider").offset().left});

    }


});
