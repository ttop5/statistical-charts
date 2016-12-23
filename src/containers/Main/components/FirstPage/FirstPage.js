import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';


class FirstPage extends Component {
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

  render() {
    const { className } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.firstpage)}
      >
        <div className={style.content}>
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            className={`${this.props.className}-wrapper`}
            key="text"
          >
            <span
              className="title"
              key="title"
            >
              <h1>STATISTICAL CHART</h1>
            </span>
            <p
              key="content"
            >
              带您直观了解关于 SDUT OJ 背后的大数据
            </p>
            <Button type="ghost" key="button" className={style.button}>
              <a href="http://sdutacm.org/">Go to Online Judge</a>
            </Button>
          </QueueAnim>
        </div>
        <div className={style.arraw}>
          <TweenOne
            animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
            className={`${this.props.className}-icon`}
            key="icon"
          >
            <Icon type="down" />
          </TweenOne>
        </div>
      </div>
    );
  }
}

export default FirstPage;
