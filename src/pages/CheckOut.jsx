import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Stack,
    Divider,
    Button
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';
import ButtonComponent from '../components/Button';
import { setOrders } from '../redux/features/order/orderSlice';
import { clearCart } from '../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import ReviewOrder from '../components/CheckOut/ReviewOrder';
import OrderForm from '../components/CheckOut/OrderForm';
import Breadcrumbs from '../components/Breadcrumbs ';
import no_orders from '../assets/no_orders.svg';

const CheckOut = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [selectedItems, setSelectedItems] = useState(cartItems || []);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMode, setPaymentMode] = useState('online');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };



    const handlePlaceOrder = () => {
        if (selectedItems.length === 0) {
            toast.error("Please select at least one item to place an order.");
            return;
        }
        toggleDrawer(true);
    };

    const handleSelectedProduct = (item) => {
        // if (selectedItems.length === 1) {
        //     toast.error("Please select at least one item to place an order.");
        //     return;
        // }

        setSelectedItems((previousValue) => {
            const exsisted = previousValue.find((id) => id.id === item.id && id.selectedSize === item.selectedSize);
            if (exsisted) {
                return previousValue.filter((id) => id.id !== item.id || id.selectedSize !== item.selectedSize);
            } else {
                return [...previousValue, item];
            }
        })

    }

    const calculateTotal = () => {
        return selectedItems?.map((item) => item?.price * item?.quantity).reduce((a, b) => a + b, 0);
    };

    const handleOrderSubmission = (e) => {
        e.preventDefault();
        const orderStatus = paymentMode === 'online' ? 'Paid' : 'Pending';
        const uniqueOrderId = Math.floor(Math.random() * 100000);
        const itemsWithDate = selectedItems.map((item) => ({
            ...item,
            orderId: uniqueOrderId,
            date: new Date().toISOString(),
            status: orderStatus,
            phone: phone,
            paymentMode: paymentMode,
            address: address,
        }));

        dispatch(setOrders(itemsWithDate));
        dispatch(clearCart());
        toast.success("Order placed successfully!");
        navigate('/order-details');
        toggleDrawer(false);
    };

    return (
        <Box>
            <Container>
                <Breadcrumbs pageName="Checkout" />
                {cartItems.length === 0 ? (
                    <Box sx={{ textAlign: 'center', mt: 5 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                            Your cart is empty
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                            Looks like you haven’t added anything to your cart yet.
                        </Typography>
                        <Box component="img" src={no_orders} />
                    </Box>
                ) : (
                    <Box sx={{ backgroundColor: 'background.paper', borderRadius: 2, p: 3, mt: 2, boxShadow: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                            Review Your Order
                        </Typography>
                        <ReviewOrder
                            selectedItems={selectedItems}
                            cartItems={cartItems}
                            handlePlaceOrder={handlePlaceOrder}
                            handleSelectedProduct={handleSelectedProduct}
                            calculateTotal={calculateTotal}
                        />
                    </Box>
                )}
            </Container>

            <OrderForm
                drawerOpen={drawerOpen}
                toggleDrawer={toggleDrawer}
                address={address}
                setAddress={setAddress}
                phone={phone}
                setPhone={setPhone}
                paymentMode={paymentMode}
                setPaymentMode={setPaymentMode}
                handleOrderSubmission={handleOrderSubmission}
                selectedItems={selectedItems}
                total={calculateTotal}
            />
        </Box>
    );
};

export default CheckOut;
