import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { get } from 'lodash';
import echarts from 'echarts';


class LineCahrt extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    idName: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    const { idName, data } = this.props;
    const time = get(data, 'time', []);
    const count = get(data, 'count', []);
    const myChart = echarts.init(document.getElementById(idName));
    const option = {
      color: ['#99cef7'],
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        show: false,
        containLabel: true,
        left: '0',
        right: '0',
        top: '50',
        bottom: '0',
      },
      xAxis: [{
        type: 'category',
        data: time,
      }],
      yAxis: [{
        type: 'value',
        position: 'left',
      }],
      series: [{
        type: 'line',
        name: '提交数',
        itemStyle: {
          emphasis: {
            color: '#99cef7',
            borderColor: '#02abf7',
            borderWidth: '2',
          },
        },
        areaStyle: {
          normal: {
            opacity: 0.5,
          },
        },
        data: count,
        smooth: true,
      }],
    };
    myChart.setOption(option);
  }

  render() {
    const { className, idName } = this.props;

    /* eslint-disable */
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.linecahrt)}
      >
        <div key="chart" id={idName} className={style.chart}></div>
      </div>
    );
  }
}

export default LineCahrt;
