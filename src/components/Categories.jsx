import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from 'react';
import SignUp from "../pages/SignUp";
import { Menu, Transition } from "@headlessui/react";
import Shop from "../pages/Shop";

function Categories() {
    let userInfo = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <>
            <div className='flex px-2 mx-auto  bg-gray-100/75 overflow-hidden h-12 relative'>
                <div className=' flex my-auto align-middle h-14 font-verdana'>
                    <ul className="flex  gap-3 text-md font-semibold ml-5 my-auto  ">
                        <li className="flex theblue"><button className=" mb-3 flex">New <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Women <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li>
                            <Menu>
                                <Menu.Button className="flex gap-1 text-blue-custom ">More  <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></Menu.Button>
                                <Menu.Items className="absolute top-4 bg-white border-2 border-gray">
                                    <Menu.Item as="a" href={'/shop'} className="z-10">
                                        {({ active }) => (
                                            <div className="grid grid-cols-6 w-[90vw] h-900px ">
                                                <div className="text-sky-800">
                                                    <ul>
                                                        <li>Shoes</li>
                                                        <li>Sneakers & Athletic</li>
                                                        <li>Sandals</li>
                                                        <li>Running Shoes</li>
                                                        <li>Oxfords</li>
                                                        <li>Loafers</li>
                                                        <li>Clogs</li>
                                                        <li>Boots</li>
                                                        <li>Wide</li>
                                                        <li>Men's Adaptive Shoes</li>
                                                        <li>Work and Safety Sneakers</li>
                                                        <li>Work and Duty Boots</li>
                                                        <li>Shop All shoes</li>
                                                    </ul>
                                                </div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </li>
                        <Link to="/shop"><li className="flex theblue"><button className=" my-auto mb-3 flex">Men <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li></Link>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Kids <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Departments <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Brands <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">Sale <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                        <li className="flex theblue"><button className=" my-auto mb-3 flex">🔥 Clothing <BsFillCaretDownFill className="text-gray-300 text-sm my-auto p-0.5" /></button>  </li>
                    </ul>
                </div>
                <div className='flex theblue my-auto ml-auto mr-14  font-bold justify-end'>
                    {
                        userInfo ? (
                           <p>Welcome Back, {userInfo.name}  </p> 
                        ) : (
                            <Link to={'/sign-up'} element={<SignUp />} className="my-auto mb-3 mt-3 ">
                                <p> Sign In / Register</p>
                            </Link>
                        )
                    }


                </div>
            </div>

        </>
    )
}
export default Categories