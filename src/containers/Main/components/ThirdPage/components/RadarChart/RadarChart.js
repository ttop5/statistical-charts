import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class RadarChart extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    radarData: PropTypes.array.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    const { radarData } = this.props;
    const maxData = Math.max.apply(0, radarData);
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
            { text: 'C', max: maxData },
            { text: 'C++', max: maxData },
            { text: 'Java', max: maxData },
            { text: 'Python2', max: maxData },
            { text: 'Python3', max: maxData },
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
              value: radarData,
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
