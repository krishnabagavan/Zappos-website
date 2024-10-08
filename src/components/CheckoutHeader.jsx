import { Link } from 'react-router-dom';
import img1 from '../assets/zapposPBS-_CB1509642213_.svg';
import { IoLockClosedSharp } from 'react-icons/io5';

function CheckoutHeader() {
    return (
        <>
            <div className='flex  h-24 pr-8 text-md  justify-between shadow-md'>

                <div className='px-6 py-2 my-auto mr-0.5 flex gap-8'>
                    <Link to={'/'}><img src={img1} alt="zappos" className='h-12 inline align-middle text-white ' /></Link>
                    <h1 className='text-3xl  text-gray-800 my-auto'>Checkout</h1>
                </div>
                <div className='my-auto'>
                    <IoLockClosedSharp className='mr-auto text-3xl text-gray-400' />
                </div>
            </div>

        </>
    )
}
export default CheckoutHeader