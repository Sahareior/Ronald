import React, { useEffect } from 'react';
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
import { FaBox, FaEdit, FaFantasyFlightGames } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { IoPricetagSharp } from 'react-icons/io5';
import { LuMessageSquareText } from 'react-icons/lu';
import { GrAnalytics } from 'react-icons/gr';
import { MdLogout } from 'react-icons/md';

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: 'admin-overview',
    icon: <GoGraph size={16} />,
    label: <Link to="">Home</Link>,
  },
  {
    key: 'admin-orders',
    icon: <FaCartShopping size={16}/>,
    label: <Link to="admin-orders">Orders</Link>,
  },
  {
    key: 'customers',
    icon: <IoIosPeople size={16}/>,
    label: <Link to="customers">Customers</Link>,
  },
  {
    key: 'vendors',
    icon: <IoPricetagSharp size={16}/>,
    label: <Link to="vendors">Vendor</Link>,
  },
  {
    key: 'sellers-apply',
    icon: <IoPricetagSharp size={16}/>,
    label: <Link to="sellers-apply">Sellers Apply</Link>,
  },
  {
    key: 'productslist',
    icon: <FaBox  size={16}/>,
    label: <Link to="productslist">Products</Link>,
  },
  {
    key: 'messages',
    icon: <LuMessageSquareText size={16}/>,
    label: <Link className='flex w-full items-center gap-2' to="messages">Message <p className='w-4 h-4 gap-5 flex justify-center items-center rounded-full bg-[#CBA135] text-white'>7</p></Link>,
  },
  {
    key: 'analytics',
    icon: <GrAnalytics size={16}/>,
    label: <Link to="analytics">Analytics</Link>,
  },
  {
    key: 'content',
    icon: <FaEdit size={16}/>,
    label: <Link to="content">Content</Link>,
  },
 {
    key: 'settings',
    icon: <FaFantasyFlightGames size={16} />,
    label: 'Settings',
    children: [
      {
        key: 'terms',
        label: <Link to="terms">Terms and Conditions</Link>,
      },
      {
        key: 'privacy',
        label: <Link to="privacy">Privacy Policy</Link>,
      },
    ],
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathKey = location.pathname.split('/')[2] || 'admin-overview';

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 👇 Redirect if directly landing on /admin-dashboard
  if (location.pathname === '/admin-dashboard') {
    return <Navigate to="/admin-dashboard/admin-overview" replace />;
  }

  return (
    <Layout>
      <Layout.Sider
        className="bg-white"
        breakpoint="lg"
        width={250}
        collapsedWidth="0"
      >
               <div className='p-4 flex flex-col gap-14 justify-center items-center'>
         <img className='w-[80%]' src="/image/footer.png" alt="" />
       </div>
        <div className="flex flex-col h-screen justify-between">
          <div className="flex-1 overflow-auto mt-10">
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={[pathKey]}
              items={items}
            />
          </div>
          <Link
            to="/login"
            className="text-red-600 mb-9 hover:text-green-400 flex justify-center items-center gap-2"
          >
            <MdLogout className="-mt-1" size={16} />
            <h3 className="popmed">Logout</h3>
          </Link>
        </div>
      </Layout.Sider>

      <Layout>
        <Layout.Header className="bg-white px-3">
          <div className="flex justify-between">
            <h5 className="text-[20px] font-semibold">Content</h5>
            <div className="flex items-center gap-3">
              <BellOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
              <Link to="/admin-dashboard/admin-profile">
                <Avatar className="w-[30px] h-[30px]" src="https://i.pravatar.cc/40" />
              </Link>
            </div>
          </div>
        </Layout.Header>

        <Layout.Content className="bg-[#FAF8F2] h-[86vh] overflow-y-scroll px-2" style={{ margin: '0' }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;