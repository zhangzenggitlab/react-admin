import "./index.scss";
import React from "react";
import { Card, Statistic, Col, Row, Divider, Tabs, TabsProps } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useImmer } from 'use-immer';
import { IDataSource, IColumns } from "./interfaces/index";
import Visits from "./charts/visits";
import Sales from "./charts/sales";
import Order from "./charts/order";
import SalesDoughnut from "./charts/salesDoughnut";
import Echart from "@/components/echart";
import AtTable from "@/components/at-table";

function Workplace() {

    const [option, setOption] = useImmer({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,

                }, label: {
                    color: "#A1A1A1",
                },
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '40px',
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
                                    color: "#5E8EF0",
                                },

                                {
                                    offset: 1,
                                    color: "#5E8EF0",
                                },
                            ],

                        },
                    }
                }
            }
        ]
    });

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '销售额',
            children: <Echart option={option} />,
        },
        {
            key: '2',
            label: '访问量',
            children: <Echart option={option} />,
        },

    ];

    const dataSource: Array<IDataSource> = [
        {
            key: '1',
            sort: '1',
            keyWord: "关键词-1",
            userNums: 100,
            increase: 5
        },
        {
            key: '2',
            sort: '2',
            keyWord: "关键词-2",
            userNums: 200,
            increase: -5
        },
    ];

    const columns: Array<IColumns> = [
        {
            title: '排名',
            dataIndex: 'sort',
            key: 'sort',
        },
        {
            title: '搜索关键词',
            dataIndex: 'keyWord',
            key: 'keyWord',
            render(keyWord: string) {
                return <a>{keyWord}</a>
            },
        },
        {
            title: '用户数',
            dataIndex: 'userNums',
            key: 'userNums',
        },
        {
            title: '周涨幅',
            dataIndex: 'increase',
            key: 'increase',
            render(increase: number) {
                if (increase > 0) {
                    return <>{increase}% <CaretUpOutlined /></>
                }
                return <>{increase}% <CaretDownOutlined /></>
            },
        },
    ];

    const visits = Visits();
    const sales = Sales();
    const order = Order();
    const salesDoughnut = SalesDoughnut();

    const onChange = (key: string) => {
        if (key == "1") {
            setOption(draftOption => {
                draftOption.series[0].data = [1, 1, 1, 1, 1, 1, 1]
            })
        }
        if (key == "2") {
            setOption(draftOption => {
                draftOption.series[0].data = [2, 1, 2, 1, 1, 1, 1]
            })
        }
    };

    return (
        <div className="main-page">
            <Row gutter={[26, 26]}>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic title="总访问量" value={112893} />
                        <div className="card-chart">
                            <Echart option={visits.options} />
                        </div>
                        <Divider className="at-divider" />
                        日访问量 100
                    </Card>
                </Col>

                <Col span={6}>
                    <Card bordered={false} >
                        <Statistic title="总销售额" value={112893} />
                        <div className="card-chart">
                            <Echart option={sales.options} />
                        </div>
                        <Divider className="at-divider" />
                        日销售额 100
                    </Card>
                </Col>

                <Col span={6}>
                    <Card bordered={false} >
                        <Statistic title="总订单量" value={112893} />
                        <div className="card-chart">
                            <Echart option={order.options} />
                        </div>
                        <Divider className="at-divider" />
                        日订单量 100
                    </Card>
                </Col>

                <Col span={6}>
                    <Card bordered={false} >
                        <Statistic title="总用户" value={112893} />
                        <div className="card-chart">
                            <Echart option={sales.options} />
                        </div>
                        <Divider className="at-divider" />
                        日增加用户 100
                    </Card>
                </Col>
            </Row>

            <Card bordered={false} className="echart-panel">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="tabs-chart" />
            </Card>

            <Row gutter={[26, 26]} className="echart-panel">
                <Col span={12}>
                    <Card bordered={false} title="热门搜索" className="salesDoughnut-card" >
                        <Row>
                            <Col span={12}>
                                <Statistic title="用户搜索数" value={112893} suffix={<CaretUpOutlined />} />
                            </Col>
                            <Col span={12}>
                                <Statistic title="人均搜索次数" value={11283} suffix={<CaretDownOutlined />} />
                            </Col>
                        </Row>

                        <AtTable columns={columns} dataSource={dataSource} pagination={true} rowKey={"key"}></AtTable>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false} title="销售额类别占比" className="salesDoughnut-card">
                    <div className="salesDoughnut-chart">
                            <Echart option={salesDoughnut.options} />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Workplace;