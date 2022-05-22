import React, { useState } from 'react';
import { config, useSpring, animated } from 'react-spring';

const Countries = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: 15,
        delay: 300,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div className="stat stat-shadow">
            <div className="stat-title text-3xl text-primary">Countries</div>
            <animated.div className="stat-value text-primary">{number.to(n => n.toFixed(0))}</animated.div>
            <div className="stat-desc mt-2 text-xl font-semibold text-primary">Successfully served our tools</div>
        </div >
    );
};

export default Countries;