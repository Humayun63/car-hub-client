import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SingleToy = () => {
    const { setTitle } = useContext(AuthContext)
    const loadedCar = useLoaderData() || []
   
    const { picture, name, rating, sellerName, sellerEmail, subcategory, quantity, description, price } = loadedCar[0]
    setTitle(`| ${name}`)
    return (
        <div className="max-w-lg mx-auto bg-blue-300 shadow-md rounded-md mt-8 p-6">
            <div className="mb-4">
                <img src={picture} alt={name} className="w-2/3 mb-4 mx-auto rounded-full object-cover" />
            </div>

            <h2 className="text-2xl mb-4 text-center font-semibold">{name}</h2>
            <p className="text-gray-600 mb-1"><span className='text-lg font-semibold'>Seller Name:</span> {sellerName}</p>
            <p className="text-gray-600 mb-1"><span className='text-lg font-semibold'>Seller Email:</span> {sellerEmail}</p>
            <p className="text-gray-700 mb-1"><span className='text-lg font-semibold'>Price: </span> {price}</p>
            <p className="text-gray-700 mb-1"><span className='text-lg font-semibold'>Rating: </span> {rating}</p>
            <p className="text-gray-700 mb-1"><span className='text-lg font-semibold'>Available Quantity:</span> {quantity}</p>
            <p className="text-gray-700">{description}</p>
            <span className='mt-4 border px-2 py-1 rounded-md bg-slate-100
             inline-block'>{subcategory}</span>
        </div>
    );
};

export default SingleToy;