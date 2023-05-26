import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AllToys = () => {
    const { setTitle } = useContext(AuthContext)
    const loadedCars = useLoaderData() || []
    const [cars, setCars] = useState(loadedCars)
    setTitle('| All Toys')

    

    const handleSearch = event =>{
        event.preventDefault()
        const search = event.target.search.value;
        if(search === ' '){
            toast.error('Please Input Something!')
            return
        }
        fetch(`https://car-hub-server-alpha.vercel.app/carSearchByName/${search}`)
        .then(res => res.json())
        .then(data => setCars(data))
        .catch(error => console.log(error))
    }
    return (
        <section>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">All Cars In One View!</h2>

                <form onSubmit={handleSearch} className="flex items-center mb-4 justify-center">
                    <input
                        type="text"
                        placeholder="Search"
                        name="search"
                        required
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="ml-2 px-4 py-2 btn btn-primary"
                    />
                </form>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 text-left">#</th>
                                <th className="py-2 px-4 text-left">Seller Name</th>
                                <th className="py-2 px-4 text-left">Toy Name</th>
                                <th className="py-2 px-4 text-left">Sub-Category</th>
                                <th className="py-2 px-4 text-left">Price</th>
                                <th className="py-2 px-4 text-left">Available <br /> Quantity</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((car, index) => (
                                <tr key={car._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{car.sellerName}</td>
                                    <td className="py-2 px-4">{car.name}</td>
                                    <td className="py-2 px-4">{car.subcategory}</td>
                                    <td className="py-2 px-6">${car.price}</td>
                                    <td className="py-2 px-8 ">{car.quantity}</td>
                                    <td className="py-2 px-4">
                                        <Link to={`/toys/${car._id}`}>
                                            <button className="btn btn-primary text-white font-semibold py-2 px-4 rounded-md">
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllToys;