import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../../shared/Loader';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = ({ cars }) => {
    const { user } = useContext(AuthContext)
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate()

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    const handleDetails = id => {
        if (!user) {
            toast.error(<span className='text-red-600'>{'You have to log in first to view details'}</span>)
            // return <Navigate to='/login' replace state={{from:location}}></Navigate>
            navigate('/login', { state: { from: { pathname: `/toys/${id}` } } })
            return
        }
        else {
            navigate(`/toys/${id}`)
        }
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-center my-4">Shop By Category</h2>
            <Tabs>
                <TabList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-x-1 border-b border-gray-300 mb-4 sticky top-0">
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 0 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(0)}
                    >
                        All Cars
                    </Tab>
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 1 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(1)}
                    >
                        Remote Control
                    </Tab>
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 2 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(2)}
                    >
                        Off-Road
                    </Tab>
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 3 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(3)}
                    >
                        City Car
                    </Tab>
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 4 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(4)}
                    >
                        Monster Truck
                    </Tab>
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 5 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(5)}
                    >
                        Convertible Car
                    </Tab>
                    <Tab
                        className={`py-2 px-4 outline-none cursor-pointer ${selectedTab === 6 ? 'bg-[#570DF8] text-white outline-none' : 'bg-white'}`}
                        onClick={() => handleTabSelect(6)}
                    >
                        Police Car
                    </Tab>
                </TabList>

                {
                    cars.length === 0 ? <Loader></Loader> :
                        <>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex  flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.filter(car => car.subcategory === 'Remote Control Cars').map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex  flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.filter(car => car.subcategory === 'Off-Road Vehicles').map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex  flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.filter(car => car.subcategory === 'City Cars').map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex  flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.filter(car => car.subcategory === 'Monster Trucks').map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.filter(car => car.subcategory === 'Convertible Cars').map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex  flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                            <TabPanel className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    cars.filter(car => car.subcategory === 'Police Cars').map(car => (
                                        <div key={car._id} data-aos="flip-left" data-aos-offset="50" data-aos-duration="500" className='flex flex-col border border-blue-500 rounded-md p-4'>
                                            <img src={car.picture} alt="Car Image" className='w-1/2' />
                                            <div className="mt-auto flex  flex-col">
                                                <h3 className='text-3xl font-semibold mt-4'>{car.name}</h3>
                                                <p className='text-lg my-2 text-slate-500'><span className='font-semibold text-slate-900'>Price:</span> ${car.price}</p>

                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                    style={{ maxWidth: 100, margin:'10px 0' }}
                                                    value={car.rating}
                                                    readOnly
                                                /> {car.rating}
                                                </div>
                                                <button onClick={() => handleDetails(car._id)} className='btn bg-[#570DF8] text-white outline-none mt-auto'>View Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </TabPanel>
                        </>
                }
            </Tabs>
        </section>
    );
};

export default Shop;