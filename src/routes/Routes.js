import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Cart = lazy(() => import('../pages/Cart'));
const OrderDetails = lazy(() => import('../pages/OrderDetails'));
const CheckOut = lazy(() => import('../pages/CheckOut'));
const PageNotFound = lazy(() => import('../pages/NotFound'));

const LoadingScreen = () => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)',
      gap: 2
    }}
  >
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex'
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: 'primary.main',
          animation: 'spin 1.5s linear infinite',
          '@keyframes spin': {
            '0%': {
              transform: 'rotate(0deg)'
            },
            '100%': {
              transform: 'rotate(360deg)'
            }
          }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress
          size={40}
          thickness={4}
          sx={{
            color: 'secondary.main',
            animation: 'spin 2s linear infinite reverse'
          }}
        />
      </Box>
    </Box>
  </Box>
);

const Routes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/products/:id', element: <ProductDetails /> },
    { path: '/cart-details', element: <Cart /> },
    { path: '/checkout', element: <CheckOut /> },
    { path: '/order-details', element: <OrderDetails /> },
    { path: '*', element: <PageNotFound /> },
  ]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {routes}
    </Suspense>
  );
};

export default Routes;