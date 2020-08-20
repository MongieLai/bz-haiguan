const actionsButtons = $('.actions-buttons')
actionsButtons.on('click', 'p', (e) => {
    const currentP = $(e.currentTarget)
    currentP.addClass('active').siblings('p').removeClass('active')
    changeCarLineChart()
})

const changeCarLineChart = () => {
    //处理切换标签后的图表数据切换
}