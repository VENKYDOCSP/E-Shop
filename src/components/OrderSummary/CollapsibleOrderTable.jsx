import React, { useState } from 'react';
import {
  Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, Paper, Button
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const CollapsibleOrderTable = ({ orders, handleDialogOpen }) => {
  const [openRow, setOpenRow] = useState(null);

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Payment Mode</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Delivery Charge</TableCell>
            <TableCell>Total (₹)</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => {
              const orderTotal = order.products?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
              const deliveryCharge = orderTotal > 100 ? 10 : 5;

            return (
              <>
                <TableRow key={order.orderId}>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpenRow(openRow === index ? null : index)}
                    >
                      {openRow === index ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.paymentMode}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{deliveryCharge}</TableCell>
                  <TableCell>₹{orderTotal + deliveryCharge}</TableCell>
                  <TableCell>
                    {order.paymentMode === 'online' ? (
                      <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        disabled={order.status === 'Refunded'}
                        onClick={() => handleDialogOpen(order, 'refund')}
                      >
                        Request Refund
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        disabled={order.status === 'Cancelled'}
                        onClick={() => handleDialogOpen(order, 'cancel')}
                      >
                        Cancel
                      </Button>
                    )}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={openRow === index} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Products
                        </Typography>
                        <Table size="small" aria-label="products">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Size</TableCell>
                              <TableCell>Price (₹)</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Address</TableCell>
                              <TableCell>Phone</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.products?.map((product, productIndex) => (
                              <TableRow key={`${product.name}-${productIndex}`}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.selectedSize}</TableCell>
                                <TableCell>₹{product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.address}</TableCell>
                                <TableCell>{product.phone}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleOrderTable;
