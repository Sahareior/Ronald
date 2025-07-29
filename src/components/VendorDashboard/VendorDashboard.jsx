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

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <GoGraph size={16} />,
    label: <Link to="vendor-overview">Home</Link>,
  },
  {
    key: '2',
    icon: <FaCartShopping size={16}/>,
    label: <Link to="vendor-order">Orders</Link>,
  },
  {
    key: '3',
    icon: <IoIosPeople size={16}/>,
    label: <Link to="vendor-payment">Payment</Link>,
  },
  {
    key: '4',
    icon: <IoPricetagSharp size={16}/>,
    label: <Link to="promotion">Promotions</Link>,
  },
  {
    key: '5',
    icon: <FaBox  size={16}/>,
    label: <Link to="vendor-products">Products</Link>,
  },
  {
    key: '6',
    icon: <LuMessageSquareText size={16}/>,
    label: <Link className='flex w-full items-center gap-2' to="vendor-message">Message <p className='w-4 h-4 gap-5 flex justify-center items-center rounded-full bg-[#CBA135] text-white'>7</p></Link>,
  },
 
];

const VendorDashboard = () => {
const [isModalOpen, setIsModalOpen] = useState(false)
const location = useLocation();

if (location.pathname === '/vendor-dashboard') {
  return <Navigate to="/vendor-dashboard/vendor-overview" replace />;
}


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
        <div className="demo-logo-vertical bg-white" />
        <Menu
          className="mt-14 max-w-2xl"
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
         className='bg-white px-3'
        >
       <div className='flex justify-between'>
        <h5 className='text-[20px] font-semibold'>Content</h5>
        <div className='flex justify-center items-center gap-3'>

         
            <FaBell onClick={()=> setIsModalOpen(true)} style={{ fontSize: 15, cursor: 'pointer', Color:'black' }} />
        
         <Link to='/vendor-dashboard/vendor-profile'>
          <Avatar className='w-[24px] h-[24px]' src="https://i.pravatar.cc/40" />
         </Link>
         <Link to='/login'>
         <IoExit size={23} />
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
