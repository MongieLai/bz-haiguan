const newsList = $('.new-item')
const newItem = document.querySelector('.new-item')
const { height } = newItem.getBoundingClientRect()
let changeColor = true
const AutoScroll = () => {
    const leaveItem = $(document.querySelector(".new-item:nth-child(1)"))
    leaveItem.animate({
        marginTop: `-${height}px`
    }, 1000, function () {
        leaveItem.remove()
        leaveItem.css('margin-top', '0')
        if (changeColor) {
            $('.new-item:nth-child(odd)').css('background', 'none')
            $('.new-item:nth-child(even)').css('backgroundColor', 'rgb(32,66,90)')
        } else {
            $('.new-item:nth-child(even)').css('background', 'none')
            $('.new-item:nth-child(odd)').css('backgroundColor', 'rgb(32,66,90)')
        }
        changeColor = !changeColor
        $('.news-list-wrapper').append(leaveItem)
    })
}


if (newsList.length > 3) {
    setInterval(AutoScroll, 3000)
}
