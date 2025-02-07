import React from 'react';
import {
    SwipeableDrawer,
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Box,
    Typography,
    Divider,
    Stack
} from '@mui/material';

const OrderForm = ({
    drawerOpen,
    toggleDrawer,
    address,
    setAddress,
    phone,
    setPhone,
    paymentMode,
    setPaymentMode,
    handleOrderSubmission,
    selectedItems,
    total,
    cartItems
}) => {
    // const getSelectedItemsDetails = () => {
    //     return selectedItems.map(id => 
    //         cartItems?.find(item => item.id === id)
    //     );
    // };

    // const calculateTotal = () => {
    //     return getSelectedItemsDetails().reduce((total, item) => 
    //         total + (item.price * item.quantity), 0
    //     );
    // };

    return (
        <SwipeableDrawer
            anchor="right"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
            PaperProps={{
                sx: { width: { xs: '100%', sm: 400 } }
            }}
        >
            <Box sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Order Summary
                </Typography>

                <Stack spacing={2} sx={{ mb: 3 }}>
                    {selectedItems?.map((item) => (
                        <Box key={item?.id}>
                            <Typography>{item?.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                ₹{item?.price} × {item?.quantity}
                            </Typography>
                        </Box>
                    ))}
                </Stack>

                <Typography variant="h6" sx={{ mb: 3 }}>
                    Total: ₹{total() + (total() > 100 ? 10 : 5)}
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <form onSubmit={handleOrderSubmission}>
                    <Stack spacing={3}>
                        <TextField
                            label="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            multiline
                            rows={3}
                            fullWidth
                        />

                        <TextField
                            label="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            fullWidth
                            type="tel"
                            inputProps={{
                                pattern: '[0-9]*',
                                minLength: 10,
                                maxLength: 10,
                            }}
                            error={phone.length > 0 && phone.length < 10} 
                            helperText={phone.length > 0 && phone.length < 10 ? "Phone number must be 10 digits" : ""}
                        />


                        <FormControl fullWidth required>
                            <InputLabel>Payment Mode</InputLabel>
                            <Select
                                value={paymentMode}
                                onChange={(e) => setPaymentMode(e.target.value)}
                            >
                                <MenuItem value="online">Online</MenuItem>
                                <MenuItem value="cash">Direct Cash</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            color="white"

                            fullWidth
                            size="large"
                            sx={{
                                mt: 2,
                                borderRadius: 2,
                                py: 1.5,
                                backgroundColor: '#000000',
                                color: '#ffffff'
                            }}
                        >
                            Place Order
                        </Button>
                    </Stack>
                </form>
            </Box>
        </SwipeableDrawer>
    );
};

export default OrderForm;