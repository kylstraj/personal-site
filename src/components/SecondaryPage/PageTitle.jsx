import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({children}) => (
  <h1 id="page-title">
    {children}
  </h1>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
