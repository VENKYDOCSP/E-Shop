import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import OrderDetails from '../pages/OrderDetails'
import PageNotFound from '../pages/NotFound'
import CheckOut from '../pages/CheckOut'

const Routes = () => {

    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/products/:id",
            element: <ProductDetails />
        },
        {
            path: "/cart-details",
            element: <Cart />
        },
        {
            path: "/checkout",
            element: <CheckOut />
        },
        {
            path: "/order-details",
            element: <OrderDetails />
        },
        {
            path: "*",
            element: <PageNotFound />
        }
    ])

    return routes
}

export default Routes