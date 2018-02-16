import React, { PureComponent } from 'react';
import { fadeInLeft, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import * as palette from '../../config/Style';
import { nPages, progress } from '../utils/constants';
import { progressToObj } from '../utils/utils';

export default class SideProgress extends PureComponent {
  state = {
    progress,
    animationTitle: progressToObj(progress),
    animationProgressCircle: progressToObj(progress),
    isFirst: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.isFirst) {
      this.setAnimation();
    } else {
      this.setState(state => ({
        progress: state.progress.map((p, i) => ({ ...p, active: i === nextProps.stage }))
      }));
    }

    this.setState({ isFirst: false });
  }

  setAnimation() {
    this.state.progress.forEach((a, i) => {
      this.addAnimation('animationProgressCircle', i, i * 600);
      this.addAnimation('animationTitle', i, nPages * 600 + i * 600);
    });
  }

  onFinishAnimation(i) {
    const lastIndex = Object.keys(this.state.animationTitle).pop();

    if (i === Number.parseInt(lastIndex, 10) && this.state.animationTitle[lastIndex]) {
      setTimeout(() => this.props.onFinishAnimation(), 500);
    }
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
  font-size: 14px;
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
