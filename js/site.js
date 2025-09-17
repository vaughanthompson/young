$(document).ready(function(){

    // sitewide and activeLinking
    /*
    var str = window.location.pathname;
    if (str.indexOf('/en/') >= 0) {
        $('div.containMNav').load("inc-mobNavEN.html");
        $('div#masthead').load("inc-topNavEN.html");
        $('footer#siteWide').load("inc-footerEN.html");
    } else if (str.indexOf('/de/') >= 0) {
        $('div.containMNav').load("inc-mobNavDE.html");
        $('div#masthead').load("inc-topNavDE.html");
        $('footer#siteWide').load("inc-footerDE.html");
    } else {
        $('div.containMNav').load("/de/inc-mobNavDE.html");
        $('div#masthead').load("/de/inc-topNavDE.html");
        $('footer#siteWide').load("/de/inc-footerDE.html");
    }
    */
  



    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 600,
            easing: 'easeOutQuad',
            offset: 0
    });

    // mobile top scroll
    //$('#navMobile').hide();
    
    new Waypoint({
    element: document.getElementsByTagName('body'),
    handler: function(direction) {
        if (direction === 'down') {
            $('#navMobile').fadeTo(1000,'1.0');
        }
        else {
            $('#navMobile').hide();
        }
    },
        offset: '-50%'
    });
    new Waypoint({
        element: document.getElementById('inpageNav'),
        handler: function(direction) {
            if (direction === 'down') {
                $('header.sticky').animate({opacity: "show"}, {queue : false, duration:200});
                $('#navHeader div#mblNavControl a .icon-ic-menu').addClass('darker');
            }
            else {
                $('header.sticky').animate({opacity: "hide"}, {queue : false, duration:250});
                $('#navHeader div#mblNavControl a .icon-ic-menu').removeClass('darker');
            }
        },
            offset: '5%'
        })
    new Waypoint({
        element: document.getElementById('inpageNavEnd'),
        handler: function(direction) {
            if (direction === 'down') {
                $('header.sticky').animate({opacity: "hide"}, {queue : false, duration:200});
            }
            else {
                $('header.sticky').animate({opacity: "show"}, {queue : false, duration:250});
            }
        },
            offset: '100%'
        })


       


    $(".slickSlider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        dots:true,
        fade:true,
        speed:2000,
        pauseOnHover:false
    });


    


    // mobile nav
    $('#navClose').hide();
    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('div.mblnav').fadeTo(500,'1.0');
        $('html, body').addClass('noscroll');
        return false;

    });

    $('.mblnav a.inpage').click(function(){
        $('#navClose').hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });


    // slideNav
    $('#omniDrop').click(function(){
        //$(this).hide();
        $(this).siblings('a').toggleClass('faded');
        $(this).find('i').toggleClass('rotateIC');
        $('#slideNav').slideToggle();
        return false;

    });




    // show random div
    var elems = $(".randomShow");
    if (elems.length) {
    var keep = Math.floor(Math.random() * elems.length);
    for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
        $(elems[i]).hide();
        }
    }
    }



    // named anchor scrollTo and offset
    var anchorLink = $(window.location.hash);
    if ( anchorLink.length ) {
        $("html, body").animate({scrollTop: anchorLink.offset().top - 50 }, 500);
    }




    // onOff waypoints content area
    $('.onOff').each(function() {
        var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
            // alert('Enter triggered with direction ' + direction)
            },
            entered: function(direction) {     
                $(this[0,'element']).find('.onOffTarget').removeClass('stateInactive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateActive');
                    
            },
            exit: function(direction) {
                $(this[0,'element']).find('.onOffTarget').removeClass('stateActive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateInactive');
            },
            exited: function(direction) {
                // alert('Exited triggered with direction ' + direction)
            }
        })
    });


});

