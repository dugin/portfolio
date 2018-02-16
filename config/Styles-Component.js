import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import * as palette from './Style';

export const Container = styled.div`
  margin: 80px auto;
  border-top: 1px groove ${palette.PRIMARY_COLOR};
  border-bottom: 1px groove ${palette.PRIMARY_COLOR};
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 720px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const slideInDownAnimation = keyframes`${fadeInDown}`;

export const Title = styled.h1`
  color: ${palette.PRIMARY_COLOR};
  animation: 1s ${slideInDownAnimation};
`;
