import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => (
  <div className="container max-w-screen-xl mx-auto w-full font-body text-black p-6">
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
