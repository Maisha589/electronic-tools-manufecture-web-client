import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen  bg-opacity-90" style={{ backgroundImage: "url(https://i.ibb.co/xj9jFdB/creative-clay-textured-background-blue-border-diy-tie-dye-art-abstract-style.jpg)", backgroundSize: "cover" }} >
            <div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2">
                <img src="https://i.ibb.co/gT9NCxZ/male-asian-engineer-professional-having-discussion-standing-by-machine-factory-two-asian-coworker-br.jpg" alt='' className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Why choose us!!</h1>
                    <p className="py-6 text-secondary">We manufacture the best quality tools. every single tool is examined by our experts. Best trustable tools for your people to use. Your life is secure with our tools. We supply internationally. Start your secure journey with us.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;