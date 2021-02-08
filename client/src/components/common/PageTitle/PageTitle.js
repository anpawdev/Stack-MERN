import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ children }) => (
  <h1 className="text-2xl m-10 tracking-wider font-title text-black uppercase text-center">
     {children}
  </h1>
);

PageTitle.propTypes = {
  children: PropTypes.string,
};

export default PageTitle;