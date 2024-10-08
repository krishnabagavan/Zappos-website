import { BsEnvelopeOpen, BsChatDots, BsYoutube, BsPinterest, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer_1() {
    return (
        <>
         <div className='grid grid-cols-12 bg-rose-300 text-white h-36 '>
                <div className="col-span-6 bg-inherit mx-8 ">
                    <h3 className="mt-4 text-xl ">Make Zappos (Emails) Your New BFF!</h3>
                    <div className="flex gap-4 mx-auto my-4">
                        <div className="">
                            <label htmlFor="email" >Email</label><br />
                            <input type="email" name="email" placeholder='Email Address' className="text-gray-400 rounded-md px-4 h-10 my-auto" />
                        </div>
                        <button className="group flex gap-2 uppercase focus:outline-2 focus:outline-dashed px-5 py-2 mt-5 my-auto rounded-md border-2 hover:bg-white hover:text-black "> <BsEnvelopeOpen className="text-white group-hover:text-black my-auto" /> Subscribe to Zappos Emails</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 px-8 bg-alt-white text-black text-left gap-18 py-3 text-sm">
                <div>
                    <h4 className="text-lg font-semibold mb-2">Explore Zappos</h4>
                    <ul className="leading-7">
                        <li> Brands </li>
                        <li>Clothing </li>
                        <li>The Style Room</li>
                        <li>Eyewear</li>
                        <li>New Arrivals</li>
                        <li>Running</li>
                        <li>Jackets</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                        <li>Zappos Adaptive</li>
                        <li>All Department</li>
                    </ul>
                </div>
                <div>
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
                        <ul className="leading-7">
                            <li>FAQs</li>
                            <li>Contact Info</li>
                            <li>¿Ayuda en español?</li>
                            <li>Shipping And Returns Policy</li>
                            <li>About Proposition 65</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-2">Fit Info</h4>
                        <ul className="leading-7">
                            <li>Measurement Guide</li>
                            <li>Size Conversion Chart</li>
                            <li>Measure Your Bra Size</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-2">About Zappos</h4>
                        <ul className="leading-7">
                            <li>About</li>
                            <li>Zappos ONE</li>
                            <li>Zappos for Good</li>
                            <li>Zappos at Work</li>
                            <li>Get the Zappos Mobile App</li>
                            <li>Amazon Prime Benefits</li>
                            <li>Zappos VIP Benefits</li>
                            <li>Powered by Zappos</li>
                            <li>Coupons</li>
                            <li>Accessibility Statement</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-2">Resources</h4>
                        <ul className="leading-7">
                            <li>Associates Program</li>
                            <li>Influencer Program</li>
                            <li>Jobs</li>
                            <li>Press Kit & Brand Inquiries</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="mb-8 bg-sky-900/75 backdrop-blur-md rounded-sm p-5 mt-1 text-left">
                        <h4 className="text-lg font-semibold mb-2">Your Voice Matters</h4>
                        <p className="text-md pr-2 ">We'd love to learn more about your shipping exoeriences on Zappos.com and how we can improve!</p>
                        <button className="px-6 py-2 mt-2 text-lg font-bold border-white border-2 rounded-md hover:text-black hover:bg-white flex gap-2 group"><BsChatDots className="text-white group-hover:text-black my-auto"/> Take Survey</button>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
                        <ul className="flex gap-4 mt-3">
                            <li><BsFacebook className="text-3xl text-black"/></li>
                            <li><BsInstagram className="text-3xl text-black"/></li>
                            <li><BsTwitter className="text-3xl text-black"/></li>
                            <li><BsPinterest className="text-3xl text-black"/></li>
                            <li><BsYoutube className="text-3xl text-black"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer_1