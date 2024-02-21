import { useImmer } from 'use-immer';
function Order() {
    const color = "#5E8EF0";

    const [options, setOption] = useImmer({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show:false
            }
        ],
        yAxis: [
            {
                type: 'value',
                show:false
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '20px',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    normal: {
                        opacity: 1,
                        color: {
                            type: "linear",
                            colorStops: [
                                // 0%处的颜色
                                {
                                    offset: 0,
                                    color
                                },

                                {
                                    offset: 1,
                                    color
                                },
                            ],

                        },
                    }
                }
            }
        ]
    });

    return { options, setOption }
}

export default Order;