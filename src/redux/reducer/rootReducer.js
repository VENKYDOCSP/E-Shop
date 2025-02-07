import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import categoriesReducer from "../features/category/categorySlice";
import orderReducer from "../features/order/orderSlice";

const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    order: orderReducer
});

export default rootReducer;