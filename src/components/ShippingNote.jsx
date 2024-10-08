import React, { useState } from 'react';

function ShippingNote() {
    // State to handle dropdown visibility
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='flex text-black  bg-amber-300 text-md hover:text-blue-200 h-[2.48rem] relative'>
            <button 
                id="dropdownDefaultButton" 
                onClick={toggleDropdown} 
                className="text-black text-md hover:text-blue-200 focus:ring-4 focus:outline-none font-small px-6 text-center inline-flex items-center border-r-2"
                type="button"
            >
                Customer Service 
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {/* Dropdown menu */}
            <div 
                id="dropdown" 
                className={`${
                    isDropdownOpen ? 'block' : 'hidden'
                } z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full mt-1 left-0`}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Return An Item</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Get Help</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FAQS</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Give Us Feedback</a>
                    </li>
                </ul>
            </div>

            <div className='my-auto ml-auto mr-3'>
                <p className="text-md">Every Zappos order comes FAST, FREE Shipping, plus a FREE 365-Day Return Policy! <b>More About Shipping & Returns</b></p>
            </div>
        </div>
    );
}

export default ShippingNote;
