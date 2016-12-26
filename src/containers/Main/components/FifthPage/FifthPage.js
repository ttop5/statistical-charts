import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Tabs, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import PieChart from './components/PieChart';


const TabPane = Tabs.TabPane;

class FifthPage extends Component {
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
    const [collegeIdName, schoolIdName, majorIdName] = ['collegePieChart', 'schoolPieChart', 'majorPieChart'];
    const collegePieChartData = [
      { value: 2335, name: '山东理工' },
      { value: 310, name: '山东科技' },
      { value: 234, name: '中国石油(华东)' },
      { value: 135, name: '青岛理工' },
      { value: 548, name: '青岛大学' },
    ];
    const schoolPieChartData = [
      { value: 335, name: '计算机学院' },
      { value: 310, name: '电气学院' },
      { value: 234, name: '车辆工程学院' },
      { value: 135, name: '理学院' },
      { value: 548, name: '材料学院' },
    ];
    const majorPieChartData = [
      { value: 2935, name: '计算机科学与技术' },
      { value: 310, name: '软件工程' },
      { value: 234, name: '通信工程' },
      { value: 135, name: '高分子材料' },
      { value: 48, name: '生物化学' },
    ];

    /* eslint-disable */
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.fifthpage)}
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
              <span>用户分布</span>
            </div>
          </TweenOne>

          <QueueAnim
            className={`${this.props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
          >
            <Tabs defaultActiveKey="1" key="tabs" className={style.tabs}>
              <TabPane tab={<span><Icon type="pie-chart" />专业分布</span>} key="1">
                <PieChart
                  idName={majorIdName}
                  chartData={majorPieChartData}
                />
              </TabPane>
              <TabPane tab={<span><Icon type="pie-chart" />学院分布</span>} key="2">
                <PieChart
                  idName={schoolIdName}
                  chartData={schoolPieChartData}
                />
              </TabPane>
              <TabPane tab={<span><Icon type="pie-chart" />学校分布</span>} key="3">
                <PieChart
                  idName={collegeIdName}
                  chartData={collegePieChartData}
                />
              </TabPane>
            </Tabs>
          </QueueAnim>
        </OverPack>

      </div>
    );
  }
}

export default FifthPage;
