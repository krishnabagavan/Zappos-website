import img from '../assets/images/COOP-SUMMER-ELEVATE-YOUR-STYLE-HERO-STANDARD-1440x700.gif';

function Banner() {
    return(
        <>
            <div className="relative h-[90vh] bg-no-repeat w-full max-w-full bg-right bg-contain object-contain mb-8"  style={{background: `url("https://p.itc.zappos/prod/?w=1440&h=-1&url=https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/FALL-CAMPAIGN-HTT-HERO-STANDARD-1440x600_1.gif"
    )`, backgroundSize: '', backgroundRepeat: 'no-repeat'}}>
                <div className='bg-white w-88 absolute border-3 right-12 top-80 mt-10 px-6 py-2 h-64'>
                    <h2 className='text-2xl font-semibold pb-4 '>Stylize your Summer in Dolce Vita & More</h2>
                    <p className='text-lg pb-6'>No running, only sunning in these elevated footwear favorites</p>
                    <a href="#" className='text-sm block font-bold border-b-1 border-black w-48 mb-2'>SHOP FASHION FOOTWEAR</a>
                    <a href="#" className='text-sm block font-bold border-b-1 border-black w-28'>SHOP THE LOOK</a>
                </div>
            </div>
        </>
    )
}
export default Banner