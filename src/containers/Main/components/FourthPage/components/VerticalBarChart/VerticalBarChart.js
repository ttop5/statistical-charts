import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class VerticalBarChart extends Component {
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
    const myChart = echarts.init(document.getElementById('verticalBarChart'));
    const option = {
      title: {
        text: '题目低通过率Top10',
        textStyle: {
          fontWeight: 'normal',
        },
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'xAxis',
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
      xAxis: [
        {
          type: 'category',
          data: ['2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '题目通过率',
          position: 'right',
          axisLabel: {
            formatter: '{value}%',
          },
        },
      ],
      series: [
        {
          name: '题目低通过率Top10',
          type: 'bar',
          barWidth: '60%',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'lightBlue', // 0% 处的颜色
              }, {
                offset: 1,
                color: '#2196f3', // 100% 处的颜色
              }], false),
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }

  render() {
    const { className } = this.props;

    /* eslint-disable */
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.verticalbarchart)}
      >
        <div id="verticalBarChart" className={style.barChart}></div>
      </div>
    );
  }
}

export default VerticalBarChart;
