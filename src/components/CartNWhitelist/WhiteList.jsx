import { Button, Rate } from 'antd';
import React from 'react';
import Breadcrumb from '../others/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import { addToCart } from '../../redux/slices/customerSlice';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal);

const WhiteList = () => {

const dispatch = useDispatch()
const wishList = useSelector(state => state.customer.wishlist)

  const handleCart =(data)=>{
    dispatch(addToCart(data))
        MySwal.fire({
  position: 'top-end',
  icon: 'success',
  title: '<span style="font-family: Poppins, sans-serif;">Item added to cart!</span>',
  background: '#FFFFFF',
  customClass: {
    popup: 'rounded-xl shadow-lg',
    title: 'text-lg text-gray-800',
    icon: 'text-green-500'
  },
  showConfirmButton: false,
  timer: 1800,
  toast: true,
  didOpen: (toast) => {
    toast.style.border = '1px solid #e0e0e0';
    toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
  }
});
  }
    return (
        <div className='mx-40 min-h-screen pb-9'>
            <Breadcrumb />

            <div className='py-4'>
                <p className='text-[30px] font-bold'>My Wishlist</p>
                <p className='text-[16px]'>Your saved favorites, all in one place.</p>
            </div>

                  <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishList.map((product) => (
            <div key={product.id} className="bg-white  rounded-2xl shadow-md relative">
              <img src={product.img} alt={product.title} className="w-full rounded-t-2xl h-64 object-cover  mb-4" />
             <div className='px-4 space-y-3 p-3'>
                 <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <div className='flex gap-2'>
                <Rate disabled defaultValue={product.rating} className="text-yellow-500 text-sm mb-1" />
                <p>(123)</p>
              </div>
                <div className='flex justify-between items-center gap-10'>
                                  <p className="text-lg font-bold ">${product.price}</p>
              <button onClick={()=> handleCart(product)} type="primary" block className="bg-yellow-600 text-white px-5 py-1 rounded-lg hover:bg-yellow-700">
                Add to Cart
              </button>
                </div>
             </div>
              {/* Wishlist icon (top right) */}
         

            </div>
          ))}
        </div>
        </div>
    );
};

export default WhiteList;