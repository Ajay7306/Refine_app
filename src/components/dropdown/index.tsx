import React from 'react';
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Settings
      </a>
    ),
  },
  {
    key: '4',
    danger: true,
    label: 'Log Out',
  },
];

export const Dropdowns: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Space>
    </a>
  </Dropdown>
);
