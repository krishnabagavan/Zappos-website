import img1 from '../assets/black-logo.svg';
import img2 from '../assets/vrsnl-logo-_CB1564076501_.svg'

function AltShops() {
    return (
        <>
            <div className='flex h-8'>

                <div className='bg-sky-600 hover:bg-sky-500 px-9 border-t-2 border-blue-900'>
                    <img src={img1} alt="zappos" srcSet="" className='h-4 inline align-middle text-white '/>
                </div>
                <div  className='px-9 my-auto border-r-2 h-full pt-1'>
                <img src={img2} alt="vrsnl" srcSet="" className='h-2.5 inline align-middle'/>
                </div>
            </div>
        </>
    )
}
export default AltShops