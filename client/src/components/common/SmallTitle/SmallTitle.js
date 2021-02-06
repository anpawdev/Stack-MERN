import React from 'react';
import PropTypes from 'prop-types';

const SmallTitle = ({ children, ...otherProps }) => (
  <h2 {...otherProps} className="mt-6 mb-6 text-xl font-light text-black antialiased">
    { children }
  </h2>
);

SmallTitle.propTypes = {
  children: PropTypes.string,
};

export default SmallTitle;