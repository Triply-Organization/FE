import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiFillDashboard, AiOutlineUnorderedList } from 'react-icons/ai';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import './CMSCustomer.scss';

const { Content, Sider } = Layout;

const CMSCustomer = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState(['dashboard']);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('dashboard')) setUrl(['dashboard']);
    else setUrl('tours');
  }, [location.pathname]);

  return (
    <Layout className="layout-cms-customer">
      <Sider width={200}>
        <Menu
          mode="inline"
          selectedKeys={url}
          style={{
            height: '100%',
            borderRight: 0,
          }}
        >
          <Menu.Item key="dashboard" icon={<AiFillDashboard />}>
            <Link to={'dashboard'}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            key="tours"
            icon={<AiOutlineUnorderedList />}
            onClick={() => navigate('tours')}
          >
            Tours
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
          height: 'fit-content',
        }}
      >
        <Content className="cms-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CMSCustomer;