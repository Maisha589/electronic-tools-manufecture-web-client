import React from 'react';

const MyPortfolio = () => {
    return (
        <div style={{ backgroundImage: "url(https://i.ibb.co/MgQ5b4J/rm183-wan-01b.jpg)", backgroundSize: "cover" }}>
            <h2>This is my portfolio</h2>
            <div class="card w-96 glass">
                <figure><img src="https://i.ibb.co/F6wf38g/IMG-20220512-162350.jpg" alt="car!" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-secondary">This is me!</h2>
                    <p className='text-2xl font-bold text-white'>Maisha Rahman</p>
                    <p className=' text-white font-semibol '>I am a web Developer!</p>
                    <p className=' text-white font-semibol '>I have passed my HSC...Loading </p>
                    <p className=' text-white font-semibol '>I am expert at - HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACT, MONGODB, EXPRESS and NODE.JS</p>
                    <p className='text-secondary'>Some of my website:</p>
                    <p>1.<a className='text-white text-xl' href="https://royal-perfume.web.app/">Warehouse website</a></p>
                    <p>2.<a className='text-white text-xl' href="https://car-zone589.netlify.app/">Product website</a></p>
                    <p>3.<a className='text-white text-xl' href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftourist-guide-6c7c0.web.app%2F%3Ffbclid%3DIwAR0uVlIAb9Be_zGAhZFcPAUwAIP-RcmW1KnGxtSiIxVvOtG3l7C6LL-XIx4&h=AT2g8gpAkFHu1y3G-cU0kpC2Rukc85x0wHQNYYor7FcbPlrS9MA7NbJg-OmVa_ADxCGjaTI9Dl8k0hHZzyLc_KiveGBA936gkPViS2pnQasfyxQs2DEbf_9DscSKc6v--RkVVA">Service website</a></p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;