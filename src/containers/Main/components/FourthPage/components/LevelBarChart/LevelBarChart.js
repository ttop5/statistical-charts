import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class LevelBarChart extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('levelBarChart'));
    const option = {
      title: {
        text: '题目提交量Top10',
        textStyle: {
          fontWeight: 'normal',
          color: '#999',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      yAxis: [{
        type: 'category',
        name: '题目ID',
        data: ['1009', '1008', '1007', '1006', '1005', '1004', '1003', '1002', '1001', '1000'],
        axisTick: {
          alignWithLabel: true,
        },
      }],
      xAxis: [{
        show: false,
      }],
      series: [{
        name: '题目提交量Top10',
        type: 'bar',
        barWidth: '60%',
        data: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
        label: {
          normal: {
            show: true,
            position: 'insideRight',
            textStyle: {
              color: 'white',
            },
          },
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: 'lightBlue', // 0% 处的颜色
            }, {
              offset: 1,
              color: '#3398DB', // 100% 处的颜色
            }], false),
          },
        },
      }],
    };
    myChart.setOption(option);
  }

  render() {
    const { className } = this.props;

    /* eslint-disable */
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.levelbarchart)}
      >
        <div id="levelBarChart" className={style.barChart}></div>
      </div>
    );
  }
}

export default LevelBarChart;
