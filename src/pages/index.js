import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';
import Me from '../components/Me';
import SideProgress from '../components/SideProgress';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default class Index extends PureComponent {
  state = { meDone: false, sideProgressDone: false };

  render() {
    const { meDone, sideProgressDone } = this.state;
    return (
      <MainWrapper>
        <SideProgress
          onFinishAnimation={() => this.setState({ sideProgressDone: true })}
          meDone={meDone}
        />
        {/*<Header*/}
        {/*avatar={config.avatar}*/}
        {/*name={config.name}*/}
        {/*location={config.location}*/}
        {/*socialMedia={config.socialMedia}*/}
        {/*/>*/}
        <Me sideProgressDone={sideProgressDone} onMeDone={() => this.setState({ meDone: true })} />
      </MainWrapper>
    );
  }
}
