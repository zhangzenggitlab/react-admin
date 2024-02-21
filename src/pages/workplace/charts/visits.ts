import { useImmer } from 'use-immer';
import * as echarts from 'echarts';
function Visits() {
    const [options, setOption] = useImmer({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#B288EA'
                }
            }
        },
        series: [
            {
                data: [82, 932, 91, 934, 190, 133, 130],
                type: 'line',
                color: "#B288EA",
                smooth: true,
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#B288EA'
                        },
                        {
                            offset: 1,
                            color: '#fff'
                        }
                    ])
                },
            }
        ]
    });

    return { options, setOption }
}

export default Visits;