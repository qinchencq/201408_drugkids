$( document ).ready(function() {
    
    //DETECT MOBILE 
    var isMobile = { 
    Android: function() { return navigator.userAgent.match(/Android/i); }, 
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

    //DISABEL WAYPOINT IF MOBIEL    
    if( isMobile.any() ) {
       $('*').waypoint('disable');
        console.log("mobile detected");
    }  

    var $navheight = $('#foster-nav').height();
    var launchHeightV = $('div.open-image').height();
    //console.log (launchHeightV);
    $('div.row.foster-article.first-wrap').css('margin-top', launchHeightV);   

    /*if ( $(window).width() < 640 ) {
        launchHeightV = $('div.open-image').height();
        $('div.row.foster-article.first-wrap').css('margin-top', launchHeightV);
    }*/
    //end of fixing the loading page margin and padding issue. 

    //responsive nav 
    $(".open-panel").click(function(){
  
          $("html").addClass("openNav");
          
    });//end open-panel-nav click
    
    $(".close-panel,#content").click(function(){
      
        $("html").removeClass("openNav");
      
    });//end back to regular nav
    //end of responsive nav

    //add nav active style to first chapter whenever page loac
    if (!window.location.search) {
        $('#nav-inner').find('ul.nav-item li').first().addClass('active');
    }
    //load active navigation style when page gets called.  
    $('#nav-inner a').each(function() {
    var navHref = $(this).attr('title');
    var url = $(location).attr('search').substring(6);
    if (navHref  ===  url) {
          $(this).parent().addClass('active');
    }
    });//end each nav active load

    //unavailable chapter TAKE OUT when chapter ready
    $( "#nav-inner li.unavailable a" ).click(function( event ) {
      event.preventDefault();
    });   

    //SIDEBAR moveing
    function Sidebarmove(){
        $('.sidebar_tease a').bind('click touchstart',function(event){
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-$navheight -15
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
    }
    Sidebarmove();

    $(window).resize(function(){
        //fixing the loading page margin and padding issue. 
        launchHeightV = $('div.open-image').height();
        $('div.row.foster-article.first-wrap').css('margin-top', launchHeightV);

        if ( $(window).width() < 640 ) {
            launchHeightV = $('div.open-image').height();
            $('div.row.foster-article.first-wrap').css('margin-top', launchHeightV + 50);
        }

        //SIDEBAR MOVING
        $navheight = $('#foster-nav').height();
        Sidebarmove();
    });

    // FOOTER interactive teaser 
    var _throttleTimer = null;
    var _throttleDelay = 100;
    var $window = $(window);
    var $document = $(document);   

    $window.off('scroll', ScrollHandler)
           .on('scroll', ScrollHandler);

    function ScrollHandler(e) {
        //throttle event:
        clearTimeout(_throttleTimer);   
        _throttleTimer = setTimeout(function () {
            //console.log('scroll');
        
        function getDocHeight() {
            var D = document;
            return Math.max(
                D.body.scrollHeight, D.documentElement.scrollHeight,
                D.body.offsetHeight, D.documentElement.offsetHeight,
                D.body.clientHeight, D.documentElement.clientHeight
            );
        }

            //do work
            if ($window.scrollTop() + $window.height() > getDocHeight() - 100) {
                $('div#bottom_promote').stop(true).animate({ 'margin-bottom': 0, 'opacity': '1' });
            }else {
                $('div#bottom_promote').stop(true).animate({ 'margin-bottom': -70, 'opacity': '0'});
            }

        }, _throttleDelay);
    }

    //waypoint triger the multi-slide in view to play audio
    /*var aPlayer = document.getElementsByTagName("audio")[0];
    
    $('#multi-slide-1').waypoint(function(down) {
        aPlayer.play();
        $('.audioplayer').removeClass('audioplayer-stopped').addClass('audioplayer-playing');
    }, { offset: '30%' });


    $('#slidercaption').waypoint(function(down) {
        aPlayer.pause();
        $('.audioplayer').removeClass('audioplayer-playing').addClass('audioplayer-stopped');
        $('#multi-slide-1').waypoint('disable');
    }, {
      offset: function() {
        return -$(this).height() + 100;
      }
    });*/

    //waypoint triger the video player in the view to auto play video    
    var playerWhole = [];
    
    $('.video-holder').each(function(){
        var playerEach = $(this);
        playerWhole.push(playerEach);
        //console.log(playerWhole);
    })
   
    for (i = 0; i < playerWhole.length; i++) {
        var pl = playerWhole[i];
        var divID = '#' + pl.attr('id');        
        //console.log($(divID));
        var pStopperID = '#' + pl.next('.video-stopper').attr('id');

        $(divID).waypoint(function(direction){ 

            var vPlayerEach = videojs($(this).find('video').attr('id'));   
                //video display poster when ended
                vPlayerEach.on("ended", function(){ 
                  vPlayerEach.posterImage.show(); 
                  vPlayerEach.currentTime(0); 
                })

            if (direction === 'down') {
                vPlayerEach.play();                            
            }


        },{ offset: '30%' , triggerOnce: true});  

        $(divID).waypoint(function(direction){               
            var vPlayerEach = videojs($(this).find('video').attr('id'));   
            if (direction === 'up') {
                vPlayerEach.pause();
            }         
        },{ offset: '40%' });          

        $(pStopperID).waypoint(function(){
            var vPlayerEach = videojs($(this).prev('.video-holder').find('video').attr('id'));
            vPlayerEach.pause();
            var divIDAgain = '#' + $(this).prev('.video-holder').attr('id');
            $(divIDAgain).waypoint('disable');
        },{offset:'45%'});  
   }

    //disable autoplay, waypoint if mobile


   //end of waypoint triger


});// end ready