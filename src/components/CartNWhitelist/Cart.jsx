import { Button, Radio } from 'antd';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../others/Breadcrumb';
import { useGetAppCartQuery } from '../../redux/slices/Apis/customersApi';

const products = [
  {
    id: 1,
    title: "Luxury Velvet Sectional Sofa",
    brand: "Elegant Furniture Co.",
    price: 3000,
    img: "https://images.unsplash.com/photo-1577977404260-4bf12328b122?q=80&w=1169&auto=format&fit=crop"
  },

];

const CartItem = ({ item, onIncrease, onDecrease, onRemove, formatXAF }) => (
  <div className="bg-white rounded-xl mt-6 p-5 flex items-center gap-6 shadow-sm">
    <img
      src={item.images?.[0]?.url || "https://via.placeholder.com/150"}
      alt={item.name}
      className="h-32 w-32 object-cover rounded-lg"
    />

    <div className="flex-1">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-sm text-gray-500">SKU: {item.sku}</p>
      <p className="text-xl font-bold text-[#CBA135] mt-2">
        {formatXAF(parseFloat(item.active_price))}
      </p>
    </div>

    <div className="flex items-center gap-2">
      <button onClick={() => onDecrease(item.id)} className="w-8 h-8 border rounded-full hover:bg-gray-100 flex justify-center items-center">
        <AiOutlineMinus size={16} />
      </button>
      <span className="px-2 font-medium">{item.quantity}</span>
      <button onClick={() => onIncrease(item.id)} className="w-8 h-8 border rounded-full hover:bg-gray-100 flex justify-center items-center">
        <AiOutlinePlus size={16} />
      </button>
      <button onClick={() => onRemove(item.id)} className="ml-3 text-gray-400 hover:text-red-500">
        <AiOutlineClose size={20} />
      </button>
    </div>
  </div>
);



const Cart = () => {
 const [deliveryType, setDeliveryType] = useState("standard");
  const [couponCode, setCouponCode] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const { data: cartData } = useGetAppCartQuery();
   console.log(cartData,"aca")
  // Map API cart data to local state
  const [cartItems, setCartItems] = useState([]);

  React.useEffect(() => {
    if (cartData?.results) {
      const items = cartData.results.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        ...item.product,
      }));
      setCartItems(items);
    }
  }, [cartData]);

  // Format XAF currency
  const formatXAF = (amount) => `XAF ${Number(amount).toLocaleString()}`;

  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (parseFloat(item.active_price || 0) * item.quantity),
    0
  );

  const deliveryFee =
    deliveryType === "express" ? 100 : deliveryType === "pickup" ? 0 : 50;
  const tax = Math.round(subtotal * 0.05);
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const total = subtotal + deliveryFee + tax - discount;

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-[#FAF8F2] min-h-screen pb-10">
      <div className='m'></div>
      <div className="mx-auto px-40">
        <Breadcrumb />
        <h2 className="text-3xl font-bold mb-6">My Cart</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1 p-5 bg-[#EAE7E1]">
            {cartItems.map(item => (
             <CartItem
  key={item.id}
  item={item}
  onIncrease={increaseQuantity}
  onDecrease={decreaseQuantity}
  onRemove={removeItem}
  formatXAF={formatXAF}   // 👈 pass it
/>

            ))}

            <div className="bg-white rounded-2xl mt-6 p-6 shadow-sm">
              <h4 className="text-base font-medium text-gray-800 mb-2">
                Delivery Instructions <span className="text-sm text-gray-500">(optional)</span>
              </h4>
              <textarea
                className="w-full border border-[#CBA135] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#CBA135] resize-none"
                rows={4}
                value={deliveryInstructions}
                onChange={(e) => setDeliveryInstructions(e.target.value)}
                placeholder="Add any specific delivery notes here..."
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className='flex flex-col gap-12'>
            <div className="w-full lg:w-[350px] bg-white p-6 rounded-xl shadow-sm h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span>{formatXAF(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>{formatXAF(deliveryFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatXAF(tax)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedCoupon.code})</span>
                    <span>-{formatXAF(discount)}</span>
                  </div>
                )}
              </div>

              {/* Promo Code */}
              <div className="mt-5">
                <div className="flex gap-2">
                  <input 
                    placeholder="Promo code" 
                    className="w-full border border-[#D1D5DB] rounded-md px-4 h-[40px] placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button 
                    className="h-[40px] text-white bg-[#2B2B2B] hover:bg-gray-200"
                    onClick={() => {
                      setAppliedCoupon({
                        code: couponCode,
                        discount: 1000, 
                      });
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </div>

              <div className="flex justify-between text-lg font-semibold mt-6">
                <h3>Total</h3>
                <h3 className='text-[#CBA135]'>{formatXAF(total)}</h3>
              </div>

              {/* Checkout Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <Link 
                  to='checkout1' 
                  state={cartData} 
                  className='w-full block'
                >
                  <button className="h-[56px] rounded-md w-full bg-[#CBA135] text-white font-semibold hover:bg-yellow-600">
                    Proceed to Checkout
                  </button>
                </Link>
                <button className="h-[56px] hover:bg-slate-100 border rounded-md border-gray-300">Save for Later</button>
              </div>
            </div>
            
            <div className="bg-white p-4 py-8 rounded-lg shadow-sm space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">Delivery Type</h3>
              <Radio.Group 
                className="flex flex-col gap-4 custom-radio"
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
              >
                <Radio value="standard">Standard ({formatXAF(50)})</Radio>
                <Radio value="express">Express ({formatXAF(100)})</Radio>
                <Radio value="pickup">Pickup (Free)</Radio>
              </Radio.Group>
            </div>
          </div>
        </div>

        <div className='py-9'>
          <div className='flex py-9 justify-between '>
            <h4 className='popmed text-[30px]'>You may also need</h4>
            <h5 className='popbold text-[16px] text-[#CBA135]'>View All</h5>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md relative">
                <img src={product.img} alt={product.title} className="w-full rounded-t-2xl h-64 object-cover mb-4" />
                <div className='px-4 space-y-2 pb-5'>
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <div className='flex justify-between items-center gap-10'>
                    <p className="text-lg text-[#CBA135] font-bold mb-3">{product.price}</p>
                    <Button type="primary" block className="bg-yellow-600 max-w-[10rem] py-4 hover:bg-yellow-700">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-red-600 w-6 h-6 flex items-center justify-center hover:text-red-500 bg-slate-200 rounded-full cursor-pointer text-lg">
                  ♡
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10 bg-[#E6E3DD] px-5 sm:px-10 md:px-10 lg:px-20 xl:px-60 py-12 w-full">
        {/* Left Block */}
        <div className="flex flex-col gap-4 w-full lg:max-w-md text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <img src="/image/hand.png" alt="hand" className="w-10 h-10" />
            <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] popmed">Shopping Assistance</h2>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] popmed">
            Have a question before you checkout? We're here to help!
          </p>
          <button className="flex items-center justify-center lg:justify-start gap-2 text-[#CBA135] text-[15px] sm:text-[16px] hover:underline">
            <IoChatbubblesOutline className="text-xl" /> Chat Now
          </button>
        </div>

        {/* Right Block */}
        <div className="flex flex-col gap-4 w-full lg:max-w-md text-center lg:text-right">
          <div className="flex items-center justify-center lg:justify-end gap-3">
            <img src="/image/hand.png" alt="hand" className="w-10 h-10" />
            <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] popmed">30- Day Returns</h2>
          </div>
          <p className="text-[14px] text-start sm:text-[15px] md:text-[16px] popmed">
            Not loving it? We offer return for most item within 30 Days delivery for a refund or store credit.
          </p>
          <button className="flex items-center justify-center lg:justify-end gap-2 text-[#CBA135] text-[15px] sm:text-[16px] hover:underline">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;