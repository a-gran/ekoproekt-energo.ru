document.addEventListener("DOMContentLoaded", () => {

    // слайдер сертификатов 
    
    let position = 0
    const slidesToShow = 4
    const slidesToScroll = 1
    const container = document.querySelector('.slider-container')
    const track = document.querySelector('.slider-track')
    const btnPrev = document.querySelector('.btn-prev')
    const btnNext = document.querySelector('.btn-next')
    const items = document.querySelectorAll('.slider-item')
    const itemsCount = items.length
    const itemWidth = container.clientWidth / slidesToShow
    const movePosition = slidesToScroll * itemWidth
    
    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`
    })
    
    btnNext.addEventListener('click', () => {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
    
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
    
      setPosition()
      checkBtns()
    })
    
    btnPrev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / itemWidth
    
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
    
      setPosition()
      checkBtns()
    })
    
    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`
    }
    
    const checkBtns = () => {
      btnPrev.disabled = position === 0
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    }
    
    checkBtns()

// увеличение изображения по клику

    $(function(){
      $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
         left: ($(document).width() - $('#magnify').outerWidth())/2,
                top: ($(window).height() - $('#magnify').outerHeight())/2
       });
        $('#overlay, #magnify').fadeIn('fast');
      });
      
      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
      });
    });
});