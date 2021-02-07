import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => (
  <div className="max-w-screen-xl mx-auto w-full font-body text-black">
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
