import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Dashboard from './components/AdminDashboard/AdminDashboard.jsx';
import DashHome from './components/AdminDashboard/pages/Overview/DashHome.jsx';
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
import Checkout1 from './components/checkout/Checkout1.jsx';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx';
import Orders from './components/AdminDashboard/pages/order/Orders.jsx';
import Analytics from './components/AdminDashboard/pages/analytics/Analytics.jsx';
import Customers from './components/homepage/_components/Customers.jsx';
import CustomerList from './components/AdminDashboard/pages/CustomerList/CustomerList.jsx';
import VendorList from './components/AdminDashboard/pages/vendorlist/VendorList.jsx';
import ProductsList from './components/AdminDashboard/pages/products/ProductsList.jsx';
import AddnewProducts from './components/AdminDashboard/pages/products/AddnewProducts.jsx';
import AllMessages from './components/AdminDashboard/pages/Messages/AllMessages.jsx';
import Content from './components/AdminDashboard/pages/content/Content.jsx';
import AdminProfile from './components/AdminDashboard/pages/Profile/AdminProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // default homepage layout
        element: <Homepage />, // this handles Guest/Customer/Seller layout
        children: [
          { path: "filter", element: <ProductFilter /> },
          { path: "details", element: <Details /> },
          { path: "whitelist", element: <WhiteList /> },
          { path: "cart", element: <Cart /> },
          { path: "checkout", element: <Checkout /> },
          { path: "cart/checkout1", element: <Checkout1 /> },
          { path: "confirm-order", element: <ConfirmOrder /> },
          { path: "order-track", element: <OrderTracking /> },
          { path: "order-confirmation", element: <ConfirmationPage /> },
          { path: "active", element: <ActiveUsers /> },
          { path: "profile", element: <Profile /> },
          { path: "regester-seller", element: <SellerReg /> }, // accessible at /regester-seller
        ],
      },
      // ✅ These are outside Homepage layout
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "verify", element: <VerifyCode /> },
      { path: "forget", element: <ForgetPass /> },
      { path: "reset", element: <ResetPass /> },
      { path: "congratulations", element: <Congratulations /> },
    ],
  },
  {
    path:'admin-dashboard',
    element: <AdminDashboard />,
    children: [
      {
        path: 'admin-overview',
        element: <DashHome />
      },
      {
        path: 'admin-orders',
        element: <Orders />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'customers',
        element: <CustomerList />
      },
      {
        path: 'vendors',
        element: <VendorList />
      },
      {
        path: 'productslist',
        element: <ProductsList />
      },
      {
        path: 'addproducts',
        element: <AddnewProducts />
      },
      {
        path: 'messages',
        element: <AllMessages />
      },
      {
        path: 'content',
        element: <Content />
      },
      {
        path: 'admin-profile',
        element: <AdminProfile />
      },
    ]

  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
