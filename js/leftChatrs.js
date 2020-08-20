const timesList = $('.times-list')
timesList.on('click', 'li', (e) => {
    const currentLi = $(e.currentTarget)
    currentLi.addClass('selected').siblings('li').removeClass('selected')
    handlePlatformNormalChart()
})
const handlePlatformNormalChart = () => {
    //处理切换标签后的图表数据切换
}
const oneChart = document.querySelector('.platform-normal-chart-data')
const twoChart = document.querySelector('#two-chart-main-data')
// const oneChart = document.querySelector('.platform-normal-chart-data')


const oneOptions = {
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
    grid: {
        left: 50,
        top: 50,
        bottom: 25,
        right: 10
    },
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
        data: [30, 50, 60, 80, 50, 40, 70],
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

const twoOptions = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    color: ['#07f4ae', '#ff0000'],
    legend: {
        // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        right: 0,
        textStyle: {
            color: "white"
        },
        // icon: "roundRect",
        data: [{
            name: '下载',
            // 强制设置图形为圆。
            icon: 'roundRect',
            // 设置文本为红色
        }, {
            name: '上传',
            // 强制设置图形为圆。
            icon: 'roundRect',
            // 设置文本为红色
        }]
    },
    grid: {
        left: 30,
        right: 10,
        bottom: 0,
        top: 25,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    color: `white`
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            // min: 0,
            max: 30,
            // splitNumber: 7,
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
                        texts.push('0');
                    }
                    else if (value <= 5) {
                        texts.push('5k');
                    }
                    else if (value <= 10) {
                        texts.push('10k');
                    }
                    else if (value <= 15) {
                        texts.push('15k');
                    }
                    else if (value <= 20) {
                        texts.push('20k');
                    }
                    else if (value <= 25) {
                        texts.push('25k');
                    }
                    else if (value <= 30) {
                        texts.push('30k');
                    }
                    return texts;
                },
                textStyle: {
                    color: `white`
                }
            },
        }
    ],
    series: [
        {
            name: '下载',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            // lineStyle: {
            //     normal: {
            //         color: `red`
            //     }
            // },
            symbol: "none",
            data: [10, 20, 0, 13, 4, 2, 1]
        },

        {
            name: '上传',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                }
            },
            areaStyle: {},
            symbol: "none",
            data: [0, 10, 15, 14, 12, 22, 11]

        }
    ]
};




initEchart(oneChart, oneOptions)
initEchart(twoChart, twoOptions)