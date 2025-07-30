// Homepage.jsx
import { Outlet } from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import GuestLayout from './layouts/GuestLayout';
import SellersLayout from './layouts/SellersLayout';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const userType = 'customer'; // hardcoded for now

  const data = useSelector(state => state.customer.location)

  if (data === 'customer') {
    return (
      <CustomerLayout>
        <Outlet />
      </CustomerLayout>
    );
  } else if (data === 'seller') {
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
