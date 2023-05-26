import React from 'react';
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-blue-300 text-base-content  mt-12">

                <div className="">
                    <h4 className="text-xl font-semibold text-slate-600 mb-4">Subscribe to Our Newsletter</h4>
                    <form className="flex flex-col md:flex-row gap-2">
                        <input type="email" className="bg-white rounded-lg py-2 px-4 text-gray-800 placeholder-gray-500 focus:outline-none" placeholder="Enter your email" />
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 rounded-lg py-2 px-6 text-slate-600 font-semibold transition-colors duration-300">Subscribe</button>
                    </form>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-slate-600 mb-4">Legal Information</h4>
                    <ul className="text-gray-800">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-slate-600 mb-4">Contact Us</h4>
                    <p className="text-gray-800">
                        Email: info@carhub.com
                        <br />
                        Phone: 123-456-7890
                        <br />
                        Address: 123 Toy Street, Toyville
                    </p>
                </div>

            </footer>
            <footer className="footer px-10 py-4 border-t bg-blue-300 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="logo" className='w-24' />
                    <p><span className='text-3xl font-bold'>CarHub</span> <br />Trusted Toy Provider Since 1969</p>
                </div>
                <div className="md:place-self-center md:justify-self-end mx-auto">
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className='text-3xl hover:text-blue-600'></FaFacebook>
                        <FaTwitter className='text-3xl hover:text-blue-800'></FaTwitter>
                        <FaInstagram className='text-3xl hover:text-pink-600'></FaInstagram>
                        <FaYoutube className='text-3xl hover:text-red-600'></FaYoutube>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;