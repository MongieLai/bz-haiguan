const timesList = $('.times-list')
timesList.on('click', 'li', (e) => {
    const currentLi = $(e.currentTarget)
    currentLi.addClass('selected').siblings('li').removeClass('selected')
    handlePlatformNormalChart()
})

const chart = document.querySelector('.platform-normal-chart-data')
const handlePlatformNormalChart = () => {
    //处理切换标签后的图表数据切换
}

const options = {
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        // nameTextStyle: {
        //     color: "white"
        // }
        axisLabel: {
            textStyle: {
                color: `white`
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            lineStyle: {
                type: "solid"
            }
        }
    },
    // grid: {
    //     left: 0,
    //     top:15,
    //     bottom:25,
    //     right:10
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[0].data;
            return tar
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        splitNumber: 2,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },

        axisLabel: {
            // formatter: '{value}%'  //刻度标签的内容格式器，支持字符串模板和回调函数两种形式，按照自己需求设置,
            formatter: function (value) {
                var texts = [];
                if (value == 0) {
                    texts.push('0%');
                }
                else if (value <= 50) {
                    texts.push('50%');
                }
                else if (value <= 100) {
                    texts.push('100%');
                }
                return texts;
            },
            textStyle: {
                color: `white`
            }
        },
    },
    series: [{
        data: [20, 18, 10, 80, 70, 30, 20],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.6)'
        },
        itemStyle: {
            color: "#ef5f56"
        },
        barWidth: '15'
    }]
};

initEchart(chart, options)