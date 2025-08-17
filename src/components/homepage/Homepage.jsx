// Homepage.jsx
import { Outlet } from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import GuestLayout from './layouts/GuestLayout';
import SellersLayout from './layouts/SellersLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerId, selectedLocation } from '../../redux/slices/customerSlice';
import { useEffect } from 'react';

const Homepage = () => {
  const userType = 'customer'; // hardcoded for now
  const dispatch = useDispatch();

  // const data = useSelector(state => state.customer.location)


//  useEffect(() => {
//     const token = localStorage.getItem('token');
//     const customerId = localStorage.getItem('customerId');

//     if (token && customerId) {
//       dispatch(selectedLocation('customer'));
//       dispatch(addCustomerId(customerId));
//     }
//   }, [dispatch]);

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
