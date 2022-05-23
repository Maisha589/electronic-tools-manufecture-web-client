import React, { useState } from 'react';
import { config, useSpring, animated } from 'react-spring';

const HappyClients = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: 5000,
        delay: 500,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title text-3xl text-secondary">Happy Clients</div>
                <animated.div className="stat-value text-secondary">{number.to(n => n.toFixed(0))}</animated.div>
                <div className="stat-desc mt-2 text-xl font-semibold text-secondary">Our Regular customer</div>
            </div >
        </div>
    );
};

export default HappyClients;