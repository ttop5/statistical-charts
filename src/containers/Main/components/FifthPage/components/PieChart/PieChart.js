import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class PieChart extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    idName: PropTypes.string.isRequired,
    chartData: PropTypes.array.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    const { idName, chartData } = this.props;
    const myChart = echarts.init(document.getElementById(idName));
    const option = {
      color: ['#2196f3', '#1f939e', '#00bcd4', '#009688', '#37bdab'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: '用户学校分布',
          type: 'pie',
          radius: '85%',
          center: ['50%', '55%'],
          data: chartData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }

  /* eslint-disable */
  render() {
    const { className, idName } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.piechart)}
      >
        <div key="chart" id={idName} className={style.pieChart}></div>
      </div>
    );
  }
}

export default PieChart;
