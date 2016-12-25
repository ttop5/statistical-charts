import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class RadarChart extends Component {
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
    const myChart = echarts.init(document.getElementById('radarChart'));
    const option = {
      color: ['#2196f3'],
      tooltip: {
        trigger: 'axis',
      },
      radar: [
        {
          name: {
            textStyle: {
              color: '#666',
            },
          },
          indicator: [
            { text: 'C', max: 1335 },
            { text: 'C++', max: 1335 },
            { text: 'Java', max: 1335 },
            { text: 'Python2', max: 1335 },
            { text: 'Python3', max: 1335 },
          ],
          center: ['54%', '52%'],
          radius: 200,
        },
      ],
      series: [
        {
          type: 'radar',
          tooltip: {
            trigger: 'item',
          },
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [
            {
              name: '提交语言',
              value: [1335, 1310, 234, 135, 48],
            },
          ],
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
        className={classnames(...className.split(), style.radarchart)}
      >
        <div id="radarChart" className={style.radarChart}></div>
      </div>
    );
  }
}

export default RadarChart;
