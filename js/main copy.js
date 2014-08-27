$( document ).ready(function() {

	//fixing the launch page margin-bottom issue and bxslider next/prev button
    var launchHeight = $('.open-video').height();
    var launchTitleHeight = $('.foster-title-wrap').height();
    $('.foster-title-wrap').css('margin-top', -launchHeight*0.8);

    var slideHeight = $('#multi-slide-1').height();
    var slideBtn = - slideHeight/2;
    $('#slider-prev a').css('margin-top', slideBtn);
    $('#slider-next a').css('margin-top', slideBtn);
    

    $(window).resize(function(){
    	//launchHeight = $('.open-video').height();
    	//launchTitleHeight = $('.foster-title-wrap').height();
    	//$('.foster-title-wrap').css('height', launchHeight)

        slideHeight = $('#multi-slide-1').height();
        slideBtn = - slideHeight/2;
        $('#slider-prev a').css('marginTop',slideBtn);
        $('#slider-next a').css('marginTop',slideBtn);
    });

    //waypoint triger the multi-slide in view to play audio
    var aPlayer = document.getElementsByTagName("audio")[0];

    /*$('#multi-slide-1').waypoint(function(down) {
        aPlayer.play();
        $('.audioplayer').removeClass('audioplayer-stopped').addClass('audioplayer-playing');
    }, { offset: '50%' });

     $('#multi-slide-1').waypoint(function(up) {
        aPlayer.play();
        $('.audioplayer').removeClass('audioplayer-stopped').addClass('audioplayer-playing');
    }, { offset: '-5%' });*/
    

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
    //$('.audioplayer').hasClass('audioplayer-muted').waypoint('disable');

    /*$('#multi-slide-1').appear(function(){
        console.log('appear');
    })
    $('#multi-slide-1').disappear(function(){
        console.log('disappear');
    })*/
});// end ready