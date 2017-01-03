import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class VerticalBarChart extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    barData: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    const { problemId, passRate } = this.props.barData;
    const myChart = echarts.init(document.getElementById('verticalBarChart'));
    const option = {
      title: {
        text: '题目低通过率Top10',
        textStyle: {
          fontWeight: 'normal',
          color: '#999',
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
          data: problemId,
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
          data: passRate,
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
