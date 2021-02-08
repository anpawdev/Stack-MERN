import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => (
  <h2 className="section-title mt-6 mb-4 py-10 text-black text-justify">
     {children}
  </h2>
);

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;