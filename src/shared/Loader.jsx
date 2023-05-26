import React from 'react';
import Lottie from "lottie-react";
import loaderAnimation from '../assets/loader.json'

const Loader = () => {
    return (
        <div className='w-1/5 mx-auto mt-4'>
            <Lottie animationData={loaderAnimation} loop={true} className='' />
        </div>
    );
};

export default Loader;
