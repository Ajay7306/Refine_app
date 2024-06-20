import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Module } from 'module';
import { Modals } from '../modal';
import { Dropdowns } from '../dropdown';

const { Header, Sider, Content } = Layout;

export const Layouts: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#1668dc' }}>
      <div style={{padding: '10px', display:'flex', justifyContent:'center', alignItems:'center', fontSize: '20px', fontWeight:'900' }}>LPERP</div>
        <Menu
          theme="light"
          mode="inline"
          style={{background:'#1668dc'}}
          defaultSelectedKeys={['5']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Master Data',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Sales',
            },
            {
                key: '4',
                icon: <UploadOutlined />,
                label: 'Purchases',
              },
              {
                key: '5',
                icon: <UploadOutlined />,
                label: 'Chart of Accounts',
              },
              {
                key: '6',
                icon: <UploadOutlined />,
                label: 'Reports',
              },
          ]}
        />
      </Sider>
      <Layout style={{background: '#f3f3f3'}}>
        <Header style={{ padding: 0, background: '#ffffff',display: 'flex', justifyContent:'space-between', alignItems:'center', paddingRight:'10px', paddingLeft:'5px'
         }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 40,
              height: 40,
              background: '#1668dc'
            }}
          />
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'20px'}}>
            <div style={{color:'#464646'}}>Hello, john!</div>
            <Dropdowns />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#ffffff',
            borderRadius: borderRadiusLG,
          }}
        >
          <Modals />
        </Content>
      </Layout>
    </Layout>
  );
};