import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout//MainMenu/MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    state = {
        links: [
          { path: '/', title: 'Home' },
          { path: '/posts', title: 'Posts' },
          { path: '/about', title: 'About' },
          { path: '/contact', title: 'Contact' },
        ],
    }

    render() {
        const { links } = this.state;

        return(
            <nav className="navbar h-section mx-auto mt-14 mb-12 font-medium text-sm text-center">
                <div className="flex flex-col items-center xl:text-left lg:flex-row md:flex-row flex-grow flex-wrap md:flex md:justify-center md:items-center md:w-auto mx-auto font-medium text-sm uppercase">
                    <Logo />
                    <MainMenu links={links} />
                    <div>
                        <Link to={{ pathname: "http://facebook.com" }} target="_blank" className="px-2">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </Link>
                        <Link to={{ pathname: "http://twitter.com" }} target="_blank" className="px-2">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </Link>
                        <Link to={{ pathname: "http://instagram.com" }} target="_blank" className="px-2">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>  
                    </div>
               </div>
               <p className="pt-10 text-xs">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               <p className="mt-8 p-6">© 2021 Anna Pawlik</p>             
            </nav>
        );
    }
};

export default Footer;