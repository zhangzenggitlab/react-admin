import { useImmer } from 'use-immer';
import * as echarts from 'echarts';
function Sales() {
    const color = "#1FC5C5";

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
            right: 0,
        }, tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: color
                }
            }
        },
        series: [
            {
                data: [802, 932, 901, 934, 190, 1033, 130],
                type: 'line',
                color: color,
                smooth: true,
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: color
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

export default Sales;