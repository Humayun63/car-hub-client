import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { BsInbox } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loader from '../../shared/Loader';


const MyToys = () => {
    const { setTitle, user } = useContext(AuthContext)
    const [cars, setCars] = useState([])
    const [sortBy, setSortBy] = useState('lower-price');

    useEffect(() => {
        fetch(`https://car-hub-server-alpha.vercel.app/cars/user?email=${user?.email}&sortOrder=${sortBy}`)
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(error => console.log(error))
    }, [user, sortBy])

    setTitle('| My Toys')


    if (!user) {
        return <Loader></Loader>
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {


            if (result.isConfirmed) {
                fetch(`https://car-hub-server-alpha.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remainingCars = cars.filter(car => car._id !== id);
                       
                        setCars(remainingCars);
                    })
                    .catch(error => {
                        console.log('Error:', error);
                    });




            }
        })

    };

    const handleSortChange = event =>{
        setSortBy(event.target.value)
    }

    return (
        <div>

            {
                cars.length === 0 ?
                    <>
                        <div className="flex justify-center items-center h-64">
                            <div className="flex flex-col items-center">
                                <BsInbox className="text-gray-500 text-7xl mb-4" />
                                <p className="text-gray-500 text-4xl">Nothing added yet.</p>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="flex items-center mt-4 justify-end">
                            <label htmlFor="sort-by" className="mr-2">Sort by:</label>
                            <select
                                id="sort-by"
                                className="border border-gray-300 rounded px-2 py-1"
                                defaultValue={sortBy}
                                onChange={handleSortChange}
                            >
                                
                                <option value="lower-price">Lower Price</option>
                                <option value="higher-price">Higher Price</option>
                            </select>
                        </div>

                        <div className="overflow-x-auto mt-8">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-300">
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Quantity</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {cars.map((car, index) => (
                                        <tr key={car._id}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2 uppercase text-center">{car.name}</td>
                                            <td className="border px-4 py-2 text-center">${car.price}</td>
                                            <td className="border px-4 py-2 text-center">{car.quantity}</td>
                                            <td className="border px-4 py-2">
                                                <div className="flex flex-wrap justify-center">
                                                    <Link to={`/toys/update/${car._id}`}>
                                                        <button
                                                            className="bg-blue-500 text-white rounded-md px-4 py-2 m-1"

                                                        >
                                                            Update
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className="bg-red-500 text-white rounded-md px-4 py-2 m-1"
                                                        onClick={() => handleDelete(car._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>

            }

        </div>
    );
};

export default MyToys;
