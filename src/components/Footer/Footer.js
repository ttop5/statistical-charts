import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';


class Footer extends Component {
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
        className={classnames(...className.split(), style.footer)}
      >
        <OverPack
          {...this.props}
          playScale={0.05}
          hideProps={{ footer: { reverse: true } }}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="footer"
          >
            <div className={style.content}>
              <span>Design by <a href="https://ttop5.github.io/blog/">ttop5</a></span>
              <pre />
              <span>Copyright © 2017 <a href="http://sdutacm.org/blog/">SDUTACM运维技术中心</a>. All Rights Reserved</span>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
