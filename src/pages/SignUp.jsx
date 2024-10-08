import img1 from '../assets/logo-blue-small._CB485919770_.svg';
import { BsCaretRightFill, } from 'react-icons/bs'
import Footer_2 from '../components/Footer_2';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const [show, setShow] = useState(false);
    const ip = "http://159.65.21.42:9000";
    const url = `${ip}/register`;
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            name === '' || phone === '' | email === '' | password === ''
        ) {
            setErr(true);
            return;
        }
        const user = {
            name: name,
            phone: phone,
            email: email,
            password: password,
        }
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
        console.log((user));

        try {
            const resp = await axios.post(url, user);
            console.log(resp);
            setShow(true);
            setTimeout(() => setShow(false), 2500);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <div className='my-4 text-center'>
                <Link to={'/'} ><img src={img1} alt="logo" className='h-11 inline align-middle text-white' /></Link>

                <div className='border-1 border-gray-400 text-left w-85 mx-auto mt-4 rounded-md px-4 py-3 my-8 font-sans'>
                    <h1 className='text-3xl font-Arial'>Create account</h1>
                    {
                        show === true ? (
                            <div className='flex align-middle justify-center bg bg-green-500 w-full h-10 mt-3 text-white text-lg font-semibold text-center mb-4'>
                                <p className='my-auto'>User Created</p>
                            </div>
                        ) : (null)
                    }
                    <form action="POST">
                        <div className='my-2'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Your name</label>
                            <input type="text" placeholder='First and last name' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={name} onChange={(e) => setName(e.target.value)} />
                            {err === true && name === '' ? <span className='text-red-600'>Full Name Required</span> : null}
                        </div>
                        <div className='my-2'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Email</label>
                            <input type="text" placeholder='Example: JonDoe@gmail.com' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {err === true && email === '' ? <span className='text-red-600'>Email Required</span> : null}
                        </div>
                        <div className='my-4'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Phone Number</label>
                            <input type="text" placeholder="User's Phone Number" className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            {err === true && phone === '' ? <span className='text-red-600'>Phone Number Required</span> : null}
                        </div>
                        <div className='my-2'>
                            <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Password</label>
                            <input type="text" placeholder='At least 6 chsracters' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {err === true && password === '' ? <span className='text-red-600'>Password Required</span> : <small><i className='text-blue-600 mr-1 px-1 font-bold'>i  </i> Passwords must be at least 6 characters.</small>}
                        </div>


                        <button className=' w-full bg-blue-custom text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md' onClick={handleSubmit}>Create your Zappos account</button>
                    </form>

                    <small className='mt-2 block mb-3'>Don't have an email address or need additional help? <br /> Don't worry! Give us a call at <a href="#" className='text-blue-custom'>(800) 927-7671</a></small>
                    <small className='mb-5 pb-6 shadow-md block '>Registering means you agree to the Zappos terms of use and <a href="#" className='text-blue-custom'> Privacy Policy </a></small>
                    <small className='mt-7 flex gap-1'>Already have an account? <Link to={"/sign-in"} element={<SignIn />} className='text-blue-custom hover:underline flex gap-0.5'>Sign in <BsCaretRightFill className='my-auto p-0.5 text-gray-500' /></Link></small>
                </div>
            </div>

            <Footer_2 />
        </>
    )
}
export default SignUp