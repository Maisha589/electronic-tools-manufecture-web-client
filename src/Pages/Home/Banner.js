import React from 'react';
import BannerElement from './BannerElement';
import BannerElement2 from './BannerElement2';

const Banner = () => {

    return <div className='w-full'>
        <BannerElement2></BannerElement2>
        <h2 className='text-2xl text-white'>.</h2>
        <BannerElement></BannerElement>
        <h2 className='m-5 text-white'>  _ </h2>
    </div>
};

export default Banner;