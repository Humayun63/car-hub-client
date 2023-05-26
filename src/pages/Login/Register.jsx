import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import registerAnimation from '../../assets/registration.json'
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { setTitle, createUser, updateUser, logOut } = useContext(AuthContext)
    setTitle('| Register')
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        if (name === '' || email === '' || password === '' || photo === '') {
            return toast.error(<span className='text-red-600'>Field Cannot be empty!</span>)
        }
        if (password.length < 6) {
            return toast.error(<span className='text-red-600'>Password must contain at lease 6 character!</span>)
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, photo)
                    .then(() => {

                        toast.success(<span className='text-green-600'>Registration  Successful</span>)
                        logOut()
                            .then()
                            .catch(error => (
                                toast.error(<span className='text-red-600'>{error.message}</span>)
                            ))
                    })
                    .catch(error => (
                        toast.error(<span className='text-red-600'>{error.message}</span>)
                    ))
                form.reset()
                navigate('/login', { replace: true })
            })
            .catch(error => (
                toast.error(<span className='text-red-600'>{error.message}</span>)
            ))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row justify-between">
                <div className="text-center md:text-left md:w-1/2">
                    <Lottie animationData={registerAnimation} loop={true} className=' md:w-11/12' />;
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Register now!</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phot URL</span>
                                </label>
                                <input type="text" placeholder="Your Photo URL" name='photo' className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className='btn btn-primary' />
                            </div>
                        </form>
                        <p className='abel-text-alt mt-4'>Already Have an Account? <Link to='/login' className='font-semibold hover:underline '>Go to Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;