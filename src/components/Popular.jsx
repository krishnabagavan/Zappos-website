import Button from './Button';
import { BsHeart } from "react-icons/bs";
import img1 from '../assets/71Q7UD62m8L-_AC_SX380_.jpg';
import img2 from '../assets/51zUfH2NZDL-_AC_SX380_.jpg';
import img3 from '../assets/71phLcbyppL-_AC_SX380_.jpg';
import img4 from '../assets/61eAKrmeINL-_AC_SX380_.jpg';
import img5 from '../assets/71Rc6Sgv4cL-_AC_SX380_.jpg';
import img6 from '../assets/81XUlTnfheL-_AC_SX380_.jpg';
import img7 from '../assets/images/COOP-SUMMER-NEW-BALANCE-TRIPTYCH-1-896x896-_SX1024_.jpg';
import img8 from '../assets/images/COOP-SUMMER-HEY-DUDE-TRIPTYCH-2-896x896-_SX1024_.jpg';
import img9 from '../assets/images/COOP-SUMMER-FAVORITE-STAPLES-TRIPTYCH-3-896x896-_SX1024_.jpg';
import img10 from '../assets/images/new-arrivals-feed.png'
import img11 from '../assets/images/71UkXThsG9L-_AC_SR255-340__FMwebp_.jpg'
import img12 from '../assets/images/71eXzB0mQxL-_AC_SR255-340__FMwebp_.jpg'
import img13 from '../assets/images/81KEyTA20DL-_AC_SR255-340__FMwebp_.jpg'

import img14 from '../assets/images/6075812.jpg'
import img15 from '../assets/images/6075817.jpg'
import img16 from '../assets/images/6075819.webp'
import img17 from '../assets/images/6075818.webp'
import img18 from '../assets/images/6075823.webp'
import img19 from '../assets/images/TORY-BURCH-LAUREN-JUNE-AOE-960x500-_SX1024_.jpg'
import img20 from '../assets/images/WHOLE-FOODS-BANNER-AOE-960x500-_SX1024_.jpg'

import img21 from '../assets/images/71LrLgr2ktL-_AC_SX380_.jpg'
import img22 from '../assets/images/71K93i4OFaL-_AC_SX380_.jpg'
import img23 from '../assets/images/61uByaokarL-_AC_SX380_.jpg'
import img24 from '../assets/images/71iquboszuL-_AC_SX380_.jpg'
import img25 from '../assets/images/61YnXkLyYML-_AC_SX380_.jpg'
import img26 from '../assets/images/71BV8zWcrKL-_AC_SX380_.jpg'

import img27 from '../assets/images/COACH-MAY-TSR-960X500-_SX1024_.jpg'

import img28 from '../assets/images/71ZZBgvpNXL-_AC_SR255-340__FMwebp_.jpg'
import img29 from '../assets/images/61k4CryrRtL._AC_SR255,340__FMwebp_.webp'
import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import img31 from '../assets/images/71mm3hVIXwL-_AC_SR255-340_.jpg'
import img32 from '../assets/images/71zLOzX7HcL-_AC_SR255-340__FMwebp_.jpg'
import img33 from '../assets/images/81mC2R6AGfL-_AC_SR255-340__FMwebp_.jpg'

import img34 from '../assets/images/REEBOK-JUNE-MELODY-GRID-900x1330.jpg'

import img35 from '../assets/images/Zappos_ONE_Retina-_SX650_.png'
import img36 from '../assets/images/Blank_500_x_500-491-_SX650_.jpg'
import img37 from '../assets/images/GGPromo-_SX650_.png'




function Popular() {
    return (
        <>
            <div>
                <div>

                    <h1 className="text-black text-2xl ml-8 mb-7" >Shop Popular Categories</h1>
                    <div className="grid grid-cols-6 gap-4 mx-10 align-middle mb-20">

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img1} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Sneaker & Athletic Shoes</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img2} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Lifestyle Sneakers</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img3} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Heeted Sandals</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img4} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Summer Bags</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img5} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Birkenstock</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img6} alt="" srcSet="" className='w-24 mx-auto mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Vacation-Ready Styles</a>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 mx-8 mb-20'>
                    <div>
                        <img src={img7} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            <h2 className='text-lg font-semibold pb-4 '>Seasonless Sneakers</h2>
                            <p className='text-lg pb-3'>Unlike food, we like our sneakers unseasoned—versatile, perennial goodness.</p>
                            <a href="#" className='text-sm block font-bold w-auto underline  underline-offset-4  mb-2 uppercase'>Discover All-Occasion Sneakers</a>
                        </div>
                    </div>
                    <div>
                        <img src={img8} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            <h2 className='text-lg font-semibold pb-4 '>It’s Comfort Time with Hey Dude</h2>
                            <p className='text-lg pb-3'>Go on, take a dip!...into our most comfy and trendy shoes on the map.</p>
                            <a href="#" className='text-sm block font-bold underline  underline-offset-4 uppercase'>Step Into Loafers & More</a>
                        </div>
                    </div>
                    <div>
                        <img src={img9} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            <h2 className='text-lg font-semibold pb-4 '>Our Favorite Summer Staples Ft. Madewell & More</h2>
                            <p className='text-lg pb-3'>Make your outfit planning easy this season with smart fashion basics.</p>
                            <a href="#" className='text-sm block font-bold underline  underline-offset-4 uppercase'>Shop Women's Must-Haves</a>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-3 mx-5 mb-20'>
                    <div >
                        <img src={img10} alt="new new new" className='h-[385px] w-80' />
                        <h2 className='text-black text-2xl font-semibold'>Shop Merrel New Arrivals</h2>
                    </div>

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img12} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img13} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                                <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex mb-20 w-full '>
                    <div className='flex-1 text-center  p-10 my-auto h-auto'>
                        <h2 className='text-2xl font-semibold mb-2'>Tory Burch: Total Bar-B-Cutie</h2>
                        <p className='text-xl mb-4'>Make a Statement in these hot, get-together-ready handbags.</p>
                        {/* <Button title={"SHOP TORY BURCH"} width={"48%"} color={"black"} outline={"2px solid black"} borderRadius={"3px"} fontSize={"15px"} border={"none"} className="btn_black"/> */}
                        <button className='text-black text-md outline outline-2 rounded-sm uppercase font-bold py-2 px-4 hover:text-white hover:bg-black'>Shop Tory Burch</button>
                    </div>
                    <img src={img19} alt="" className="border flex-1 max-h-[67vh] " />
                </div>

                <div className='flex mb-20 w-full '>
                    <img src={img20} alt="" className="border flex-1 max-h-[67vh] " />
                    <div className='flex-1 text-center  p-10 my-auto h-auto'>
                        <h2 className='text-2xl font-semibold mb-2'>Free, Easy Returns at Whole Foods</h2>
                        <p className='text-xl mb-4'>Something didn't work? No Problem</p>
                        <button className='text-black text-md outline outline-2 rounded-sm uppercase font-bold py-2 px-4 hover:text-white hover:bg-black'>Learn More</button>
                    </div>
                </div>

                <div>

                    <h1 className="text-black text-2xl ml-8 mb-7" >Styles You'll love</h1>
                    <div className="grid grid-cols-6 gap-4 mx-10 align-middle mb-20">

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img21} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Sneaker & Athletic Shoes</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img22} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Lifestyle Sneakers</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img23} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Heeted Sandals</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img24} alt="" srcSet="" className='w-20 mx-auto mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Vacation-Ready Styles</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img25} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Birkenstock</a>
                        </div>

                        <div className="grid grid-rows-1 gap-4">
                            <div className='bg-gray-100 h-60 p-2 flex items-center'>
                                <img src={img26} alt="" srcSet="" className='w-80  mix-blend-multiply' />
                            </div>
                            <a href="#" className='mx-auto hover:text-blue-700 hover:underline'>Summer Bags</a>
                        </div>


                    </div>
                </div>

                <div className='flex mb-20 w-full '>
                    <img src={img27} alt="" className="border flex-1 max-h-[67vh] " />
                    <div className='flex-1 text-start  p-6 my-auto h-auto'>
                        <h1 className='text-4xl font-serif  mb-2 uppercase'>The Style Room</h1>
                        <h2 className='text-2xl font-semibold mb-2 uppercase'>Coach</h2>
                        <p className='text-xl mb-4'>When the bag is just right, it simply takes the wardrobe to a whole new level.</p>
                        {/* <Button title={"SHOP TORY BURCH"} width={"48%"} color={"black"} outline={"2px solid black"} borderRadius={"3px"} fontSize={"15px"} border={"none"} className="btn_black"/> */}
                        <button className='text-black text-sm outline outline-2 rounded-sm uppercase font-bold py-2 px-4 hover:text-white hover:bg-black'>Shop Coach</button>
                    </div>
                </div>

                <div>

                    <h1 className="text-black text-2xl ml-5 mb-7" >Popular Items</h1>
                    <div className='grid grid-cols-6 gap-3 mx-5 mb-20'>

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

                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <img src={img31} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                                    <p className="text-red-800 flex gap-3">$32.95 <small className='text-gray-500 my-auto'>MSRP: $49.95</small></p>
                                    <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <img src={img32} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                                    <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="  text-md ">
                            <div className='bg-gray-100 h-68 p-3 flex items-center relative group'>
                                <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                <img src={img33} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                                    <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-4 mx-8'>
                    <div className='col-span-4 group'>
                        <div className='text-black text-center text-2xl font-semibold mb-4'>
                            <h1 className="my-3 ml-1">Summer Camp, But in Reebok</h1>
                            <button className=' uppercase border-black border-2 px-4 py-2.5 rounded-md text-sm font-semibold group-hover:bg-black group-hover:text-white'>Play All Day In Reebok</button>
                        </div>
                        <div className="">
                            <img src={img34} alt="tennis girl" className='' />
                        </div>
                    </div>
                    <div className='col-span-8 grid grid-cols-4 grid-rows-2 gap-3 mx-5 mb-20'>

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img11} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img12} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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

                    <div className=" relative text-md group">
                        <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                        <div className='bg-gray-100 h-68 p-3 flex items-center'>
                            <img src={img13} alt="" srcSet="" className="w-80 mix-blend-multiply my-auto" />
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
                                <p>⭐⭐⭐⭐⭐<small>(8)</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className='grid grid-cols-3 gap-4 mx-8 mb-20'>
                    <div>
                        <img src={img35} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            <h2 className='text-lg font-semibold pb-4 '>Diversity Equity & Inclusion</h2>
                            <p className='text-lg pb-3'>At Zappos, diversity and Individuality are central to our core values.</p>
                            <a href="#" className='text-sm block font-bold w-auto underline  underline-offset-4  mb-2 uppercase'>Learn More About Zappos One Purpose</a>
                        </div>
                    </div>
                    <div>
                        <img src={img36} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            <h2 className='text-lg font-semibold pb-4 '>Zappos for Good</h2>
                            <p className='text-lg pb-3'>Learn how to easily donate or recycle your secondhand items.</p>
                            <a href="#" className='text-sm block font-bold underline  underline-offset-4 uppercase'>Explore Zappos For Good</a>
                        </div>
                    </div>
                    <div>
                        <img src={img37} alt="guy in green" />
                        <div className='text-black mt-4  '>
                            <h2 className='text-lg font-semibold pb-4 '>Goods for Good</h2>
                            <p className='text-lg pb-3'>We're highlighting brands who are making a difference and helping build a better place for us all.</p>
                            <a href="#" className='text-sm block font-bold underline  underline-offset-4 uppercase'>Shop Goods For Good</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Popular