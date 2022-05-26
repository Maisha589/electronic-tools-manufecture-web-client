import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ClientReview from './ClientReview';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <ClientReview></ClientReview>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;