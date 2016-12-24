import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs, Icon } from 'antd';

import LineCahrt from './components/LineCahrt';
import { formatNumberRgx } from 'utils/commons';


const TabPane = Tabs.TabPane;

class SecondPage extends Component {
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

  /* eslint-disable */
  render() {
    const { className } = this.props;
    const submitCount = 2216008;
    const [dayName, monthName, yearName] = ['dayLineChart', 'monthLineChart', 'yearLineChart'];
    const dayData = {
      time: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
             '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      count: [150, 100, 200, 350, 200, 300, 100, 150, 100, 200, 350, 200, 300, 100, 150, 100, 200, 350, 200, 300, 100, 200, 300, 200],
    };
    const monthData = {
      time: ['2016-10-01', '2016-10-02', '2016-10-03', '2016-10-04', '2016-10-05', '2016-10-06', '2016-10-07', '2016-10-08', '2016-10-09', '2016-10-10',
        '2016-10-11', '2016-10-12', '2016-10-13', '2016-10-14', '2016-10-15', '2016-10-16', '2016-10-17', '2016-10-18', '2016-10-19', '2016-10-20',
        '2016-10-21', '2016-10-22', '2016-10-23', '2016-10-24', '2016-10-25', '2016-10-26', '2016-10-27', '2016-10-28', '2016-10-29', '2016-10-30', '2016-10-31'],
      count: [1500, 1000, 2000, 3500, 2000, 3000, 1000, 1500, 1000, 2000, 3500, 2000, 3000, 1000, 1500, 1000, 2000, 3500, 2000, 3000, 1000, 4000, 3000, 3000, 1000, 2000, 3500, 2000, 3000, 1000, 1500],
    };
    const yearData = {
      time: ['2016-01月', '2016-02月', '2016-03月', '2016-04月', '2016-05月', '2016-06月', '2016-07月', '2016-08月', '2016-09月', '2016-10月', '2016-11月', '2016-12月'],
      count: [15000, 10000, 20000, 35000, 20000, 30000, 10000, 15000, 10000, 20000, 35000, 20000],
    };

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.secondpage)}
        >
        <OverPack
          className={`content-template ${this.props.className}`}
          hideProps={{ img: { reverse: true } }}
          location={this.props.id}
          className={style.content}
        >
          <TweenOne
            key="img"
            animation={{ x: '-=30', opacity: 0, type: 'from' }}
            className={`${this.props.className}-img`}
          >
            <div className={style.countTitle}>
              <span>OJ总提交数</span>
              <span>{formatNumberRgx(submitCount)}</span>
            </div>
            <div className={style.line}></div>
          </TweenOne>
          <QueueAnim
            className={`${this.props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            className={style.echart}
          >
            <Tabs key="tabs" tabPosition="left">
              <TabPane tab={<span><Icon type="dot-chart" />最近一天</span>} key="1">
                <LineCahrt
                  idName={dayName}
                  data={dayData}
              />
              </TabPane>
              <TabPane tab={<span><Icon type="bar-chart" />最近一月</span>} key="2">
                <LineCahrt
                  idName={monthName}
                  data={monthData}
                />
              </TabPane>
              <TabPane tab={<span><Icon type="area-chart" />最近一年</span>} key="3">
                <LineCahrt
                  idName={yearName}
                  data={yearData}
                />
              </TabPane>
            </Tabs>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default SecondPage;
