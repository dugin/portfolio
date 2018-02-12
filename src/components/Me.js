import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';
import { slideInUp } from 'react-animations';
import * as palette from '../../config/Style';
import Continue from './Continue';

export default class Me extends PureComponent {
  state = { titleDone: false, subtitleDone: false };

  onTypingDone = () => {
    this.setState({ titleDone: true });

    setTimeout(() => {
      this.setState({ subtitleDone: true }, this.props.onMeDone());
    }, 800);
  };

  render() {
    const { titleDone, subtitleDone } = this.state;
    return (
      <Wrapper>
        <Container>
          <Title startDelay={1000} onTypingDone={this.onTypingDone}>
            <span>Enthusiastic front-end Developer</span>
          </Title>

          {titleDone && <SlidyText>Focused on new javascript frameworks</SlidyText>}

          {subtitleDone && <SlidySubText>Higly passionate developer</SlidySubText>}
        </Container>
        {this.props.sideProgressDone && <Continue />}
      </Wrapper>
    );
  }
}

const slideInUpAnimation = keyframes`${slideInUp}`;

const SlidyText = styled.div`
  animation: 1.5s ${slideInUpAnimation};
  font-size: 1.4rem;
  color: ${palette.COLOR};
`;

const SlidySubText = styled.div`
  animation: 2s ${slideInUpAnimation};
  font-size: 1rem;
  color: ${palette.SECONDARY_COLOR};
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background: url("${require('../../static/images/profile.png')}") no-repeat center center;
  background-size: auto;
   flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typist)`
  font-size: 2.2rem;
  color: ${palette.PRIMARY_COLOR};
`;
