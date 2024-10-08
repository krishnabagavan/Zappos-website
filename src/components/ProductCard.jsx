import { BsHeart } from "react-icons/bs"
import img14 from '../assets/images/6075812.jpg'
import img15 from '../assets/images/6075817.jpg'
import img16 from '../assets/images/6075819.webp'
import img17 from '../assets/images/6075818.webp'
import img18 from '../assets/images/6075823.webp'


function ProductCard(props) {
    return (
        <>
            <div className="  text-md ">
                <div className='bg-gray-100 h-80 p-3 flex items-center relative group'>
                    <span className="bg-white absolute right-0 top-0 px-2 py-0.5 rounded-bl-lg flex gap-2 group"><BsHeart className="text-black my-auto group-hover:animate-bounce" /> {props.__v}</span>
                    <span className="bg-orange-700 text-white absolute left-0 top-0 px-2 py-0.5 rounded-br-lg flex gap-2 group">Best Seller</span>
                    <img src={props.image} alt="product" className="w-80 mix-blend-multiply my-auto" />
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
                        <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>{props.description}</small>
                        <p className="text-green-800">${props.price}</p>
                        <p>⭐⭐⭐⭐⭐<small><span>  (</span>{props.quantity}<span>)</span></small></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard