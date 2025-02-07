import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, IconButton, Divider, Card, Stack, Container, Grid2, Rating } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import toast from 'react-hot-toast';
import ButtonComponent from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemQuantity } from '../../redux/features/cart/cartSlice';

const ProductOverView = ({ productDetail }) => {
    let cartItems = useSelector((state) => state.cart.cartItems);
    let cartProductInfo = cartItems.filter((item) => item.id === productDetail[0].id);

    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
    const [selectedSize, setSelectedSize] = useState(cartProductInfo[0]?.selectedSize || productDetail[0]?.sizes[0]);

    const dispatch = useDispatch();

    let [quantity, setQuantity] = useState(cartProductInfo[0]?.quantity || 1);

    const mainOptions = {
        type: 'loop',
        rewind: true,
        autoplay: true,
        perMove: 1,
        perPage: 1,
        arrows: false,
        pagination: false,
        gap: '1rem',
        transition: {
            duration: 500,
            easing: 'ease-out',
        }
    };

    const thumbsOptions = {
        type: 'slide',
        rewind: true,
        autoplay: true,
        gap: '0.7rem',
        pagination: false,
        perPage: 5.5,
        perMove: 1,
        fixedWidth: 150,
        fixedHeight: 150,
        cover: true,
        focus: 'center',
        isNavigation: true,
        arrows: false,
        transition: {
            duration: 500, 
            easing: 'ease-out',
        }
    };

    const config = {
        fullColor: '#FFC633',
        size: 17,
        showText: false,
    };

    const renderSlides = () => (
        <>
            {[productDetail[0].image, productDetail[0].image, productDetail[0].image].map((src, index) => (
                <SplideSlide key={index}>
                    <Box src={src} sx={{ width: '100%', height: '100%' }} component={'img'} />
                </SplideSlide>
            ))}
        </>
    );

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, [mainRef, thumbsRef]);

    const handleCartAdd = () => {
        if (cartProductInfo[0]?.selectedSize === selectedSize) {
            toast.success(`${productDetail[0]?.name} ${cartProductInfo ? "updated" : "added"} to cart`);
            dispatch(updateItemQuantity({ id: productDetail[0]?.id, quantity, selectedSize }));
        } else {
            dispatch(updateItemQuantity({ id: productDetail[0]?.id, product: productDetail[0], selectedSize, quantity }));
        }
    }

    return (

        <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Splide options={mainOptions} ref={mainRef}>
                        {renderSlides()}
                    </Splide>

                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
                    <Splide options={thumbsOptions} ref={thumbsRef} >
                        {renderSlides()}
                    </Splide>
                </Grid2>
            </Grid2>

            <Box flex={1}>
                <Typography variant="h4" fontWeight="bold">{productDetail[0].name}</Typography>

                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <Rating
                        name="read-only"
                        value={productDetail[0].rating}
                        precision={0.1}
                        readOnly
                        sx={{ mb: 0 }}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <Typography variant="h5" color="textSecondary">Price: </Typography>
                    <Typography variant="h5" fontWeight="bold">₹ {productDetail[0].price}</Typography>

                </Stack>

                <Typography variant="body1" color="textSecondary" mt={2} maxWidth="500px">
                    {productDetail[0].description}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="body1" color="textSecondary">Choose Size</Typography>
                <Stack direction="row" spacing={2} mt={2}>
                    {productDetail[0].sizes.map((size) => (
                        <Button key={size} variant="outlined" onClick={() => setSelectedSize(size)} sx={{ borderRadius: '50px', backgroundColor: selectedSize === size ? '#000000' : '#ffffff', color: selectedSize === size ? '#ffffff' : '#000000', transform: 'capitalize', transition: 'all 0.3s ease-in-out', '&:hover': { backgroundColor: '#000000', color: '#ffffff' } }}>
                            {size}
                        </Button>
                    ))}
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Stack direction="row" spacing={2} alignItems="center">
                    <Stack direction="row" spacing={2} alignItems="center" border={1} borderRadius={4} p={1}>
                        <IconButton onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="body1">{quantity}</Typography>
                        <IconButton onClick={() => productDetail[0]?.stockLeft <= quantity ? toast.error("Out of stock") : setQuantity(quantity + 1)}>
                            <AddIcon />
                        </IconButton>
                    </Stack>
                    <ButtonComponent name="Add to Cart" color="#ffffff" size="large" variant="contained" onClick={handleCartAdd} />
                    <ButtonComponent name="Checkout" color="#000000" size="large" variant="contained" sx={{ backgroundColor: '#ffffff', border: '1px solid #000000' }} onClick={handleCartAdd} link="/checkout" />
                </Stack>
            </Box>
        </Grid2>

    );
};

export default ProductOverView;
