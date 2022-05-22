import React, { useState } from 'react';
import { config, useSpring, animated } from 'react-spring';

const SuppliedTools = () => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: 160000,
        delay: 500,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div className="stat">
            <div className="stat-title text-3xl text-neutral">Tools Supplied</div>
            <animated.div className="stat-value text-neutral">{number.to(n => n.toFixed(0))}</animated.div>
            <div className="stat-desc mt-2 text-xl font-semibold text-neutral">Successfully delivered</div>
        </div >
    );
};

export default SuppliedTools;