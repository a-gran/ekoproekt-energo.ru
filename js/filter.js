document.addEventListener("DOMContentLoaded", () => {
    // фильтр завершенных объектов
    
    const filterInner = document.querySelectorAll('.filter__objects-wr')
    const filterBtns = document.querySelectorAll('.filter__btn')
    
    document.querySelector('.filter__btns').addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return false
    
    filterBtns.forEach((elem) => {
      elem.classList.remove('filter__btn--active')
      event.target.classList.add('filter__btn--active')
    })
    
    let filterClass = event.target.dataset['filter']
    
    filterInner.forEach((elem) => {
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
        elem.classList.add('filter__object--anime')
      } else {
        elem.classList.remove('filter__object--hide')
        elem.classList.remove('filter__object--anime')
      }
    })
    
    filterInner.forEach((elem) => {
          elem.ontransitionend = () => {
            if (elem.classList.contains('filter__object--anime')) {
              elem.classList.add('filter__object--hide')
            }
          }
        })
    })
})