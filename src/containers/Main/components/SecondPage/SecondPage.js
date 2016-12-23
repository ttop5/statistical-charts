import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { formatNumberRgx } from 'utils/commons';


class SecondPage extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    id: React.PropTypes.string,
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

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.secondpage)}
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
              <span>{formatNumberRgx(2216008)}</span>
              <span>OJ提交总数</span>
            </div>
            <div className={style.line}></div>
          </TweenOne>
          <QueueAnim
            className={`${this.props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <h1
              key="h1"
            >
            </h1>
            <p
              key="p"
            >
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default SecondPage;
