import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SortDownIcon from '@fortawesome/fontawesome-free-solid/faSortDown';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { animateScroll as scroll } from 'react-scroll';
import * as palette from '../../config/Style';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const Continue = ({text}) => (
  <ArrowDownBtn onClick={() => scroll.scrollToBottom()}>
    <Text>{text}</Text>
    <FontAwesomeIcon icon={SortDownIcon} color={palette.PRIMARY_COLOR} size="2x" />
  </ArrowDownBtn>
);

const ArrowDownBtn = styled.a`
  text-align: center;
  position: absolute;
  bottom: 15px;
  animation: 1.5s ${fadeInUpAnimation};
`;

const Text = styled.p`
  font-size: 14px;
  color: ${palette.PRIMARY_COLOR};
  margin-bottom: -5px;
`;

export default Continue;
