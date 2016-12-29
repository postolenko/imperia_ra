$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    // bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


    // ---------------------------------------------------------------

    var inputIndex;
    var countImages;

    var indexImage = 0;

    var topCoor;
    var position;

    // ---------------------------------------------------------------

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


    $(function() {

        if( $(".header div").hasClass("header-bg") ) {

            $(".header-bg").fadeIn(3000);

        } else {

            $(".header").addClass("with-bg");

        }

    });


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

            inputIndex = $(".hover-block").index(this);

            $(".input-box:eq("+ inputIndex +")").fadeIn(300);

        });

    });


    $(function() {

        countImages = $(".image-article-box").length - 1;

        indexImage = 0;

        topCoor;

        for(indexImage = 0; indexImage <= countImages; indexImage++) {

            topCoor = $(".image-article-box:eq("+ indexImage +")").offset().top - $(".services-sect").offset().top;

            $(".image-article-box:eq("+ indexImage +")").appendTo(".for-paralaks");

            position = parseInt($(".image-article-box:eq("+ indexImage +") img").attr("data-position") );

            $(".image-article-box:eq("+ indexImage +")").css({"top" : ( topCoor - position ) + "px"});            

        }


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


            $(".main-nav-link").click(function() {

                $(".main-nav-resp-box").fadeOut(300);

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
