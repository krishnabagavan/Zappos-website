import img1 from '../assets/71Q7UD62m8L-_AC_SX380_.jpg';
import img2 from '../assets/51zUfH2NZDL-_AC_SX380_.jpg';
import img3 from '../assets/71phLcbyppL-_AC_SX380_.jpg';
import img4 from '../assets/61eAKrmeINL-_AC_SX380_.jpg';
import img5 from '../assets/71Rc6Sgv4cL-_AC_SX380_.jpg';
import img6 from '../assets/81XUlTnfheL-_AC_SX380_.jpg';
import DummyShopItems from './DummyShopItems';

function CustomersViewed() {
    return (
        <>
            <div>

                <h1 className="text-black text-xl ml-4 mb-3" >Customers Who Bought Items In Your Shopping Cart Also Bought</h1>
                <div className="grid grid-cols-6 gap-4 mx-4 align-middle mb-10">

                    <div className="grid grid-rows-1 text-left">
                        <div className='bg-gray-100 h-60 p-2 flex items-center'>
                            <img src={img1} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Sneaker</a>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Sneaker & Athletic Shoes</a>
                    </div>

                    <div className="grid grid-rows-1  ">
                        <div className='bg-gray-100 h-60 p-2 flex items-center'>
                            <img src={img2} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                        </div>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Lifestyle</a>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Lifestyle Sneakers</a>
                    </div>

                    <div className="grid grid-rows-1  ">
                        <div className='bg-gray-100 h-60 p-2 flex items-center'>
                            <img src={img3} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                        </div>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Heeted</a>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Heeted Sandals</a>
                    </div>

                    <div className="grid grid-rows-1  ">
                        <div className='bg-gray-100 h-60 p-2 flex items-center'>
                            <img src={img4} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                        </div>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Summer</a>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Summer Bags</a>
                    </div>

                    <div className="grid grid-rows-1  ">
                        <div className='bg-gray-100 h-60 p-2 flex items-center'>
                            <img src={img5} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                        </div>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Birkenstock</a>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Birkenstock</a>
                    </div>

                    <div className="grid grid-rows-1 ">
                        <div className='bg-gray-100 h-60 p-2 flex items-center'>
                            <img src={img6} alt="" srcSet="" className='w-24 mx-auto mix-blend-multiply' />
                        </div>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Vacation</a>
                        <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Vacation-Ready Styles</a>
                    </div>
                    <DummyShopItems />

                </div>
            </div>
        </>
    )
}
export default CustomersViewed