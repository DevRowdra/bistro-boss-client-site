import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PicAndInfo from '../PicAndinfo/PicAndInfo';
import PopularMenu from '../PopularManu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
        <title>Bistro Boss || Home</title>
       
      </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PicAndInfo></PicAndInfo>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;