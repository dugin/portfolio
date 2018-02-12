import React, { PureComponent } from 'react';
import { fadeInLeft, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import * as palette from '../../config/Style';

export default class SideProgress extends PureComponent {
  state = {
    progress: [
      { title: 'start', active: true },
      { title: 'bio', active: false },
      { title: 'portfolio', active: false }
    ],
    animationTitle: { 0: false, 1: false, 2: false },
    animationProgressCircle: { 0: false, 1: false, 2: false }
  };

  componentWillReceiveProps(nextProps) {
    this.state.progress.forEach((a, i) => {
      this.addAnimation('animationProgressCircle', i, i * 600);
      this.addAnimation('animationTitle', i, 1400 + i * 600);
    });
  }

  onFinishAnimation(i) {
    const lastIndex = Object.keys(this.state.animationTitle).pop();

    if (i === Number.parseInt(lastIndex) && this.state.animationTitle[lastIndex])
      setTimeout(() => this.props.onFinishAnimation(), 500);
  }
  addAnimation(animation, i, time) {
    setTimeout(() => {
      this.setState(
        state => ({ [animation]: { ...state[animation], [i]: true } }),
        () => {
          this.onFinishAnimation(i);
        }
      );
    }, time);
  }

  render() {
    const { progress, animationTitle, animationProgressCircle } = this.state;

    return (
      <Wrapper>
        {this.props.meDone &&
          progress.map((p, i) => (
            <ProgressWrapper>
              {animationTitle[i] && <SlidyText>{p.title}</SlidyText>}
              {animationProgressCircle[i] && <ProgressCircle active={p.active} />}
            </ProgressWrapper>
          ))}
      </Wrapper>
    );
  }
}

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const SlidyText = styled.div`
  animation: 1.5s ${fadeInLeftAnimation};
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  background-size: auto;
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const ProgressWrapper = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 5px 0;
  color: ${palette.COLOR};
  min-height: 25px;
`;

const ProgressCircle = styled.div`
  border: 1px solid ${palette.COLOR};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 10px;
  animation: 1s ${fadeInAnimation};
  background-color: ${props => (props.active ? palette.COLOR : 'transparent')}};
`;
