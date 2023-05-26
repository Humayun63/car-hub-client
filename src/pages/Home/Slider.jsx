import React from 'react';
import img1 from '../../assets/slider/slider1.jpg'
import img2 from '../../assets/slider/slide2.png'
import img3 from '../../assets/slider/slider3.jpg'
import img4 from '../../assets/slider/slider4.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full h-80 rounded-lg my-8">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='relative w-full'>
                    <img src={img1} className="w-full h-full" />
                    <p className='absolute md:w-1/3 text-center top-5 md:top-1/3 md:left-1/3   text-white text-3xl'>Rev Up Your Imagination with our Toy Car Collection</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='relative w-full'>
                    <img src={img2} className="w-full h-full" />
                    <p className='absolute md:w-1/3 text-center top-5 md:top-1/2 md:left-20   text-white text-3xl'>Get Ready for Epic Adventures with our Toy Cars</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='relative w-full'>
                    <img src={img3} className="h-full w-full"/>
                    <p className='absolute md:w-1/3 text-center top-5 md:top-3/4 md:left-1/3   text-white text-3xl'>Rev Up Your Imagination with our Toy Car Collection</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='relative w-full'>
                    <img src={img4} className="w-full h-full " />
                    <p className='absolute md:w-1/3 text-center top-5 md:top-1/2 md:left-2/3   text-slate-600 text-3xl'>Rev Up Your Imagination with our Toy Car Collection</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;