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
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: <Link to="dashboard">Home</Link>,
  },
  {
    key: '2',
    icon: <ShoppingCartOutlined />,
    label: <Link to="order">Order</Link>,
  },
];

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [location.pathname]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="bg-white"
        breakpoint="lg"
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
          className="mt-14"
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
               <Input
            placeholder="Search furniture..."
            prefix={<SearchOutlined />}
           className='h-[42px] rounded-[8px] w-[400px] '
          />
         
            <BellOutlined style={{ fontSize: 16, cursor: 'pointer', Color:'black' }} />
        
          <Avatar className='w-[24px] h-[24px]' src="https://i.pravatar.cc/40" />
        </div>
       </div>
        </Header>

        <Content className="h-[90vh] px-6" style={{ margin: '0' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
