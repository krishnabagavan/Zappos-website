import img14 from '../assets/images/6075812.jpg'
import img15 from '../assets/images/6075817.jpg'
import img16 from '../assets/images/6075819.webp'
import img17 from '../assets/images/6075818.webp'
import img18 from '../assets/images/6075823.webp'
import img28 from '../assets/images/71ZZBgvpNXL-_AC_SR255-340__FMwebp_.jpg'
import img29 from '../assets/images/61k4CryrRtL._AC_SR255,340__FMwebp_.webp'
import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import { BsHeart } from "react-icons/bs";

function RecentlyViewed() {
    return (
        <>
            <div>

                <h1 className="text-black text-2xl ml-10 mb-7" >Your Recently Viewed Items</h1>
                <div className='grid grid-cols-6 gap-3 mx-10 mb-20'>

                    <div className="  text-md ">
                        <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                            <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                            <img src={img28} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1 hover:animate-spin" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1 hover:animate-spin" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                <p className="text-green-800">$124.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                            </div>
                        </div>
                    </div>

                    <div className="  text-md ">
                        <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                            <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                            <img src={img29} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                <p className="text-green-800">$124.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>

                    <div className="  text-md ">
                        <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                            <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                            <span className="bg-orange-700 text-white absolute left-0 top-0 px-2 py-0.5 rounded-br-lg flex gap-2 group">Best Seller</span>
                            <img src={img30} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                        </div>
                        <div className='mt-4 group'>
                            <div className="flex justify-start gap-2">
                                <img src={img14} alt="" className="rounded-full border-black border-1" />
                                <img src={img15} alt="" className="rounded-full border-black border-1" />
                                <img src={img16} alt="" className="rounded-full border-black border-1" />
                                <img src={img17} alt="" className="rounded-full border-black border-1" />
                                <img src={img18} alt="" className="rounded-full border-black border-1" />
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>Merrell</h3>
                                <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>Antora 3</small>
                                <p className="text-green-800">$124.95</p>
                                <p>⭐⭐⭐⭐⭐<small>(14)</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default RecentlyViewed