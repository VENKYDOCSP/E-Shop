import React from 'react'
import Product from '../Products/Product'
import { Box, Button, Grid2, Typography } from '@mui/material'
import ButtonComponent from '../Button'

const HomeProducts = ({ ProductJson }) => {
    return (
        <>
            <Box sx={{ px: 5 }}>
                <Typography variant="h4" align='center' sx={{ fontWeight: 'bold', color: 'text.primary', pb: 3, py: 5 }} >Latest Products</Typography >
                <Grid2 container spacing={2}>
                    {
                        ProductJson?.slice(0, 4).map((product) => (
                            <Grid2 spacing={2} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
                                <Product product={product} />
                            </Grid2>
                        ))
                    }
                </Grid2>
                {/* <Button variant='contained' align='center' sx={{ backgroundColor: '#000000', borderRadius: '30px', py: 1, px: 5, margin: 'auto', display: 'block', mt: 5 }} size='large'>
                    View All Products
                </Button> */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
                    <ButtonComponent name="View All Products" link="/products" color="#ffffff" size="large" variant="contained" align="center" sx={{ margin: 'auto !important' }} />
                </Box>
            </Box>
        </>
    )
}

export default HomeProducts