import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { formatNumberRgx } from 'utils/commons';
import LevelBarChart from './components/LevelBarChart';
import VerticalBarChart from './components/VerticalBarChart';


class FourthPage extends Component {
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

  /* eslint-disable */
  render() {
    const { className } = this.props;
    const problemCount = 2725;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.fourthpage)}
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
              <span>{formatNumberRgx(problemCount)}</span>
              <span>题目总数</span>
            </div>
            <div className={style.line}></div>
          </TweenOne>

          <QueueAnim
            className={`${this.props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <div key="levelBarChart" className={style.chartDiv}>
              <LevelBarChart />
            </div>
            <div key="verticalBarChart" className={style.chartDiv}>
              <VerticalBarChart />
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default FourthPage;
