import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom';

const ButtonComponent = ({ name, link, color, size, variant, onClick, align, sx }) => {
    if (link) {
        return (
            <Link to={link} style={{ textDecoration: 'none',display: 'inline-block' }}>
                <MuiButton
                    variant={variant}
                    onClick={onClick}
                    align={align}
                    sx={{
                        backgroundColor: '#000000',
                        color: color,
                        borderRadius: '30px',
                        py: 1,
                        px: 5,
                        ...sx
                    }}
                    size={size}
                >
                    {name}
                </MuiButton>
            </Link>
        );
    }

    return (
        <MuiButton
            variant={variant}
            onClick={onClick}
            align={align}
            sx={{
                backgroundColor: '#000000',
                color: color,
                borderRadius: '30px',
                py: 1,
                px: 5,
                ...sx
            }}
            size={size}
        >
            {name}
        </MuiButton>
    );
};

export default ButtonComponent;
