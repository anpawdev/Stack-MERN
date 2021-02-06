import React from 'react';
import { Menu, Transition } from "@headlessui/react";
import UserLogin from '../../../images/default-user-image.png';

class User extends React.Component {
    render() {
        return(
            <div className="flex justify-end w-9 h-9 m-4 cursor-pointer lg:order-last">
                <div className="relative inline-block text-left">
                    <Menu>
                    {({ open }) => (
                    <>
                    <Menu.Button className="focus:outline-none">
                        <img className="rounded-full border border-white-500 shadow-sm" src={UserLogin} alt="user_image" />
                        <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-600 z-2"></div> 
                    </Menu.Button>
                    <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items
                        static
                        className="absolute lg:right-0 sm:right-10 md:right-10 w-56 m-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none text-left"
                    >
                        <div className="p-4">
                            <p className="font-bold">Signed in as</p>
                            <p>design@design.com</p>
                        </div>
                        <div className="p-1">
                        <Menu.Item>
                            {({ active }) => (
                            <a className={`${active && 'bg-gray-100 text-gray-900 w-full'} flex justify-between w-full px-4 py-2`} 
                            href="#settings">
                            Settings
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a className={`${active && 'bg-gray-100 text-gray-900 w-full'} flex justify-between w-full px-4 py-2`} 
                                href="#comments">
                            Comments
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a className={`${active && 'bg-gray-100 text-gray-900 w-full'} flex justify-between w-full px-4 py-2`} 
                                href="#statistic">
                                Statistic
                            </a>
                            )}
                        </Menu.Item>
                        </div>
                        <div className="p-1">
                            <Menu.Item>
                                {({ active }) => (
                                <a className={`${active && 'bg-gray-100 text-gray-900 w-full'} flex w-full px-4 py-2`} 
                                href="#signout">
                                Sign out
                                </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                    </Transition>
                    </> 
                    )}
                </Menu>
            </div>
        </div>
    );
}
};

export default User;