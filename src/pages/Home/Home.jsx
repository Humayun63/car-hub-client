import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Slider from './Slider';
import Gallery from './Gallery';
import { FaMoneyBill, FaRocket, FaShieldAlt, FaTruckMoving } from 'react-icons/fa';
import ContactUs from './ContactUs';
import Shop from './Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const { setTitle } = useContext(AuthContext)
    const [cars, setCars] = useState([])

    setTitle('| Home')

    useEffect(() => {
        AOS.init();
      }, []);

    useEffect(() => {
        fetch('https://car-hub-server-alpha.vercel.app/cars/all')
            .then(res => res.json())
            .then(data => {
                setCars(data)

            })
            .catch(error => console.log(error))
    }, [])
    return (
        <main className='space-y-8'>
            <Slider></Slider>
            <section className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-blue-300 p-4 rounded-md hover:bg-blue-500'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"

                >
                    <FaTruckMoving className='text-5xl text-blue-950'></FaTruckMoving>
                    <h4 className='text-xl font-semibold mt-2'>Free Shipping</h4>
                    <p>Starts from $10</p>
                </div>
                <div className='bg-blue-300 p-4 rounded-md hover:bg-blue-500'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <FaMoneyBill className='text-5xl text-blue-950'></FaMoneyBill>
                    <h4 className='text-xl font-semibold mt-2'>Money Back Guarantee</h4>
                    <p>Back within 25 days</p>
                </div>
                <div className='bg-blue-300 p-4 rounded-md hover:bg-blue-500'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <FaShieldAlt className='text-5xl text-blue-950'></FaShieldAlt>
                    <h4 className='text-xl font-semibold mt-2'>Secure Payment</h4>
                    <p>Payment Security</p>
                </div>
                <div className='bg-blue-300 p-4 rounded-md hover:bg-blue-500'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <FaRocket className='text-5xl text-blue-950'></FaRocket>
                    <h4 className='text-xl font-semibold mt-2'>Fast Shipping</h4>
                    <p>Shipping within 3 days</p>
                </div>
            </section>
            <Gallery></Gallery>
            <Shop cars={cars}></Shop>
            <ContactUs></ContactUs>
        </main>
    );
};

export default Home;