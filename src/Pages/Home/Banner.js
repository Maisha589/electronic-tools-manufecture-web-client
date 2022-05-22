import React from 'react';
import { useSpring, animated } from 'react-spring'

const Banner = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    return (
        <div>
            <animated.div style={props}>This is banner.</animated.div>
        </div>
    );
};

export default Banner;