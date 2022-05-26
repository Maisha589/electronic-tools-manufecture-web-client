import React from 'react';
import ClientsReview from './ClientsReview';
import Countries from './Countries';
import HappyClients from './HappyClients';
import SuppliedTools from './SuppliedTools';


const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center mt-10 mb-8'>Our business Summary</h2>
            <div style={{ backgroundImage: "url(https://i.ibb.co/dMHJyxX/21018.jpg)", backgroundSize: "cover" }} className=" grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2 p-3">
                <Countries></Countries>
                <HappyClients></HappyClients>
                <ClientsReview></ClientsReview>
                <SuppliedTools></SuppliedTools>
            </div>
        </div>
    );
};

export default BusinessSummary;