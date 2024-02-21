import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./index.scss";
import React from "react";
/**
 *
 * @param option echart官方option配置
 * @returns
 */
function Echart(props: any) {
  const echartRef: any = useRef(null);
  let [resizeTimeOut] = useState<any>(null);
  const [echartDom, setEchartDom] = useState<any>(null);

  // 首次打开渲染数据到视图
  useEffect(() => {
    let echart = echartDom ? echartDom : echarts.init(echartRef.current);
    echart.setOption(props.option);
    setEchartDom(echart);

    const resizeEchartfn = () => {
      if (echart) {
        echart.resize();
      }
    };

    // 窗口变化更新图表
    const resizeEchart = () => {
      if (resizeTimeOut) {
        clearTimeout(resizeTimeOut);
      }

      resizeTimeOut = setTimeout(resizeEchartfn, 300);
    };

    window.addEventListener("resize", resizeEchart);

    return () => {
      window.removeEventListener("resize", resizeEchart);
      if (echart) {
        echart.dispose();
        setEchartDom(null);
        echart = null;
      }
    };
  }, []);

  return <div className="at-echart" ref={echartRef}></div>;
}

export default Echart;
