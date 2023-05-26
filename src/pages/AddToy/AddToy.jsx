import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { setTitle, user } = useContext(AuthContext)
    setTitle('| Add A Toy')

    const handleAdd = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value;
        const picture = form.pictureUrl.value;
        const rating = form.rating.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subCategory.value;
        const quantity = form.availableQuantity.value;
        const description = form.description.value;
        const price = parseInt(form.price.value);

        const newCar = {
            name,
            picture,
            rating,
            sellerName,
            sellerEmail,
            subcategory,
            quantity,
            description,
            price
        }
        

        fetch('https://car-hub-server-alpha.vercel.app/cars/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="mx-auto p-4">
            <div className="bg-blue-300 py-8 rounded-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add A Toy</h2>
                <hr className='border mb-8' />
                <form className="max-w-lg mx-auto px-2 md:px-0" onSubmit={handleAdd}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-gray-800 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
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
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block mb-2 text-gray-800 font-medium">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            value={user?.displayName}
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block mb-2 text-gray-800 font-medium">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            value={user?.email}
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
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block mb-2 text-gray-800 font-medium">
                            Sub-category
                        </label>
                        <select
                            id="subCategory"
                            name="subCategory"
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        >
                            <option defaultValue="" disabled>Select Sub-category</option>
                            <option defaultValue="Remote Control Cars">Remote Control Cars</option>
                            <option defaultValue="Off-Road Vehicles">Off-Road Vehicles</option>
                            <option defaultValue="City Cars">City Cars</option>
                            <option defaultValue="Monster Trucks">Monster Trucks</option>
                            <option defaultValue="Convertible Cars">Convertible Cars</option>
                            <option defaultValue="Police Cars">Police Cars</option>

                        </select>
                    </div>
                    <input type="submit" value="Add Car" className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default AddToy;