import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';

const SecondaryPage = ({title, children}) => (
  <div id="page">
    <PageTitle>{title}</PageTitle>
    {children}
  </div>
);

SecondaryPage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SecondaryPage;
