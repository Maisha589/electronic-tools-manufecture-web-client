import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring'

const BannerElement = () => {
    const [toggle, set] = useState(false);

    const transitions = useTransition(toggle, {
        from: { position: 'relative', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: toggle,
        delay: 300,
        config: config.molasses,
        onRest: () => set(!toggle),
    })
    return transitions(({ opacity }, item) =>
        item ? (
            <animated.div
                style={{
                    position: 'absolute',
                    opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                }}>
                <h2 className='text-4xl text-primary font-bold text-center'>Electronic Tool Zone</h2>
            </animated.div>
        ) : (
            <animated.div
                style={{
                    position: 'absolute',
                    opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                }}>
                <h2 className=' text-4xl text-secondary font-bold text-center'>Biggest Electric Tool Manufacturer in Town</h2>
            </animated.div>
        )
    )
};

export default BannerElement;