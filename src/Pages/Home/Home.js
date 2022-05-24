import React from 'react';
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
        </div>
    );
};

export default Home;