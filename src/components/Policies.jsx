import { BsArrowLeftShort } from "react-icons/bs";
import img1 from '../assets/images/free-shipping.svg'
import img2 from '../assets/images/privacy-policy.svg'

function Policies() {
    return (
        <>
            <div className="flex ml-1">
                <BsArrowLeftShort className="my-auto text-xl"/>
                <p className="text-blue-custom hover:text-sky-600 uppercase font-bold text-sm text-blue-custom underline underline-offset-4 ">Continue Shopping</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mx-5 mt-2 mb-12">
                <div className="col-span-1 bg-gray-100 px-4 py-2 flex gap-4">
                    <img src={img1} alt="free shipping" className="h-9"/>
                    <div>
                        <p>Free Shipping and Returns</p>
                        <small>365 days to return items for a refund!</small>
                        <p className="text-blue-custom hover:text-sky-600 uppercase underline underline-offset-4  font-bold text-sm text-blue-custom pt-2">Shipping and Return Policy</p>
                    </div>
                </div>
                <div className="col-span-1 bg-gray-100 px-4 py-2 flex gap-4 h-auto">
                    <img src={img2} alt="privacy-policy" className="h-9"/>
                    <div>
                        <p>Privacy policy</p>
                        <small>We don't rent or sell your personal information to anyone</small>
                        <p className="text-blue-custom hover:text-sky-600 uppercase underline underline-offset-4  font-bold text-sm text-blue-custom pt-2">Shipping and Return Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Policies