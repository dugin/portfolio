import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import * as palette from '../../config/Style';
import { Container, Title, Wrapper } from '../../config/Styles-Component';
import Continue from '../components/Continue';

export default class Bio extends PureComponent {
  render() {
    const { shouldShow } = this.props;
    return (
      <Wrapper>
        {shouldShow && (
          <Container>
            <Title>About me</Title>

            <Content>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia
              in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie
              malesuada. Cras ultricies ligula sed magna dictum porta.
            </Content>
          </Container>
        )}
        {shouldShow && <Continue text="MY SKILLS" />}
      </Wrapper>
    );
  }
}

Bio.defaultProps = {
  shouldShow: false
};

const fadeInAnimation = keyframes`${fadeIn}`;

const Content = styled.p`
  color: ${palette.SECONDARY_COLOR};
  animation: 3.5s ${fadeInAnimation};

  text-align: justify;
`;
