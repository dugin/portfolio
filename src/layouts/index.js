import React from 'react';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import favicon from './favicon.ico';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

/* eslint no-unused-expressions: off */
injectGlobal`
  body {
    background-color: ${palette.BG_COLOR};
    background-image: url("${palette.BG_PATTERN}");
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    color: inherit;
    flex: 1;
    min-height: 100vh;
    
    & > div{
        display: flex;
        flex: 1;
    }
  }
  

  a {
    color: ${palette.LINK_COLOR};
    transition: color .5s;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${palette.LINK_HOVER_COLOR};
  }
  
  
 
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TemplateWrapper = props => {
  const { children } = props;

  return (
    <MainWrapper>
      <Helmet
        title={config.siteTitleAlt}
        meta={[
          { name: 'description', content: 'Gatsby Starter Portfolio - Emilia' },
          { name: 'keywords', content: 'gatsby, starter, portfolio, lekoarts' }
        ]}
      >
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <SEO />
      {children()}
    </MainWrapper>
  );
};

export default TemplateWrapper;
