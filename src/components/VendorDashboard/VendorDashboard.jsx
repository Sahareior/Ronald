import React, { useEffect, useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Input, Badge, Avatar } from 'antd';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GoGraph } from 'react-icons/go';
import { FaCartShopping } from 'react-icons/fa6';
import { FaBell, FaBox, FaEdit, FaFantasyFlightGames } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { IoExit, IoPricetagSharp } from 'react-icons/io5';
import { LuMessageSquareText } from 'react-icons/lu';
import { GrAnalytics } from 'react-icons/gr';
import VendorOverViewModal from '../AdminDashboard/pages/Overview/_subComponents/VendorOverView';
import { MdLogout } from 'react-icons/md';

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <GoGraph size={16} />,
    label: <Link to="vendor-overview">Home</Link>,
    path: 'vendor-overview',
  },
  {
    key: '2',
    icon: <FaCartShopping size={16} />,
    label: <Link to="vendor-order">Orders</Link>,
    path: 'vendor-order',
  },
  {
    key: '3',
    icon: <IoIosPeople size={16} />,
    label: <Link to="vendor-payment">Payment</Link>,
    path: 'vendor-payment',
  },
  {
    key: '4',
    icon: <IoPricetagSharp size={16} />,
    label: <Link to="promotion">Promotions</Link>,
    path: 'promotion',
  },
  {
    key: '5',
    icon: <FaBox size={16} />,
    label: <Link to="vendor-products">Products</Link>,
    path: 'vendor-products',
  },
  {
    key: '6',
    icon: <LuMessageSquareText size={16} />,
    label: (
      <Link className="flex w-full items-center gap-7" to="vendor-message">
        Message{' '}
        <p className="w-4 h-4 gap-5 p-3 flex justify-center text-xs items-center rounded-full bg-[#CBA135] text-white">
          7
        </p>
      </Link>
    ),
    path: 'vendor-message',
  },
];

const VendorDashboard = () => {
const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
const currentKey = location.pathname.split('/')[1];

const currentPath = location.pathname.split('/')[2]; // vendor-dashboard/**vendor-products**
const activeItem = items.find(item => item.path === currentPath);
const selectedKey = activeItem ? [activeItem.key] : [];




  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="bg-white"
        breakpoint="lg"
        width={250}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
       <div className='p-4 flex flex-col gap-10 justify-center items-center'>
         <img className='w-[80%]' src="/image/footer.png" alt="" />

<div className='flex justify-center items-center gap-3 flex-col'>
           <img className='h-[60px] w-[60px] rounded-full' src="/image/decor.png" alt="" />

         <p className='popmed text-lg text-[#666666]'>Home Decor Masters</p>
</div>
       </div>
       <hr className='pb-3' />
     <div className='flex flex-col h-screen justify-around'>
    <div className="flex-1 justify-between  h-screen overflow-auto">
    <Menu
      theme="light"
      mode="inline"
      
      selectedKeys={selectedKey}
      items={items}
      className="popreg text-lg space-y-2"
      
    />
  </div>
  <Link to='/login'
   className='text-red-600 mb-9 hover:text-green-400 flex justify-center items-center gap-2'>
    <MdLogout className='-mt-1' size={16} />
    <h3 className='popmed'>Logout</h3>
  </Link>
</div>
      </Sider>
      <Layout>
        <Header
         className='bg-white px-3'
        >
       <div className='flex justify-between'>
        <h5 className='text-[20px] font-semibold'>Content</h5>
        <div className='flex justify-center items-center gap-3'>

         
            <FaBell className='mt-1' size={19} onClick={()=> setIsModalOpen(true)} style={{  cursor: 'pointer', Color:'black' }} />
        
         <Link to='/vendor-dashboard/vendor-profile'>
          <Avatar className='w-[34px] h-[34px]' src="https://i.pravatar.cc/40" />
         </Link>
  
        </div>
       </div>
        </Header>

        <Content className="bg-[#FAF8F2] h-[85vh] overflow-y-scroll px-2" style={{ margin: '0' }}>
          <Outlet />
        </Content>
      </Layout>
      <VendorOverViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} location={'a'} />
    </Layout>
  );
};

export default VendorDashboard;
