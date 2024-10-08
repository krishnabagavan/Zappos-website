import img1 from '../assets/zapposPBS-_CB1509642213_.svg'; // Ensure this path is correct
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Button from './Button';
import { Link } from 'react-router-dom';
import Cart from '../pages/cart';
import { ProductContext } from '../contexts/ProductContext';
import { useContext } from 'react';

function SearchTab() {
    const ContextData = useContext(ProductContext);
    const { cart } = ContextData;

    return (
        <>
            {/* Main container for the search header */}
            <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto h-24 px-4'>
                
                {/* Left side: Logo and Search Bar */}
                <div className='flex items-center'>
                    {/* Zappos Logo with margin left set to 0 */}
                    <Link to="/">
                        {/* Adjusted logo size */}
                        <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="Zappos Logo" className='h-10' /> {/* Adjust size here */}
                    </Link>
                    
                    {/* Search Bar */}
                    <div className='flex items-center border-2 border-gray-300 rounded-full overflow-hidden ml-4' style={{ width: '600px' }}>
                        <IoSearchOutline className='w-5 h-5 mx-3 text-gray-500' />
                        <input 
                            type="text" 
                            placeholder='Search for shoes, clothes...' 
                            className='flex-grow bg-transparent outline-none py-2 text-md text-gray-700'
                        />
                        <Button 
                            title={'SEARCH'} 
                            background={'#003953'} 
                            color={'white'} 
                            height={'100%'} 
                            fontWeight="700" 
                            width="100px" 
                            padding="9px 0" 
                            className="rounded-r-full" // Full border radius
                        />
                    </div>
                </div>

                {/* Right side: My Cart Section */}
                <div className='ml-auto'>
                    <Link 
                        to={'/cart'} 
                        element={<Cart />} 
                        className='flex items-center space-x-2 relative group'
                    >
                        {/* Cart Item Count */}
                        {
                            cart.length > 0 && (
                                <span className='absolute top-[-8px] right-[-8px] bg-green-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                                    {cart.length}
                                </span>
                            )
                        }
                        <IoCartOutline className='w-6 h-6 group-hover:scale-110 transition-transform duration-200' />
                        <span className="font-semibold text-sm">MY CART</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SearchTab;



