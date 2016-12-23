import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SectionsContainer, Section } from 'react-fullpage';

import * as MainActions from './actions';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import Footer from 'components/Footer';


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
            <Section className={style.section1} color="#007760">
              <FirstPage />
            </Section>
            <Section color="#00bcd4">
              <SecondPage />
            </Section>
            <Section color="#eeeeee">
              <ThirdPage />
            </Section>
            <Section color="#eeeeee">
              <FourthPage />
            </Section>
            <Section color="#eeeeee">
              <FifthPage />
              <Footer />
            </Section>
          </SectionsContainer>
        </div>
      </div>
    );
  }
}

export default Main;
