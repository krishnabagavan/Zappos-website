import { Link } from "react-router-dom"
import Checkout from "../pages/Checkout"
import img30 from '../assets/images/61Z8rLU86QL-_AC_SR255-340__FMwebp_.jpg'
import Button from "./Button"
import { BsHeart, BsBasket3 } from "react-icons/bs"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../contexts/ProductContext";

function CartItems() {
    const contextData = useContext(ProductContext);
    const { cart } = contextData;
    // console.log(cart);
    const [quantity, setQuantity] = useState(1);
    // const [total, setTotal] = useState(0);

    const handleQuantity = (e) => {

        setQuantity(e)
    }

    const total = cart.map(item => item.price).reduce((a, b) => {
        return a + b;
    }, 0)

    const handleRemove = (_id) => {
        console.log(_id);
    }

    useEffect(() => {

    }, [])

    return (
        <>
            {
                cart.length > 0 ? (
                    <div>
                        <div>
                            <h1 className="capitalize text-3xl mx-3 mb-4">1 item in My Cart</h1>
                        </div>
                        <div className="grid grid-cols-12 gap-4 mx-3 mb-2">
                            <div className='col-span-8 border-1 border-gray-300 '>
                                <div className="flex justify-between bg-blue-custom text-white px-4 py-2">
                                    <p>Item</p>
                                    <p>Price/Quantity</p>
                                </div>
                                {
                                    cart.map((cartItem) => (
                                        <div className="flex justify-between pr-6 border-b-2 h-48" key={cartItem._id}>
                                            <div className="flex p-3">
                                                <div className='bg-gray-100 h-68 p-3 mx-3 flex items-center relative group'>
                                                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-sm text-black my-auto group-hover:animate-bounce" /></span>
                                                    <img src={cartItem.image} alt="cart item" className="w-28 mix-blend-multiply my-auto" />
                                                </div>
                                                <div>
                                                    <p className="text-blue-custom">{cartItem.name}</p>
                                                    <p className="capitalize text-sm font-semibold mb-2 hover:text-sky-600 hover:underline">{cartItem.description}</p>
                                                    <p > Color: <span>Dark Navy</span></p>
                                                    <p >Size: <span>XL (Reg)</span></p>
                                                </div>
                                            </div>
                                            <div className="text-center pt-4">
                                                <p className="text-blue-custom font-bold mb-2">${cartItem.price}</p>
                                                {/* <input type="num" value={cartItem.quantity}/> */}
                                                <select name="quantity" value={quantity} onChange={(e) => { handleQuantity(e.target.value) }} className="p-2 ml-8 border-1 border-gray-300 tracking-tighter outline-2 focus:outline-dashed rounded-md outline-offset-1 focus:outline-sky-600">
                                                    <option value="0" onClick={() => handleRemove(cartItem._id)}>Remove</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <Button title={"Remove"} color={"#003953"} textDecoration={"underline"} className="text-blue-custom " />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='col-span-4'>
                                <div className='col-span-4 bg-gray-100 border-1 border-gray-300 p-3'>

                                    <Link to={'/checkout'} element={<Checkout />} className=''>
                                        <p className='uppercase mx-auto text-blue-custom' >Proceed to Checkout</p>
                                        <button className='   w-full flex my-auto  rounded py-3 mb-2 bg-green font-semibold text-sm border-1  disabled:bg-gray-100/75 hover:brightness-110 '>
                                            <p className='capitalize  text-blue-custom mx-auto ' >Proceed to Checkout</p>
                                        </button>
                                    </Link>

                                    <small className="">Have a Promotional Code? Proceed to checkout to redeem it.</small>

                                    <h2 className="my-3 text-xl fonr-semibold">Cart Summary (1 item)</h2>

                                    <div className="flex justify-between text-md font-semibold text-gray-700"><p>Subtotal (1 item)</p> <p>${total}</p></div>
                                </div>
                                <div className="text-gray-600 mt-1 mb-3 leading-4">
                                    <small className=" ">Zappos.com LLC is required by law to collect <a href="#" className="text-md text-sky-900 underline hover:text-sky-500">sales tax</a> on orders shipped to specific states. Appropriate charges will be added to your merchandise total and displayed for your review at checkout.
                                    </small>
                                </div>
                                <div className="text-gray-600">
                                    <small>
                                        Unless otherwise noted, all products are sold by Zappos.com LLC.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='col-span-8 border-1 border-gray-300 mb-5'>
                        <div className="flex justify-between bg-blue-custom text-white px-4 py-2">
                            <p>Item</p>
                            <p>Price/Quantity</p>
                        </div>
                        <div className=" text-center pr-6 h-60 mb-5 ">
                            <div className="my-auto pt-16">
                                <BsBasket3 className="mx-auto text-4xl font-semibold mb-4" />
                                <p className="text-2xl font-semibold">Add an Item to Cart to see them here</p>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}
export default CartItems