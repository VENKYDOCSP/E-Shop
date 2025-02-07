import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ pageName }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt:{ xs:'15%',sm:'15%' , md:'12%',lg:'9%' }}}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ color: 'text.primary', fontFamily: 'satoshi', fontWeight: 'bold' }}>
                    Home
                </Typography>
            </Link>
            <ArrowForwardIosIcon sx={{ height: '15px' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'satoshi' }}>
                {pageName}
            </Typography>
        </Box>
    )
}

export default Breadcrumbs 