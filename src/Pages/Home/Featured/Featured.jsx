import React from 'react';
import SectionTitle from '../../../components/SectionTitl/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='pt-8 featured-img text-white '>
            <SectionTitle
            heading={'check it out'}
            subHeading={'Feature Item'}
            
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 px-36  pt-12 bg-slate-400 bg-opacity-30'>
                <div>
                    <img  src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 10, 2019 </p>
                    <p className='text-lg'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur excepturi ex consequatur, eius, beatae aliquam magni perferendis eligendi, voluptatem est facere veniam eaque nemo sit dolorem natus libero nobis!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-slate-950">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;