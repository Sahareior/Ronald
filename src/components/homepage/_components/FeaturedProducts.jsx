import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishList } from '../../../redux/slices/customerSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAddProductToCartMutation, useGetCustomerProductsQuery } from '../../../redux/slices/Apis/customersApi';

const MySwal = withReactContent(Swal);

const FeaturedProducts = () => {
  const [addProductToCart] = useAddProductToCartMutation()
  const dispatch = useDispatch();
  const { data: allProducts, isLoading, isError } = useGetCustomerProductsQuery();

const handleCart = async (data) => {
  // Map prod_id to product_id
  const payload = {
    ...data,
  id: data.id,
  quantity: 1,
  product_id:data.id
  };

  // Optionally remove prod_id if backend doesn't need it
  delete payload.prod_id;

  const res = await addProductToCart(payload);
  console.log(res);

  dispatch(addToCart(payload));

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
};


  if (isLoading) return <p className="p-20 text-center">Loading products...</p>;
  if (isError) return <p className="p-20 text-center text-red-500">Failed to load products</p>;

  return (
    <div className="p-20 bg-[#FAF8F2] space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[30px] popbold font-extrabold">Featured Products</h2>
          <p className="text-[18px] text-gray-600">
            Explore our curated furniture categories
          </p>
        </div>
        <Link to="/filter">
          <h3 className="text-[#CBA135] font-medium cursor-pointer hover:underline">
            View All
          </h3>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts?.results?.map((item) => (
          <div className="shadow-md" key={item.id}>
            <div className="bg-white rounded-xl transition relative">
              {/* Wishlist Icon */}
              <div
                onClick={() => {
                  dispatch(addToWishList(item));
                  MySwal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:
                      '<span style="font-family: Poppins, sans-serif;">Item added to Wishlist!</span>',
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
                }}
                className="absolute top-3 right-3 rounded-full p-2 shadow-sm cursor-pointer transition text-white bg-white/10 backdrop-blur-md hover:text-red-400"
              >
                <AiFillHeart size={18} />
              </div>

              {/* Image */}
              <Link to={`/details/${item.id}`}>
                <img
                  src={item.images[0] || "https://via.placeholder.com/300x200"} 
                  alt={item.name}
                  className="w-full h-[192px] object-cover rounded-md mb-4"
                />
              </Link>

              {/* Info */}
              <div className="p-5">
                <h2 className="text-[16px] popbold text-gray-800">{item.name}</h2>
                <p className="text-sm popreg text-gray-500 mb-3">{item.sku}</p>
                <div className="flex justify-between items-center">
                  <h4 className="text-[#CBA135] popbold text-[16px]">
                    XAF {item.active_price}
                  </h4>
                  <button
                    onClick={() => handleCart(item)}
                    className="bg-[#CBA135] rounded-md popbold text-white border-none px-4 py-1 "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
