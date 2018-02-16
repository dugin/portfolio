/* eslint react/no-danger: off */

import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';
import Me from '../containers/Me';

import SEO from '../components/SEO';
import ProjectHeader from '../components/ProjectHeader';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

const Project = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const date = format(project.date, config.dateFormat);

  return (
    <div>
      {/*<Helmet title={`${project.title} | ${config.siteTitle}`} />*/}
      {/*<SEO postPath={slug} postNode={postNode} postSEO />*/}
      {/*<ProjectHeader*/}
      {/*avatar={config.avatar}*/}
      {/*name={config.name}*/}
      {/*date={date}*/}
      {/*title={project.title}*/}
      {/*areas={project.areas}*/}
      {/*/>*/}
    </div>
  );
};

export default Project;
