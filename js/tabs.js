// табы

$(document).ready(function() {
    $('.nav-link').click(function(e) {
        e.preventDefault()
        
        $('.nav-link').removeClass('active')
        $('.tab-pane').removeClass('active show')
        
        $(this).addClass('active')
        $($(this).attr('href')).addClass('show active')
    })
})

// рейтинг для одного отзыва
const ratingItemsList = document.querySelectorAll('.rating__item')
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList)

ratingItemsArray.forEach((item) => {
  item.addEventListener('click', () => {
    const { itemValue } = item.dataset
    item.parentNode.dataset.totalValue = itemValue
  })
})

// общий рейтинг товара