import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const MainMenu = ({ links, location }) => (
  <ul className="flex flex-col lg:flex-row md:flex-row lg:ml-auto m-2 items-center order-1">
    { links.map((link, index) =>
      <li key={index} className="py-2">
        <Link className={(location.pathname === link.path && 'font-bold text-section-600' ) || ''} to={link.path}>{link.title}</Link>
      </li>
    )}
  </ul>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default withRouter(props => <MainMenu {...props}/>);
