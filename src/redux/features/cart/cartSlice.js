import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartItems: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { product, selectedSize } = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === product.id && item.selectedSize === selectedSize
            );
            if (existingItem) {
                toast.error(`${product.name} is already in the cart`);
            } else {
                state.cartItems.push({ ...product, quantity: 1, selectedSize });
                toast.success(`${product.name} added to cart`);
            }
        },

        updateItemQuantity: (state, action) => {
            const { id, quantity, selectedSize, product } = action.payload;
            const item = state.cartItems.find(
                (item) => item.id === id && (!selectedSize || item.selectedSize === selectedSize)
            );

            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity;
                } else {
                    toast.error("Quantity must be greater than 0");
                }
            } else if (product) {
                state.cartItems.push({
                    ...product,
                    quantity: quantity || 1,
                    selectedSize: selectedSize || product.selectedSize,
                });
                toast.success(`${product?.name} added to cart`);
            }
        },

        removeCartItem: (state, action) => {
            const { id, selectedSize } = action.payload;
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === id && item.selectedSize === selectedSize
            );
            if (itemIndex >= 0) {
                const removedItem = state.cartItems[itemIndex];
                state.cartItems.splice(itemIndex, 1);
                toast.success(`${removedItem.name} removed from cart`);
            } else {
                toast.error("Item not found in cart");
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            // toast.success("Cart cleared");
        },
    },
});

export const { addItemToCart, updateItemQuantity, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
