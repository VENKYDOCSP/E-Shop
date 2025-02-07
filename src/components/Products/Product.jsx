import { Box, Button, Container, FormControlLabel, Grid2, IconButton, Radio, RadioGroup, Rating, Typography } from '@mui/material';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState } from 'react';
import { addItemToCart } from '../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Button';

const Product = ({ product }) => {

    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)] || 'M');
    const [hovered, setHovered] = useState(false);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        console.log(product, "product");
        setState({ bottom: false });
        dispatch(addItemToCart({ product, selectedSize }));
    };

    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        event.stopPropagation();
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };



    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };


    const list = (anchor) => (
        <Container sx={{ py: 4 }}>
            <Box
                role="presentation"
            >
                <Grid2 container spacing={2}>

                    <Grid2 spacing={2} size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ direction: 'column', margin: 'auto' }}>
                        <Box
                            sx={{ width: '60%', objectFit: 'cover', margin: 'auto' }}
                            component="img"
                            src={product.image}
                            alt={product.name}
                        />
                    </Grid2>


                    <Grid2 spacing={2} size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ direction: 'column', margin: 'auto' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 1 }}>{product.name}</Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0.4, fontFamily: 'satoshi', fontSize: '16px' }}>
                            Price: ₹{product.price}
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'text.secondary', pb: 0.4, fontFamily: 'satoshi', fontSize: '16px', fontWeight: 'bold' }}>
                            {product.description}
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0.4, fontFamily: 'satoshi', fontSize: '16px' }}>
                            Category: {product.category}
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0.4, fontFamily: 'satoshi', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
                            Rating:   <Rating
                                name="read-only"
                                value={product.rating}
                                precision={0.1}
                                readOnly
                                sx={{ mb: 0 }}
                            />
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0, fontFamily: 'satoshi', fontSize: '16px' }}>
                            Select Size:
                        </Typography>
                        <RadioGroup row value={selectedSize} onChange={handleSizeChange} sx={{ fontFamily: 'satoshi', fontSize: '16px' }}>
                            {product?.sizes.map((size) => (
                                <FormControlLabel
                                    key={size}
                                    value={size}
                                    sx={{ fontFamily: 'satoshi', fontSize: '16px' }}
                                    control={<Radio color="primary" />}
                                    label={
                                        <Typography
                                            sx={{
                                                color: 'text.primary',
                                                fontSize: '16px',
                                                fontFamily: 'Satoshi, sans-serif',
                                            }}
                                        >
                                            {size === 'M' ? 'Medium' : size === 'L' ? 'Large' : size === 'S' ? 'Small' : 'Extra Large'}
                                        </Typography>
                                    }
                                />
                            ))}
                        </RadioGroup>
                        <Box sx={{ mt: 3 }}>
                            {/* <Button
                                variant="contained"
                                color="#000000"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button> */}
                            <ButtonComponent name="Add to Cart" link="" align='left' color="#ffffff" size="large" variant="contained" onClick={handleAddToCart} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                transform: hovered ? 'translateY(1px)' : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hovered ? 4 : 1,
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
            }}
        >
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <Link to={`/products/${product?.id}`} style={{ textDecoration: 'none' }}>
                    <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                            width: '100%',
                            height: 250,
                            objectFit: 'cover',
                            transform: hovered ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.4s ease',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: 'rgba(0, 0, 0, 0.2)',
                            opacity: hovered ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                        }}
                    />
                </Link>


                <IconButton
                    onClick={(event) => {
                        event.stopPropagation();
                        toggleDrawer('bottom', true)(event);
                    }}
                    sx={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
                        opacity: hovered ? 1 : 0,
                        transition: 'all 0.5s ease',
                        bgcolor: 'white',
                        '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.9)',
                        },
                    }}
                >
                    <AddShoppingCartIcon sx={{ color: '#000000' }} />
                </IconButton>
            </Box>

            <Box sx={{ p: 2 }}>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 'bold',
                        color: 'text.primary',
                        mb: 1,
                        textTransform: 'capitalize',
                        fontSize: '16px'
                    }}
                >
                    {product.name}
                </Typography>

                <Rating
                    name="read-only"
                    value={product.rating}
                    precision={0.1}
                    readOnly
                    sx={{ mb: 0 }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 600,
                        color: 'text.primary',
                        fontFamily: 'satoshi',
                    }}
                >
                    <CurrencyRupeeSharpIcon sx={{ height: 15, width: 15, mr: 0.5 }} />
                    {product.price}
                </Typography>
            </Box>

            <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
            >
                {list('bottom')}
            </SwipeableDrawer>
        </Box>
    );
}

export default Product;