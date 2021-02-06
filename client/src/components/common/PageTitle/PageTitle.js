import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ children }) => (
  <h1 className="text-5xl m-10 tracking-widest font-title text-black uppercase text-center">
     {children}
  </h1>
);

PageTitle.propTypes = {
  children: PropTypes.string,
};

export default PageTitle;