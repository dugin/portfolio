import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../../config/Styles-Component';

import Bio from '../containers/Bio';
import Me from '../containers/Me';
import SideProgress from '../components/SideProgress';
import Skills from '../containers/Skills';

const screenHeight = window.innerHeight;

export default class Index extends PureComponent {
  state = { meDone: false, sideProgressDone: false, showBio: false, stage: 0 };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollY } = window;

    const stage = Math.round(scrollY / screenHeight);

    switch (stage) {
      case 1:
        this.setState({ stage: 1 });
        setTimeout(() => this.setState({ showBio: true }), 800);
        break;
      case 2:
        this.setState({ stage: 2 });
        break;
      case 3:
        this.setState({ stage: 3 });
        break;

      default:
        this.setState({ stage: 0 });
        break;
    }

    // if (scrollY > screenHeight / 2) {
    //
    // }
  };

  render() {
    const { meDone, sideProgressDone, showBio, stage } = this.state;
    return (
      <MainWrapper>
        <SideProgress
          onFinishAnimation={() => this.setState({ sideProgressDone: true })}
          meDone={meDone}
          stage={stage}
        />
        {/*<Header*/}
        {/*avatar={config.avatar}*/}
        {/*name={config.name}*/}
        {/*location={config.location}*/}
        {/*socialMedia={config.socialMedia}*/}
        {/*/>*/}
        <Me sideProgressDone={sideProgressDone} onMeDone={() => this.setState({ meDone: true })} />

        {sideProgressDone && <Bio shouldShow={showBio} />}

        {showBio && <Skills />}
      </MainWrapper>
    );
  }
}
