import React from 'react';
import Nav from '../shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='carhub-container'>
            <Nav></Nav>
            <div className='carhub-outlet'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;