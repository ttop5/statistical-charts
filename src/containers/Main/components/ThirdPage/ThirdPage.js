import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import RadarChart from './components/RadarChart';
import PieChart from './components/PieChart';


class ThirdPage extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const radarData = [1335, 1310, 234, 135, 48];
    const pieData = [
      { value: 1335, name: 'C' },
      { value: 1000, name: 'C++' },
      { value: 234, name: 'Java' },
      { value: 135, name: 'Python2' },
      { value: 48, name: 'Python3' },
    ];

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.thirdpage)}
      >
        <OverPack
          className={`content-template ${this.props.className}`}
          hideProps={{ img: { reverse: true } }}
          location={this.props.id}
        >
          <TweenOne
            key="img"
            animation={{ x: '-=30', opacity: 0, type: 'from' }}
            className={`${this.props.className}-img`}
          >
            <div className={style.countTitle}>
              <span>提交语言</span>
            </div>
          </TweenOne>

          <QueueAnim
            className={`${this.props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <div key="radarChart" className={style.chartDiv}>
              <RadarChart
                radarData={radarData}
              />
            </div>
            <div key="pieChart" className={style.chartDiv}>
              <PieChart
                pieData={pieData}
              />
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default ThirdPage;
