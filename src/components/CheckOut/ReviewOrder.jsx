import React from 'react';
import { Box, Stack, Typography, Checkbox, Drawer, Divider } from '@mui/material';
import ButtonComponent from '../Button';

const ReviewOrder = ({ selectedItems, handlePlaceOrder, calculateTotal }) => {
    return (
        <Box>
            <Stack spacing={2}>
                {selectedItems?.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 2,
                            p: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                boxShadow: 2,
                                transform: 'scale(1.01)',
                            },
                        }}
                    >
                        <Checkbox
                            checked={selectedItems?.some(
                                (id) => id.id === item.id && id.selectedSize === item.selectedSize
                            )}
                            onChange={() => handlePlaceOrder(item)}
                            color="primary"
                        />
                        <Box sx={{ ml: 2, flex: 1 }}>
                            <Typography variant="h6">{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Size : {item?.selectedSize}
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="body2" color="text.secondary">
                                    ₹{item?.price} × {item?.quantity}
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    ₹{item?.price * item?.quantity}
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                ))}
            </Stack>

            <Divider sx={{ my: 2 }} />
        
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Box>
                    <Typography variant="subtitle1">Selected Items: {selectedItems?.length}</Typography>
                    <Typography variant="subtitle1">Delivery Charges: ₹{calculateTotal() > 100 ? 10 : 5}</Typography>
                    <Typography variant="h6" fontWeight="bold">
                        Total: ₹{calculateTotal() + (calculateTotal() > 100 ? 10 : 5)}
                    </Typography>
                </Box>
                <ButtonComponent
                    name="Place Order"
                    color="primary"
                    variant="contained"
                    onClick={handlePlaceOrder}
                    disabled={selectedItems.length === 0}
                />
            </Stack>
        </Box>
    );
};

export default ReviewOrder;
