import React from 'react';

const Button = ({ variant = '', children, ...otherProps }) => (
  <button { ...otherProps } className="inline-flex items-center h-10 p-5 transition-colors duration-150 border border-black rounded-sm focus:shadow-outline hover:bg-black hover:text-white">
    { children }
  </button>
);

export default Button;