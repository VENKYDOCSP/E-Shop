import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialValue = {
    orders: [],
    loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState: initialValue,
    reducers: {
        setOrders: (state, action) => {
            state.orders = [...state.orders, ...action.payload];
        },

        setLoadingComplete: (state) => {
            state.loading = false;
        },

        updateOrderStatus: (state, action) => {
            const { orderId, newStatus } = action.payload;
            const order = state.orders.find((order) => order.orderId === orderId.orderId);

            if (order) {
                order.status = newStatus;
                toast.success("Order status updated successfully");
            } else {
                toast.error("Order not found");
            }
        },
    },
});

export const { setOrders, setLoadingComplete, updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
