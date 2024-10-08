import { Link } from "react-router-dom"
import img2 from '../assets/images/single-product-img2.jpg'
import img3 from '../assets/images/single-product-img3.jpg'
import img4 from '../assets/images/single-product-img4.jpg'
import img5 from '../assets/images/single-product-img5.jpg'
import img6 from '../assets/images/single-product-img6.jpg'
import img7 from '../assets/images/ugg_header_092116.jpg'
import img8 from '../assets/images/amazon-prime.2821774c351a0e9079f230ad4b312a71.svg'
import img9 from '../assets/images/Afterpay-Logo.png'
import img10 from '../assets/images/black-color.jpg'
import img11 from '../assets/images/81CP41Rx9jL.AC_SS144.jpg'
import img12 from '../assets/images/61Bws+hoDCL.AC_SS144.jpg'
import img13 from '../assets/images/71GSLsM4hvL.AC_SS144.jpg'
import img14 from '../assets/images/coral-color.jpg'
import { BsFillCaretUpFill, BsHeart, BsBoxArrowUp, BsBoxSeam, BsExclamationCircle } from "react-icons/bs";
import { Disclosure } from '@headlessui/react'

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import axios from "axios";

function SingleProductInfo() {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const contextData = useContext(ProductContext);
    const { cart, setCart } = contextData;

    const getProduct = async () => {
        try {
            let response = await axios.get(`http://159.65.21.42:9000/product/${id}`);
            const data = response.data;
            console.log(data);
            setProduct(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line
    }, [id]);

    const ratingstar = (num) => "⭐".repeat(num);
    // console.log(ratingstar(product.rate));

    const handleCart = (product) => {
        const currentCart = [...cart];
        console.log(currentCart);
        const ItemExist = currentCart.find((item) => item._id === product._id);
        console.log(ItemExist);
        if (ItemExist) {
            alert("You already have this in your cart");
            return;
        }
        const newItem = { ...product, quantity: 1};
        currentCart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(currentCart));
        setCart(currentCart);
    };


    return (
        <>
            <div>

                <div className=" my-12 flex justify-center">
                    <div className="flex gap-5 ml-7">
                        <div className=" ">
                            <div className="  text-md ">
                                <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> 98</span>
                                    <span className="bg-orange-700 text-white absolute left-0 top-0 px-2 py-0.5 rounded-br-lg">Best Seller</span>
                                    <img src={product.image} alt="product info" className=" mix-blend-multiply" />
                                </div>
                                <div className="flex gap-2 mt-2">

                                    <div className=' bg-gray-100  p-5  flex items-center h-[80vh] relative'>
                                        <img src={img2} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                    <div className=' bg-gray-100  p-5 flex items-center h-[80vh] relative'>
                                        <img src={img3} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2">

                                    <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                        <img src={img4} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                    <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                        <img src={img5} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2 w-[50%]">
                                    <div className=' bg-gray-100  p-5 flex items-center h-[95vh] relative'>
                                        <img src={img6} alt="product info" className=" mix-blend-multiply" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div >

                            <div className="sticky top-0 mr-7 ">
                                <div className=" w-[430px]   rounded-md  mb-4">
                                    <div className=" my-6 relative">

                                        <div className="flex  gap-3">
                                            <h2 className=" my-3 text-3xl font-bold">{product.name} </h2>
                                            <BsBoxArrowUp className="text-md my-auto font-bold" />
                                        </div>

                                        <div className="flex justify-between text-xl font-semibold text-gray-900"><p>{product.description}</p></div>

                                        <div className="flex justify-between text-gray-600 text-sm"><p>SKU 7138704</p></div>

                                        <div className="flex justify-between text-green-900 relative ">
                                            <h1 className="text-4xl   ">${product.price}</h1>
                                            {/* <span className="absolute font-lg top-0 left-20"> 99</span> */}
                                        </div>

                                        <div className="flex gap-1 text-gray-700 text-sm">
                                            <p>or 4 interest-free payments of $29.99 with </p>
                                            <img src={img9} alt="afterpay logo" className="w-20" />
                                        </div>

                                        <div className="flex  gap-4 my-auto  font-semibold mt-4  ">
                                            <div className=" bg-sky-700 text-white py-1 px-2">
                                                <p className="uppercase flex gap-2 text-sm"><BsBoxSeam className="w-3 my-auto " /> Ships Free</p>
                                            </div>
                                            <div className="text-sky-900 flex gap-1">
                                                ⭐⭐⭐⭐⭐ <p className="text-sm font-semibold my-auto"> (6,507)</p>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <p>Color: <span>Chestnut</span></p>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <div className=' bg-gray-100 flex items-center h-20 w-40'>
                                                <img src={img10} alt="product info" className=" mix-blend-multiply" />
                                            </div>
                                            <div className=' bg-gray-100  flex items-center h-20 w-40'>
                                                <img src={img11} alt="product info" className=" mix-blend-multiply" />
                                            </div>
                                            <div className=' bg-gray-100  flex items-center h-20 w-40'>
                                                <img src={img12} alt="product info" className=" mix-blend-multiply" />
                                            </div>
                                            <div className=' bg-gray-100  flex items-center h-20 w-40'>
                                                <img src={img13} alt="product info" className=" mix-blend-multiply" />
                                            </div>
                                            <div className=' bg-gray-100  flex items-center h-20 w-40'>
                                                <img src={img14} alt="product info" className=" mix-blend-multiply" />
                                            </div>
                                        </div>
                                        <div>
                                            <small>This fits true to <b>size</b></small>
                                        </div>

                                        <div>
                                            <p className="font-bold mb-3">Women's sizes:</p>
                                            <div className="grid grid-cols-7 gap-1 bg-white">
                                                <div className=' bg-gray-100 flex items-center h-12 w-14 '>
                                                    <p className=" mx-auto">5</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">6</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">7</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">8</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">9</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">10</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">11</p>
                                                </div>
                                                <div className=' bg-gray-100  flex items-center h-12 w-14'>
                                                    <p className=" mx-auto">12</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-3 flex gap-2 text-md text-sky-900 hover:underline hover:underline-offset-4">
                                            <BsExclamationCircle className="w-3 my-auto" />
                                            Calculate your size
                                        </div>
                                        <div className="font-bold">
                                            <p className="mb-3">Width Options:</p>
                                            <button className="bg-gray-50 border-2 border-sky-600 focus:outline-dashed px-8 py-2 focus:outline-sky-600 font-normal">
                                                B - Medium
                                            </button>
                                        </div>

                                        <div>
                                            <span>{ }</span>
                                        </div>


                                    </div>
                                </div>

                                <div className="sticky bottom-3 bg-white py-3">
                                    {/* <Link to={'/checkout'}> */}
                                        <button className='   w-full flex my-auto  rounded py-3 mb-2 bg-green font-semibold text-sm border-1  disabled:bg-gray-100/75 hover:brightness-110 ' onClick={() => handleCart(product)}>
                                            <p className='capitalize  text-blue-custom mx-auto ' >Add to Cart</p>
                                        </button>
                                    {/* </Link> */}
                                </div>

                                <div className="my-7 text-center">
                                    <div>
                                        <small className=""><b>Free</b> upgraded shipping & returns with</small>
                                    </div>
                                    <img src={img8} alt="amazon prime" className="w-20 mt-1 block mx-auto" />
                                </div>
                                <div className="w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200 mb-4">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100/75 p-2 ">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                                        <h3 className="capitalize text-lg">Size Chart</h3>
                                                        <BsFillCaretUpFill
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-3 text-gray-500 `}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        <div className="flex">
                                                            <ol className="list-disc text-lg pl-5">
                                                                <li>UGG Women's Size Chart
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>

                                    </div>
                                </div>
                                <div className="w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100/75 p-2 text-black">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                                        <div className="w-full my-auto flex justify-between">
                                                            <h3 className="text-lg capitalize">Product Information</h3>
                                                            <BsFillCaretUpFill
                                                                className={`${open ? 'rotate-180 transform' : ''
                                                                    } h-5 w-3 text-gray-500 `}
                                                            />
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm h-96 text-clip overflow-hidden ">
                                                        <div>
                                                            <img src={img7} alt="UGG" className="mix-blend-multiply w-40 mb-4 ml-0" />
                                                        </div>
                                                        <div>
                                                            <ol className="list-disc text-lg pl-5">
                                                                <li>This shoe runs big and is available in whole sizes only. Order one size down than usual and if between sizes, order 1 1/2 sizes down from your usual size (for example, if you wear a size 9 1/2, order a size 8).</li>
                                                                <li>The Coquette embraces the essence of a slipper with the radiant style UGG® is known for.</li>
                                                                <li>Signature Twinface upper with a sheepskin cuff for a cute can cozy wear.</li>
                                                                <li>UGG® signature Twinface sheepskin is treated on both sides to provide maximum softness and comfort.</li>
                                                                <li>Polyester binding.</li>
                                                                <li>Genuine 17mm sheepskin sockliner wicks moisture away and allows air to circulate, keeping feet dry.</li>
                                                                <li>Treadlite by UGG® outsole delivers traction control.</li>
                                                                <li>Fit should be snug, but not uncomfortable. Footwear will give a little as fleece footbeds form to each individual's foot.</li>
                                                                <li>Please Note: Slight dye transfer may occur with darker colored sheepskin during first few wears.</li>
                                                                <li>Care and Cleaning Instructions</li>
                                                                <li>This product contains real fur from sheep or lamb.
                                                                    Fur Origin: Australia, European Union or United States.
                                                                    Real fur has been artificially dyed and treated.</li>
                                                                <li>Imported</li>
                                                                <li>Product measurements were taken using size 7, width B - Medium. Please note that measurements may vary by size</li>
                                                                <li>Measurements:
                                                                    <ol className="list-disc pl-6">
                                                                        <li>weight: 7 oz</li>
                                                                    </ol>
                                                                </li>
                                                            </ol>
                                                            <div>
                                                                <p className="capitalize"><a href="#">View Zappos.com Glossary of Terms</a></p>
                                                                <small>Find something wrong in this description? Help us to fix it! <a href="#" className="text-sky-800 ">Report An Error</a></small>
                                                            </div>
                                                        </div>

                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProductInfo