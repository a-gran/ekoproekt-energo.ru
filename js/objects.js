document.addEventListener("DOMContentLoaded", () => {
    // слайдер объектов
    
    let positionNew = 0
    const slidesToShowNew = 3
    const slidesToScrollNew = 1
    const containerNew = document.querySelector('.slider-container-new')
    const trackNew = document.querySelector('.slider-track-new')
    const btnPrevNew = document.querySelector('.btn-prev-new')
    const btnNextNew = document.querySelector('.btn-next-new')
    const itemsNew = document.querySelectorAll('.slider-item-new')
    const itemsNewCount = itemsNew.length
    const itemWidthNew = containerNew.clientWidth / slidesToShowNew
    const movepositionNew = slidesToScrollNew * itemWidthNew
    
    itemsNew.forEach((itemNew) => {
      itemNew.style.minWidth = `${itemWidthNew}px`
    })
    
    btnNextNew.addEventListener('click', () => {
      slideNext()
    })
    
    function slideNext() {
      const itemsNewLeft = itemsNewCount - (Math.abs(positionNew) + slidesToShowNew * itemWidthNew) / itemWidthNew
      positionNew -= itemsNewLeft >= slidesToScrollNew ? movepositionNew : itemsNewLeft * itemWidthNew
      setpositionNew()
      checkBtnsNew()
      if (btnNextNew.disabled) {
        positionNew = 0
      }
    }
    
    setInterval(function () {
      slideNext()
    }, 5000)
    
    btnPrevNew.addEventListener('click', () => {
      const itemsNewLeft = Math.abs(positionNew) / itemWidthNew
    
      positionNew += itemsNewLeft >= slidesToScrollNew ? movepositionNew : itemsNewLeft * itemWidthNew
    
      setpositionNew()
      checkBtnsNew()
    })
    
    const setpositionNew = () => {
      trackNew.style.transform = `translateX(${positionNew}px)`
    }
    
    const checkBtnsNew = () => {
      btnPrevNew.disabled = positionNew === 0
      btnNextNew.disabled = positionNew <= -(itemsNewCount - slidesToShowNew) * itemWidthNew
    }
    
    checkBtnsNew()
})