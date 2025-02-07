import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs '
import ProductOverView from '../components/Products/ProductOverview'
import ProductJson from '../ProductJson'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    let param = useParams();
    console.log(param, "param")
    let productDetail = ProductJson.filter((item) => item?.id == param?.id);
    console.log(productDetail, "productDetail")
    return (
        <Container>
            <Breadcrumbs pageName="Product Details" />
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 4, mt: 3, mb: 0 }}>
                    Product Details
                </Typography>
            </Box>
            <ProductOverView productDetail={productDetail} />
        </Container>
    )
}

export default ProductDetails