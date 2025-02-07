import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ButtonComponent from '../Button';

const CartSummary = ({ cartItems }) => {

    const total = cartItems?.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

    return (
        <Box
            sx={{
                borderRadius: '16px',
                py: 4,
                px: 4,
                backgroundColor: 'white',
                boxShadow: '0 4px 6px 1px rgb(0 0 0 / 0.1)',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'flex-start',
            }}
        >
            <Typography variant='h6' align='center'>Cart Summary</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
                <Typography variant='h6' sx={{ fontFamily: 'satoshi' }}>Sub Total:</Typography>
                <Typography variant='h6' sx={{ fontFamily: 'satoshi' }}>₹ {total}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 1 }}>
                <Typography variant='h6' sx={{ fontFamily: 'satoshi' }}>Delivery Fees:</Typography>
                <Typography variant='h6' sx={{ fontFamily: 'satoshi' }}>₹ {total > 100 ? 10 : total > 50 ? 5 : 0}</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
                <Typography variant='h6' sx={{ fontFamily: 'satoshi' }}>Total:</Typography>
                <Typography variant='h6' sx={{ fontFamily: 'satoshi' }}>₹ {total + (total > 100 ? 10 : total > 50 ? 5 : 0)}</Typography>
            </Box>
           <ButtonComponent name="Checkout" link="/checkout" color="#fff" size="large" variant="contained" onClick={() => { }} sx={{ mt: 2, display: 'block' }} />
        </Box>
    )
}

export default CartSummary