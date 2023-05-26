import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json'
import { toast } from 'react-hot-toast';

const Login = () => {
    const { setTitle, googleSignIn, emailSignIn } = useContext(AuthContext)

    setTitle('| Login')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                toast.success(<span className='text-green-600'>Welcome {result.user.displayName || 'User'}</span>)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value


        emailSignIn(email, password)
            .then(result => {
                toast.success(<span className='text-green-600'>Welcome {result.user.displayName || 'User'}</span>)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => (
                toast.error(<span className='text-red-600'>{error.message}</span>)
            ))
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row justify-between">
                <div className="text-center md:text-left">
                    <Lottie animationData={loginAnimation} loop={true} className='' />;
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" required className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn btn-primary' />
                            </div>
                        </form>

                        <p className='abel-text-alt mt-4'>New to CarHub? <Link to='/register' className='font-semibold hover:underline '>Go to Register</Link></p>

                        <hr className='border border-blue-400 my-4' />
                        <p className='text-center'>Or</p>
                        <div className='mx-auto mt-4'>
                            <button onClick={handleGoogleLogin} className=' border-2 rounded-md border-blue-950 hover:bg-slate-300 flex items-center gap-1 px-4 py-1'>
                                <FaGoogle className='hover:text-blue-950 text-2xl text-blue-600'></FaGoogle>
                                <span className='text-lg text-slate-900 font-medium'>Login With Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;