import { BsStars } from "react-icons/bs";

function Points() {
    return (
        <>
            <div className="w-100 h-10 m-auto py-4 mb-8 relative bg-sky-100 flex my-auto mx-auto">
                <div className=" duration-500  text-center mx-auto transition-all ease-in-out delay-300 relative top-[-8px] text-sm " >
                    <p className="flex"><BsStars className="text-sky-500"/> Check out to earn Zappos VIP points worth up to <b className="mx-1"> $0.75 </b> in VIP Codes. <a href="#" className="underline text-blue-custom mx-1">Join today to start earning!</a></p>
                </div>
            </div>
        </>
    )
}
export default Points