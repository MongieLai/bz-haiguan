const haiGuanTitle = document.querySelector('.haiguan-title')
const titleLeftButtons = $('.title-left-buttons')
const titleRightButtons = $('.title-right-buttons')

let buttonsIsShwo = false

haiGuanTitle.addEventListener('click', () => {
    buttonsIsShwo = !buttonsIsShwo
    if (buttonsIsShwo) {
        titleLeftButtons.addClass('active')
        titleRightButtons.addClass('active')
    } else {
        titleLeftButtons.removeClass('active')
        titleRightButtons.removeClass('active')
    }
})

haiGuanTitle.click()