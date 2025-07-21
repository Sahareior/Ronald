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

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    children: [
      {
        path: '/',
        element: <Homepage />
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
