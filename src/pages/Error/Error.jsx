import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorAnimation from '../../assets/error.json'

const Error = () => {
    const { error, status } = useRouteError()

    return (
        <div className='bg-blue-200 px-4 md:flex text-center md:text-left items-center justify-center gap-16 min-h-screen'>
            <Lottie animationData={errorAnimation} loop={true} className='mx-auto md:mx-2 w-1/3 md:w-1/5' />
            <div>
                <p className='text-9xl font-bold my-4'>{status || 404}</p>
                <p className='text-3xl'>{error?.message || 'Something went wrong!'}</p>
                <button className='btn mt-8'>
                    <Link to='/'>Back To Home</Link>
                </button>
            </div>
        </div>
    );
};

export default Error;