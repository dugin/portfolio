import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ArrowCircleDown from '@fortawesome/fontawesome-free-solid/faArrowCircleDown';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const Continue = () => (
  <ArrowDownBtn>
    <FontAwesomeIcon icon={ArrowCircleDown} color="white" size="2x" />
  </ArrowDownBtn>
);

const ArrowDownBtn = styled.a`
  text-align: center;
  position: absolute;
  bottom: 15px;
  animation: 1.5s ${fadeInUpAnimation};
`;

export default Continue;
