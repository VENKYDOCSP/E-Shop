import React from 'react';
import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

const AnimatedCounter = ({ target }) => {
    const props = useSpring({
        from: { number: 0 },
        number: target,
        config: { tension: 100, friction: 40 },
    });

    return (
        <animated.span>
            {props.number.to(n => parseFloat(n.toFixed(0)).toLocaleString())}
        </animated.span>
    );
};


const CounterSection = ({ counters }) => (
    <Grid2 container spacing={2} sx={{ pt: 3 }}>
        {
            counters.map((counter, index) => (
                <Grid2 item size={{ xs: 6, sm: 4, md: 4, lg: 4 }} sx={{ display: 'flex', flexDirection: 'column', alignItems:{xs:'center',sm:'center',md:'center',lg:'start'}}}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0.4 }}>
                        <AnimatedCounter target={counter.target} />
                        +
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary', pb: 2, fontFamily: 'satoshi', textAlign: 'center' }}>
                        {counter.label}
                    </Typography>
                </Grid2>
            ))
        }
    </Grid2>
);

export default CounterSection;
