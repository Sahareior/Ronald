// Homepage.jsx
import { Outlet } from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import GuestLayout from './layouts/GuestLayout';
import SellersLayout from './layouts/SellersLayout';

const Homepage = () => {
  const userType = 'customer'; // hardcoded for now

  if (userType === 'customer') {
    return (
      <CustomerLayout>
        <Outlet />
      </CustomerLayout>
    );
  } else if (userType === 'seller') {
    return (
      <SellersLayout>
        <Outlet />
      </SellersLayout>
    );
  } else {
    return (
      <GuestLayout>
        <Outlet />
      </GuestLayout>
    );
  }
};

export default Homepage;
