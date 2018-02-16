import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, fadeIn } from 'react-animations';
import * as palette from '../../config/Style';
import { Container, Title, Wrapper } from '../../config/Styles-Component';

export default class Skills extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title> My Skills</Title>
        </Container>
      </Wrapper>
    );
  }
}

const slideInDownAnimation = keyframes`${fadeInDownBig}`;

const fadeInAnimation = keyframes`${fadeIn}`;
