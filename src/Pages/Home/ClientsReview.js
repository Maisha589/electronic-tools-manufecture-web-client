import React, { useState } from 'react';
import { config, useSpring, animated } from 'react-spring';

const ClientsReview = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: 4000,
        delay: 800,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div className="stat">
            <div className="stat-title text-3xl text-accent">Client Reviews</div>
            <animated.div className="stat-value text-accent">{number.to(n => n.toFixed(0))}</animated.div>
            <div className="stat-desc mt-2 text-xl font-semibold text-accent">Talked about us</div>
        </div >
    );
};

export default ClientsReview;