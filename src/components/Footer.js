import React from 'react';
import styled from 'styled-components';

import * as palette from '../../config/Style';

const Content = styled.p`
  color: ${palette.SECONDARY_COLOR};
  padding: 0 ${palette.CONTENT_PADDING};
  text-align: center;
`;

const Footer = () => <Content>&copy; 2018 by Rodrigo Dugin.</Content>;

export default Footer;
