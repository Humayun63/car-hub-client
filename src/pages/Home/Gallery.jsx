import React, { useEffect, useState } from 'react';
import Loader from '../../shared/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://car-hub-server-alpha.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='my-12'>
            <h2 className='text-3xl font-medium my-4 text-center'>Zoom into Adventure:
                <br /> Explore Our Toy Car Gallery!</h2>
            {
                photos.length === 0 ? <Loader></Loader> :
                    <div
                        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border border-blue-600 rounded-md'>
                        {photos.map(photo => (
                            <img key={photo._id} src={photo.imageUrl} alt="Photo" className='bg-blue-300 p-4 rounded-md hover:bg-slate-300'
                                data-aos="zoom-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000"
                            />
                        ))}
                    </div>
            }

        </div>
    );
};

export default Gallery;