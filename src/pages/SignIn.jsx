import img1 from '../assets/logo-blue-small._CB485919770_.svg';
import { BsCaretDownFill, } from 'react-icons/bs'
import Footer_2 from '../components/Footer_2';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    let user;
    const [err, setErr] = useState(false);
    const [show, setShow] = useState(false);
    const ip = "http://159.65.21.42:9000";
    const url = `${ip}/login`;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("your Signed'in!Thank you for Visisting Zappos website")
        if (
            email === '' | password === ''
        ) {
            setErr(true);
            return;
        }
        user = {
            email: email,
            password: password,
        }
        setEmail('');
        setPassword('');
        console.log((user));
        setUsers(user);
        authorize();
    }
    
    const authorize = async () => {
        try {
            const resp = await axios.post(url, user);
            setUsers(resp.data);
            if(users){
                alert("Welcome " + resp.data.name)
                localStorage.setItem("currentUser", JSON.stringify(resp.data));
                navigate('/')
            }
        } catch (err) {
            console.log(err);
        }
    }

        return (
            <>
                <div className='my-4 mb-28 text-center'>
                    <Link to="/"> <img src={img1} alt="logo" className='h-11 inline align-middle text-white' /></Link>
                    <div className='border-1 border-gray-400 text-left w-85 mx-auto mt-4 rounded-md px-6 py-5 my-8 font-sans'>
                        <h1 className='text-3xl font-Arial'>Sign in</h1>
                        {
                            show === true ? (
                                <div className='flex align-middle justify-center bg bg-green-500 w-full h-10 text-white text-lg font-semibold text-center mb-4'>
                                    <p className='my-auto'>User Created</p>
                                </div>
                            ) : (null)
                        }
                        <form action="">
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Email</label>
                                <input type="text" placeholder='Example: JonDoe@gmail.com' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                                {err === true && email === '' ? <span className='text-red-600'>Email Required</span> : null}
                            </div>
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm flex justify-between font-semibold mb-0.5'>Password <a href="#" className='text-blue-custom font-normal hover:underline'>Forgot your password?</a></label>
                                <input type="text" placeholder='At least 6 chsracters' className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={password} onChange={(e) => setPassword(e.target.value)} />
                                {err === true && password === '' ? <span className='text-red-600'>Password Required</span> : <small><i className='text-blue-600 mr-1 px-1 font-bold'>i  </i> Passwords must be at least 6 characters.</small>}
                            </div>

                            <button className=' w-full bg-blue-custom text-white font-semibold text-sm mx-auto mt-2 my-2 py-1.5 rounded-md' onClick={handleSubmit}>Sign in</button>
                        </form>

                        <div className='flex gap-2 my-2 mb-9'>
                            <input type="checkbox" className='my-auto' />
                            <small className='flex gap-1 my-auto'>Keep me signed in? <a href="#" className='text-blue-custom flex gap-0.5'>Details <BsCaretDownFill className='my-auto p-0.5 text-gray-500' /></a></small>
                        </div>

                        <small className='pb-4   shadow-inner block mt-1 relative'><a href="#" className='absolute text-gray-500 bg-white px-2 left-[30%] top-[-35%]'>New to Zappos?</a></small>

                        <button className=' w-full border-2 border-sky-900 text-blue-custom font-semibold text-sm mx-auto mt-2 my-2 py-1.5 rounded-md'>
                            <Link to={'/sign-up'} element={<SignUp />}> Create your Zappos account</Link>
                        </button>

                    </div>
                </div>
                <Footer_2 className="fixed top-0 left-0 right-0" />
            </>
        )
    }
    export default SignIn