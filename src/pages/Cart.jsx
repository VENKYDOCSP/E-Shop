import { Box, Container, Divider, Grid2, IconButton, Typography } from '@mui/material'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs '
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateItemQuantity, removeCartItem } from '../redux/features/cart/cartSlice';
import toast from 'react-hot-toast';
import CartSummary from '../components/Cart/CartSummary';
import cartEmpty from '../assets/cart_empty.svg';

const Cart = () => {

    let cartItems = useSelector((state) => state.cart.cartItems);

    // console.log(cartItems, "cartItems")

    const dispatch = useDispatch((state) => state.cart.dispatch);

    const handleCartIncrease = (id, currentQuantity, stockLefts) => {
        if ( currentQuantity < stockLefts) {
            const newQuantity = currentQuantity + 1;
            dispatch(updateItemQuantity({ id, quantity: newQuantity }));
        } else {
            toast.error("Out of stock");
        }
    };

    const handleCartDecrease = (id, currentQuantity) => {
        const newQuantity = currentQuantity - 1;
        if (newQuantity > 0) {
            dispatch(updateItemQuantity({ id, quantity: newQuantity }));
        } else {
            toast.error("Cannot reduce quantity to 0");
        }
    };

    const handleRemoveItem = (id, name, selectedSize) => {
        dispatch(removeCartItem({ id, name, selectedSize }))
    }

    return (
        <Container sx={{}}>
            <Breadcrumbs pageName="Cart" />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0.4, mt: 3, mb: 0 }}>Your cart</Typography>
            {cartItems?.length > 0 ? (
                <Grid2 container spacing={3} sx={{ pt: 3 }}>
                    <Grid2 spacing={2} size={{ xs: 12, sm: 12, md: 8, lg: 7 }}>
                        <Box
                            sx={{
                                borderRadius: '16px',
                                py: 4,
                                px: 4,
                                backgroundColor: 'white',
                                boxShadow: '0 4px 6px 1px rgb(0 0 0 / 0.1)',
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Shopping Cart ( {cartItems.length} items )
                            </Typography>

                            {cartItems?.map((item, index) => (
                                <Box key={index}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 5,
                                        py: 1
                                    }}>
                                        <Box
                                            sx={{
                                                width: '120px',
                                                height: '140px',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                flexShrink: 0
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.image}
                                                alt={item.name}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </Box>

                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Box>
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            fontWeight: 600,
                                                            mb: 0.3
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            fontWeight: 600,
                                                            textTransform: 'capitalize',
                                                            fontFamily: 'satoshi',
                                                            mb: 1
                                                        }}
                                                    >
                                                        Size: {item.selectedSize || 'M'}
                                                    </Typography>
                                                    <Grid2 container spacing={1}>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: 'text.secondary',
                                                                fontWeight: 600,
                                                                textTransform: 'capitalize',
                                                                fontFamily: 'satoshi',
                                                                mb: 2
                                                            }}
                                                        >
                                                            Prize: ₹ {item.price} ;
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: 'text.secondary',
                                                                fontWeight: 600,
                                                                textTransform: 'capitalize',
                                                                fontFamily: 'satoshi',
                                                                mb: 2
                                                            }}
                                                        >
                                                            Total price : ₹ {item.quantity * Number(item.price)}
                                                        </Typography>

                                                    </Grid2>
                                                </Box>

                                                <IconButton
                                                    onClick={() => handleRemoveItem(item.id, item.name, item.selectedSize)}
                                                    sx={{
                                                        color: 'text.secondary',
                                                        '&:hover': {
                                                            color: 'error.main'
                                                        }
                                                    }}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>

                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                    borderRadius: '8px',
                                                    px: 1
                                                }}>
                                                    <IconButton
                                                        onClick={() => handleCartDecrease(item.id, item.quantity)}
                                                        size="small"
                                                        sx={{
                                                            '&:hover': {
                                                                backgroundColor: 'action.hover'
                                                            }
                                                        }}
                                                    >
                                                        <RemoveIcon fontSize="small" />
                                                    </IconButton>

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            px: 2,
                                                            fontWeight: 600,
                                                            fontFamily: 'satoshi'
                                                        }}
                                                    >
                                                        {item.quantity}
                                                    </Typography>

                                                    <IconButton
                                                        onClick={() => handleCartIncrease(item.id, item.quantity, item.stockLeft)}
                                                        size="small"
                                                        sx={{
                                                            '&:hover': {
                                                                backgroundColor: 'action.hover'
                                                            }
                                                        }}
                                                    >
                                                        <AddIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {
                                        index < cartItems.length - 1 && (
                                            <Divider sx={{ my: 1 }} />
                                        )
                                    }
                                </Box>
                            ))}
                        </Box>
                    </Grid2>
                    <Grid2 spacing={2} size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                        <CartSummary cartItems={cartItems} />

                    </Grid2>

                </Grid2>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        py: 8,
                        px: 4,
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            mb: 2,
                            fontWeight: 500
                        }}
                    >
                        Your cart is empty
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            textAlign: 'center'
                        }}
                    >
                        Looks like you haven't added any items to your cart yet.
                    </Typography>
                    <Box src={cartEmpty} sx={{ mt: 2, width: '50%', height: '100%' }} component={'img'} />
                </Box>
            )
            }
        </Container >
    )
}

export default Cart