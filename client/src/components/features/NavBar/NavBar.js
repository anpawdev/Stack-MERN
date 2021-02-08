import React, { useState } from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout//MainMenu/MainMenu';
import Search from '../../common/Search/Search';
import User from '../../common/User/User';

function Navbar({ fixed }) {

  const [isOpen, setOpen] = useState(false);
  const links = [
              { path: '/', title: 'Home' },
              { path: '/posts/new', title: 'Add post' },
              { path: '/posts', title: 'Posts' },
              { path: '/about', title: 'About' },
              { path: '/contact', title: 'Contact' },
            ];
    
  return (
      <nav className="w-full mx-auto mt-0 py-2 border-b border-gray-300">
        <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto md:justify-center lg:static lg:block lg:justify-start">
            <Logo />
            <button className="cursor-pointer md:hidden block m-4 p-3"
            type="button"
            onClick={() => setOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-black" viewBox="0 0 24 24" stroke="currentColor" width="30" height="30">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
          </div>
          <div className={"flex flex-col items-center lg:flex-row md:flex-row flex-grow flex-wrap md:flex md:justify-center md:items-center md:w-auto mx-auto font-medium text-sm uppercase" +
              (isOpen ? " flex" : " hidden")
            }
          >
            <MainMenu links={links} />
            <Search />
            <User />
          </div>
        </div>
      </nav>
    );
}
  
export default Navbar;