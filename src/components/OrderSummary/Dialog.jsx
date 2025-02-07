import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'

const DialogBox = ({ openDialog, selectedOrder, statusChange, handleDialogClose, handleStatusChange }) => {
    console.log(selectedOrder, "selectedOrder")
    return (
        <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>
                {statusChange === "refund" ? "Request Refund" : "Cancel Order"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {statusChange === "refund"
                        ? `Are you sure you want to request a refund for Order ID ${selectedOrder?.orderId}?`
                        : `Are you sure you want to cancel this order? The Order ID is ${selectedOrder?.orderId}.`}

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                    No
                </Button>
                <Button
                    onClick={() => {
                        if (statusChange === "refund") {
                            handleStatusChange(selectedOrder, "Refunded");
                        } else {
                            handleStatusChange(selectedOrder, "Cancelled");
                        }
                        handleDialogClose();
                    }}
                    color={statusChange === "refund" ? "warning" : "error"}
                >
                    Yes, {statusChange === "refund" ? "Request Refund" : "Cancel Order"}
                </Button>
            </DialogActions>
        </Dialog>


    )
}

export default DialogBox