import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const { setTitle, user } = useContext(AuthContext)
    const loadedCar = useLoaderData()
    const { _id, name, picture, rating, quantity, description, price } = loadedCar[0]
    setTitle('| Update A Toy')


    const handleUpdate = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value;
        const picture = form.pictureUrl.value;
        const rating = form.rating.value;
        const quantity = form.availableQuantity.value;
        const description = form.description.value;
        const price = parseInt(form.price.value);

        const newCar = {
            name,
            picture,
            rating,
            quantity,
            description,
            price
        }
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {


            if (result.isConfirmed) {
                fetch(`https://car-hub-server-alpha.vercel.app/cars/update/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newCar)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.modifiedCount) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Do you want to continue',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            })
                        }
                    })
            }
        })

    }
    return (
        <div className="mx-auto p-4">
            <div className="bg-blue-300 py-8 rounded-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add A Toy</h2>
                <hr className='border mb-8' />
                <form className="max-w-lg mx-auto px-2 md:px-0" onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-gray-800 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={name}
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block mb-2 text-gray-800 font-medium">
                            Picture URL
                        </label>
                        <input
                            type="text"
                            id="pictureUrl"
                            name="pictureUrl"
                            defaultValue={picture}
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 text-gray-800 font-medium">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            defaultValue={price}
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block mb-2 text-gray-800 font-medium">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            defaultValue={rating}
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availableQuantity" className="block mb-2 text-gray-800 font-medium">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            defaultValue={quantity}
                            id="availableQuantity"
                            name="availableQuantity"
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 text-gray-800 font-medium">
                            Detail Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            defaultValue={description}
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        ></textarea>
                    </div>


                    <input type="submit" value="Update Car" className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;