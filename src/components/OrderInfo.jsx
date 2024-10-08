import { Link } from "react-router-dom"
import img1 from '../assets/images/amazon-pay-logo.svg';
import img2 from '../assets/images/paypal-logo.svg';
import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import { BsChevronDoubleRight, BsFillCaretUpFill, BsBox2Heart, BsHeart, BsFillHeartFill } from "react-icons/bs";
import { Disclosure } from '@headlessui/react'

function OrderInfo() {
    const alertOrder = () => {
        alert("Order Placed! Have a nice day.");
        
    }

    return (

        <>
            <div>

                <div className=" my-12 flex justify-center">
                    <div className="flex gap-5 mx-20">
                        <div className="  pt-8 px-2">
                            <h1 className="font-semibold text-2xl">Express Checkout</h1>
                            <p className="capitalize mb-6">now offering amazon pay! save time by checking out your saved address and payment method from your amazon account</p>

                            <div className="px-4 py-3 mt-4 rounded-md border-1 border-gray-300 mr-60 flex gap-3">
                                <div className="text-center ">
                                    <div className="flex rounded-md w-52 border-black border-1 py-1.5 my-auto bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] hover:brightness-95">
                                        <img src={img1} alt="amazon pay" className="w-24 pl-6 my-auto mx-auto" />
                                        <BsChevronDoubleRight className=" mx-auto " />
                                    </div>
                                    <small className="text-xs uppercase font-bold">use your amazon account</small>
                                </div>
                                <div className="text-center w-48 hover:brightness-95">
                                    <div className="text-center rounded-md my-auto bg-[#ffc439] px-2 py-1">
                                        <img src={img2} alt="paypal" className="my-auto mx-auto w-20" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative border-1 border-gray-400 mt-8"><p className="absolute top-[-13px] left-[47%] bg-white px-5 ">OR</p></div>


                            <div className="mt-5">
                                <h1 className="font-semibold text-2xl mb-5">1. Shipping Address</h1>
                                <div className="border-1 border-gray-200 py-5 px-3">
                                    <div className=" w-full border-b-1">
                                        <h3 className="text-lg font-semibold mb-1 ">Add a new shipping Address</h3>
                                    </div>
                                    <div className="mt-2 ml-1">
                                        <label className="w-full">Country <span className="text-red-700">*</span></label>
                                        <select className="w-full block my-2 rounded-md py-2 pl-3 border-2 border-gray-300 outline-none">
                                            <option value="united states">United States</option>
                                            <option value="nigeria">Nigeria</option>
                                            <option value="puerto rico">Puerto Rico</option>
                                            <option value="Palau">Palau</option>
                                        </select>
                                    </div>
                                    <div className="mt-2 ml-1">
                                        <label >Full Name <span className="text-red-700">*</span></label>
                                        <input type="text" placeholder="First and last name" className="w-full block my-2 rounded-md py-2 pl-3 border-2 border-gray-300 outline-none" />
                                    </div>
                                    <div className="mt-2 ml-1">
                                        <label >Address Line 1 <span className="text-red-700">*</span></label>
                                        <input type="text" placeholder="Street address, company name, c/o" className="w-full block my-2 rounded-md py-2 pl-3 border-2 border-gray-300 outline-none" />
                                    </div>
                                    <div className="mt-2 ml-1">
                                        <label >Address Line 2</label>
                                        <input type="text" placeholder="Apartment, suite, unit, building, floor, etc." className="w-full block my-2 rounded-md py-2 pl-3 border-2 border-gray-300 outline-none" />
                                    </div>
                                    <div className="flex gap-3 mt-2 ml-1">
                                        <div>
                                            <label >City <span className="text-red-700">*</span></label>
                                            <input type="text" placeholder="eg. Abuja" className="block my-2 rounded-md w-44 py-2 pl-3 border-2 border-gray-300" />
                                        </div>
                                        <div>
                                            <label >State <span className="text-red-700">*</span></label>
                                            <input type="text" placeholder="eg. FCT" className="block my-2 rounded-md w-44 py-2 pl-3 border-2 border-gray-300" />
                                        </div>
                                        <div>
                                            <label >Zip <span className="text-red-700">*</span></label>
                                            <input type="text" placeholder="eg. 900801" className="block my-2 rounded-md w-44 py-2 pl-3 border-2 border-gray-300" />
                                        </div>
                                    </div>
                                    <div className="mt-2 ml-1">
                                        <label >Phone Number <span className="text-red-700">*</span></label>
                                        <input type="number" placeholder="Including area code" className="block my-2 rounded-md w-44 py-2 pl-3 border-2 border-gray-300" />
                                    </div>
                                    <div className="flex gap-2 mt-3 ml-1">
                                        <input type="checkbox" className="w-5" />
                                        <p>Use address for billing</p>
                                    </div>
                                    <button className="uppercase text-white bg-blue-custom font-bold text-sm px-6 py-3 rounded-md mt-4 ">ship to this address</button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h1 className="font-semibold text-2xl mb-5">2. Payment Method</h1>
                                <div className="border-1 border-gray-200 py-5 px-3">
                                    <small>Please add or select a shipping address to proceed</small>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h1 className="font-semibold text-2xl mb-5">3. Item Review and Shipping</h1>
                                <div className="border-1 py-5 px-2 flex justify-between ">
                                    <div className="text-center ">
                                        <div className="group relative  mx-6">
                                            <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-sm text-black my-auto group-hover:animate-bounce" /></span>
                                            <img src={img30} alt="cart item" className="w-20 my-auto mx-auto" />
                                        </div>
                                        <select name="quantity" className="p-2 px-8 border-1 border-gray-300 tracking-tighter outline-2 focus:outline-dashed rounded-md outline-offset-1 focus:outline-sky-600">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div className="pr-8">
                                        <p className="text-blue-custom">Carhartt</p>
                                        <p className="capitalize text-sm font-semibold mb-2 ">Flame-resistant (FR) Force Cotton long sleeve t-shirt</p>
                                        <p > Color: <span>Dark Navy</span></p>
                                        <p >Size: <span>XL (Reg)</span></p>
                                        <p className="text-green-900 font-bold mb-2 text-sm mt-4">$74.99</p>
                                        <div className="font-bold text-blue-custom pt-2 flex gap-2">
                                            <button className="flex px-2 border-2 border-sky-900 rounded-md hover:bg-sky-900 hover:text-white group">Move to <BsFillHeartFill className="my-auto ml-1 text-sm text-gray-300 group-hover:text-red-500" /></button>
                                            <button className="px-2 border-2 border-sky-900 rounded-md hover:bg-sky-900 hover:text-white">Remove</button>
                                        </div>
                                    </div>

                                    <div className="text-center w-80">
                                        <div className="border-1 border-gray-300 p-4">
                                            <p className="text-sm text-gray-700">Please add or select a shipping address to view delivery options.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="">

                                    <h1 className="font-semibold text-xl mb-5 mt-3">Order total: $74.99</h1>

                                    <small>By placing your order, you agree to zappos.com’s <a href="#">privacy notice</a> and <a href="#">conditions of use</a>. *<a href="#">Important information about sales tax you may owe in your state</a>.</small>
                                    <button className="block w-full uppercase text-white bg-blue-custom font-bold text-sm px-6 py-3 rounded-md mt-4 disabled:text-gray-500 hover:brightness-125 disabled:bg-gray-400 disabled:border-gray-500">ship to this address</button>

                                </div>
                            </div>
                        </div>

                        <div >

                            <div className="sticky top-0">
                                <div className=" w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200 mb-4">
                                    <div className="mx-4 my-6">

                                        <button className='w-full flex my-auto  rounded py-2.5 mb-2 bg-green font-semibold text-sm border-1 border-gray-200 disabled:bg-gray-100/75 hover:brightness-110 ' onClick={alertOrder}>
                                            <p className='uppercase  text-blue-custom mx-auto'>Place your Order</p>
                                        </button>

                                        <small className="">By placing your order, you agree to zappos.com’s privacy notice and conditions of use.</small>

                                        <h2 className="my-3 text-xl font-semibold">Order Summary (1 item)</h2>

                                        <div className="flex justify-between text-md font-semibold text-gray-700"><p>Subtotal (1 item)</p> <p>$74.99</p></div>

                                        <div className="flex justify-between text-gray-600"><p>Shipping</p> <p>Free</p></div>

                                        <div className="flex justify-between text-gray-700"><p>Discounts: </p> <p className="text-right">Auto-applied discounts will appear here once a shipping address is entered</p></div>

                                        <div className="flex justify-between text-gray-700"><p>Total before tax:</p> <p>$74.99</p></div>
                                        <div className="flex justify-between text-gray-700"><p>Estimated tax to be collected:* </p> <p>$0.00</p></div>

                                        <div className="flex justify-between text-xl font-semibold mt-4 border-t-1 pt-4"><p>Order Total</p> <p>$74.99</p></div>


                                    </div>
                                </div>
                                <div className="w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200 mb-4">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100/75 p-2 ">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                                        <h2 className="capitalize">Apply gift card or promo code</h2>
                                                        <BsFillCaretUpFill
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-3 text-gray-500 `}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        <div className="flex h-10">
                                                            <input type="number" placeholder="Enter Code" className="text-gray-700 mr-4 pl-3 w-48 border-2 border-gray-300" />
                                                            <button className='w-36 my-auto  rounded py-2.5 mb-2 bg-green font-semibold text-md border-2 border-gray-300 disabled:bg-gray-100/75 hover:brightness-110 '>
                                                                <p className='uppercase  text-blue-custom mx-auto'>Apply</p>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <p className="text-sky-600 mt-3"><span className="text-white px-2  rounded-full bg-sky-600"> i</span> Add or select a shipping address before applying the codes</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>

                                    </div>
                                </div>
                                <div className="w-[410px]  bg-gray-100/75 rounded-md border-1 border-gray-200">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100/75 p-2 ">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ">
                                                        <div className="flex">
                                                            <div className="my-auto">
                                                                <BsBox2Heart className=" text-gray-700 text-4xl my-auto mr-2" />
                                                            </div>
                                                            <div className="my-auto leading-tight">
                                                                <h3 className="text-xl text-gray-700 ">Add a FREE GIft Message</h3>
                                                                <small className="font-normal text-gray-700">Includes a FREE Gift Receipt</small>
                                                            </div>
                                                        </div>
                                                        <BsFillCaretUpFill
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-3 text-gray-500 `}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
                                                        <div>
                                                            <p>A Gift From:</p>
                                                        </div>
                                                        <div>
                                                            <b>Kingsley Owolabi</b>
                                                        </div>
                                                        <div className="flex justify-between mt-3 mb-2">
                                                            <p>Add Gift Message:</p>
                                                            <p>240 character • 9 lines</p>
                                                        </div>
                                                        <div>
                                                            <textarea rows="5" className="w-full my-1"></textarea>
                                                        </div>
                                                        <button className='w-full flex my-auto  rounded py-2.5 mb-2 bg-green font-semibold text-sm border-1 border-gray-200 disabled:bg-gray-100/75 hover:brightness-110 '>
                                                            <p className='uppercase  text-blue-custom mx-auto'>Place your Order</p>
                                                        </button>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>

                                    </div>
                                </div>
                                <div className="flex gap-2 mt-7">
                                    <small>Is your checkout experience easy?</small> <button className="underline underline-offset-2 text-sm text-sky-900 font-bold">YES</button> <button className="underline underline-offset-2 text-sm text-sky-900 font-bold">NO</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default OrderInfo