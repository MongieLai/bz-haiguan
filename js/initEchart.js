const initEchart = (dom, options) => {
    const myChart = echarts.init(dom);
    myChart.setOption(options);
}