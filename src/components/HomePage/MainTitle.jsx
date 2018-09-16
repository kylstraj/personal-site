import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = ({children}) => (
  <h1 id="main-title">
    {children}
  </h1>
);

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;
