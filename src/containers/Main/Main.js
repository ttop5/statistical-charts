import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SectionsContainer, Section } from 'react-fullpage';

import * as MainActions from './actions';


function mapStateToProps(state) {
  const { main } = state;
  return { main };
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(MainActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component {
  static propTypes = {
    main: PropTypes.object.isRequired,
    mainActions: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    main: PropTypes.object,
    mainActions: PropTypes.object,
  };

  getChildContext() {
    const { main, mainActions } = this.props;
    return { main, mainActions };
  }

  render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar: true,
      verticalAlign: false,
      arrowNavigation: true,
      sectionPaddingTop: '0px',
      sectionPaddingBottom: '0px',
    };

    return (
      <div className={style.main}>
        <div className={style.content} >
          <SectionsContainer className="container" {...options}>
            <Section className={style.section1} color="#007760">Page 1</Section>
            <Section color="#00bcd4">Page 2</Section>
            <Section color="#eeeeee">Page 3</Section>
            <Section color="#eeeeee">Page 4</Section>
            <Section color="#eeeeee">Page 5</Section>
          </SectionsContainer>
        </div>
      </div>
    );
  }
}

export default Main;
