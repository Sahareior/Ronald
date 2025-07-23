import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';
import DashHome from './components/dashboard/pages/DashHome.jsx';
import Login from './components/auth/Login.jsx';
import Homepage from './components/homepage/Homepage.jsx';
import Signup from './components/auth/Signup.jsx';
import ForgetPass from './components/auth/ForgetPass.jsx';
import VerifyCode from './components/auth/VerifyCode.jsx';
import ResetPass from './components/auth/ResetPass.jsx';
import Congratulations from './components/auth/Congratulations.jsx';
import ProductFilter from './components/homepage/productDetailAndFilter/ProductFilter.jsx';
import Details from './components/homepage/productDetailAndFilter/Details.jsx';
import WhiteList from './components/CartNWhitelist/WhiteList.jsx';
import Cart from './components/CartNWhitelist/Cart.jsx';
import Checkout from './components/checkout/Checkout.jsx';
import ConfirmOrder from './components/checkout/ConfirmOrder.jsx';
import ConfirmationPage from './components/checkout/ConfirmationPage.jsx';
import OrderTracking from './components/checkout/OrderTracking.jsx';
import ActiveUsers from './components/ChatComponents/ActiveUsers.jsx';
import Profile from './components/profile/Profile.jsx';
import SellerReg from './components/homepage/sellersHomepage/sellerRoutes/SellerReg.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    children: [
      {
        path: '/',
        element: <Homepage />,
        children:[
          {
            path: 'filter',
            element: <ProductFilter />
          },
          {
            path: 'details',
            element: <Details />
          },
          {
            path: 'whitelist',
            element: <WhiteList />
          },
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'checkout',
            element: <Checkout />
          },
          {
            path: 'confirm-order',
            element: <ConfirmOrder />
          },
          {
            path: 'order-tracking',
            element: <OrderTracking />
          },
          {
            path: 'order-confirmation',
            element: <ConfirmationPage />
          },
          {
            path: 'active',
            element: <ActiveUsers />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          // seller routes
          {
            path: 'regester-seller',
            element: <SellerReg />
          }

        ]
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'verify',
        element: <VerifyCode />
      },
      {
        path:'forget',
        element: <ForgetPass />
      },
      {
        path:'reset',
        element: <ResetPass />
      },
      {
        path:'congratulations',
        element: <Congratulations />
      },
      
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
