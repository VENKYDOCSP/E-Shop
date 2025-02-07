import { Box, Container, Typography, Paper, Button } from '@mui/material';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../components/Breadcrumbs ';
import DialogBox from '../components/OrderSummary/Dialog';
import { updateOrderStatus } from '../redux/features/order/orderSlice';
import CollapsibleOrderTable from '../components/OrderSummary/CollapsibleOrderTable';
import noRecords from '../assets/no-records.svg'

const OrderDetails = () => {
    const orderData = useSelector((state) => state.order.orders) || [];

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [statusChange, setStatusChange] = useState(null);

    const dispatch = useDispatch();
    const handleStatusChange = (orderId, newStatus) => {
        dispatch(updateOrderStatus({ orderId, newStatus }));
    }
    const handleDialogOpen = (order, status) => {
        setSelectedOrder(order);
        setStatusChange(status);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setSelectedOrder(null);
        setOpenDialog(false);
        setStatusChange(null);
    };

    const formattedOrders = orderData.reduce((acc, order) => {
        const existingOrder = acc.find((o) => o.orderId === order.orderId);
        if (existingOrder) {
            existingOrder.products.push(order);
        } else {
            acc.push({
                orderId: order.orderId,
                date: order.date,
                status: order.status,
                paymentMode: order.paymentMode,
                address: order.address,
                phone: order.phone,
                products: [order],
            });
        }
        return acc;
    }, []);

    return (
        <Container>
            <Breadcrumbs pageName="Order Details" />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 0.4, mt: 3, mb: 0 }}>Order Details</Typography>
            {orderData.length > 0 ? (
                <CollapsibleOrderTable orders={formattedOrders} handleDialogOpen={handleDialogOpen} />
            ) : (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="h6">No orders available.</Typography>
                    <Box sx={{ mt: 2 }} component={'img'} alt="no records" width={'50%'} src={noRecords} />
                </Box>  
            )}

            <DialogBox
                openDialog={openDialog}
                selectedOrder={selectedOrder}
                statusChange={statusChange}
                handleDialogClose={handleDialogClose}
                handleStatusChange={handleStatusChange}
            />
        </Container>
    );
};

export default OrderDetails;
