$( document ).ready(function() {

	//fixing the launch page margin-bottom issue and bxslider next/prev button
    var launchHeight = $('.open-video').height();
    var launchTitleHeight = $('.foster-title-wrap').height();
    $('.foster-title-wrap').css('margin-top', -launchHeight*0.8);
    $('.foster-title-wrap').css('margin-bottom', launchHeight*0.5)

    var slideHeight = $('#multi-slide-1').height();
    var slideBtn = - slideHeight/2;
    $('#slider-prev a').css('margin-top', slideBtn);
    $('#slider-next a').css('margin-top', slideBtn);
    

    $(window).resize(function(){
    	launchHeight = $('.open-video').height();
    	launchTitleHeight = $('.foster-title-wrap').height();
    	$('.foster-title-wrap').css('margin-top', -launchHeight*0.8);
        $('.foster-title-wrap').css('margin-bottom', launchHeight*0.5);

        slideHeight = $('#multi-slide-1').height();
        slideBtn = - slideHeight/2;
        $('#slider-prev a').css('marginTop',slideBtn);
        $('#slider-next a').css('marginTop',slideBtn);
    });

    //waypoint triger the multi-slide in view to play audio
    var aPlayer = document.getElementsByTagName("audio")[0];
    
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
    });
    //waypoint triger the video player in the view to auto play video
    
    /*var vID = [ ];
    $('.video-holder').find('video').each(function(){
        var playerEach = $(this);
        //console.log(playerEach.attr('id'));
        vID.push(this.id);
    });

    for (i = 0; i < vID.length; i++) {
        
        var vPlayer = Array(videojs('vID[i]'));
        vPlayer[i].play();        
    } setting arrays to loop videojs ID failed, videoJS don't take multi ids*/
    
    //var vPlayer = Array(videojs("video_1"), videojs("video_2"), videojs("video_3"), videojs("video_4"), videojs("video_5"));
    
    //var playerDiv = [];   
    //var endDiv = [];
    
    var playerWhole = [];
    
    $('.video-holder').each(function(){
        var playerEach = $(this);
        playerWhole.push(playerEach);
        //console.log(playerWhole);
    })

    /*$('.video-holder').each(function(){
        var divEach = $(this);
        var divId = '#'+ this.id ;
        playerDiv.push(divId);
        //console.log(playerDiv);
    });
    
    $('.video-stopper').each(function(){
        var stopEach = $(this);
        endDiv.push(this.id);
        //console.log(endDiv);
    });*/
    
    for (i = 0; i < playerWhole.length; i++) {
        var p = playerWhole[i];
        var divID = '#' + p.attr('id');        
        //console.log($(divID));
        var pStopperID = '#' + p.next('.video-stopper').attr('id');

        $(divID).waypoint(function(down){               
            var vPlayerEach = videojs($(this).find('video').attr('id'));               
            vPlayerEach.play();
        },{ offset: '30%' });  

        $(pStopperID).waypoint(function(down){
            var vPlayerEach = videojs($(this).prev('.video-holder').find('video').attr('id'));
            vPlayerEach.pause();
            var divIDAgain = '#' + $(this).prev('.video-holder').attr('id');
            $(divIDAgain).waypoint('disable');
        },{offset:'30%'});    
    }

    /*for (k = 0; k < endDiv.length; k++) {
        $('endDiv[k]').waypoint(function(down){
            for (i = -1; i < vPlayer.length; i++) {
                vPlayer[i].play();
            }    
            },{ offset: '30%' });
                
    } */   

    //video 1
    /*$("#video-holder-1").waypoint(function(down){
        vPlayer[0].play();
    },{ offset: '30%' });
    
    $("#video-stopper-1").waypoint(function(down){
        vPlayer[0].pause();
        $('#video-holder-1').waypoint('disable');
    },{offset:'30%'});

    //video 2
    $("#video-holder-2").waypoint(function(down){
        vPlayer[1].play();
    },{ offset: '30%' });
    
    $("#video-stopper-2").waypoint(function(down){
        vPlayer[1].pause();
        $('#video-holder-2').waypoint('disable');
    },{offset:'30%'});    

    //video 3
    $("#video-holder-3").waypoint(function(down){
        vPlayer[2].play();
    },{ offset: '30%' });
    
    $("#video-stopper-3").waypoint(function(down){
        vPlayer[2].pause();
        $('#video-holder-3').waypoint('disable');
    },{offset:'30%'});    

    //video 4
    $("#video-holder-4").waypoint(function(down){
        vPlayer[3].play();
    },{ offset: '30%' });
    
    $("#video-stopper-4").waypoint(function(down){
        vPlayer[3].pause();
        $('#video-holder-4').waypoint('disable');
    },{offset:'30%'});  

    //video 5
    $("#video-holder-5").waypoint(function(down){
        vPlayer[4].play();
    },{ offset: '30%' });
    
    $("#video-stopper-5").waypoint(function(down){
        vPlayer[4].pause();
        $('#video-holder-5').waypoint('disable');
    },{offset:'30%'});   */       

});// end ready