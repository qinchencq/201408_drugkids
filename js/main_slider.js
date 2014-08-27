
$(document).ready(function(){
  
      $('#bxslider-1').bxSlider({   
          touchEnabled:true,
          swipeThreshold:0,   
          preventDefaultSwipeY:true,         
          pagerCustom: '#bx-pager-1',
          auto:false,
          autoControls: false, 
          captions:false,                  
          onSliderLoad: function (currentSlide) {          
              $('#slidercaption-1').html($('ul#bxslider-1 li img:last').attr('title')); 
          },
          onSlideAfter: function (currentSlide) {
              $('#slidercaption-1').html(currentSlide.find('img').attr('title'));
          },                  
          nextSelector: '#slider-next-1',
          prevSelector: '#slider-prev-1',
          nextText: '>',
          prevText: '<'                  
      });//end bxslider-1
      


      $('#bxslider-2').bxSlider({   
          touchEnabled:true,
          swipeThreshold:0,   
          preventDefaultSwipeY:true,         
          pagerCustom: '#bx-pager-2',
          auto:false,
          autoControls: false, 
          captions:false,                  
          onSliderLoad: function (currentSlide) {          
              $('#slidercaption-2').html($('ul#bxslider-2 li img:last').attr('title')); 
          },
          onSlideAfter: function (currentSlide) {
              $('#slidercaption-2').html(currentSlide.find('img').attr('title'));
          },                  
          nextSelector: '#slider-next-2',
          prevSelector: '#slider-prev-2',
          nextText: '>',
          prevText: '<'                  
      });//end bxslider     


      $('#bxslider-3').bxSlider({   
          touchEnabled:true,
          swipeThreshold:0,   
          preventDefaultSwipeY:true,         
          pagerCustom: '#bx-pager-3',
          auto:false,
          autoControls: false, 
          captions:false,                  
          onSliderLoad: function (currentSlide) {          
              $('#slidercaption-3').html($('ul#bxslider-3 li img:last').attr('title')); 
          },
          onSlideAfter: function (currentSlide) {
              $('#slidercaption-3').html(currentSlide.find('img').attr('title'));
          },                  
          nextSelector: '#slider-next-3',
          prevSelector: '#slider-prev-3',
          nextText: '>',
          prevText: '<'                  
      });//end bxslider   



     /*$('.bxslider').swipe( {swipeLeft:swipeLeft, swipeRight:swipeRight,threshold:0} ); 
     
     function swipeLeft(event){slider.goToNextSlide();
      consol.log('swipe');
     }
     function swipeRight(event){slider.goToPreviousSlide();
      consol.log('swipell');
     } 

     /*var slider="";               
     slider =jQuery('#slider1').bxSlider({auto:true});   
     jQuery('#slider1').swipe( {swipeLeft:swipeLeft, swipeRight:swipeRight,threshold:0} ); 
     function swipeLeft(event){slider.goToNextSlide();}            
     function swipeRight(event){slider.goToPreviousSlide();}*/           

});//end ready          
