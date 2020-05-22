import React from 'react';
import { Space } from 'antd';

export const columnsConfig = [
    {
      title: 'Armaments',
      dataIndex: 'Armaments',
      key: 'Armaments',
    },
    {
      title: 'Breadth(m)',
      dataIndex: 'Breadth(m)',
      key: 'Breadth(m)',
    },
    {
      title: 'Builders',
      dataIndex: 'Builders',
      key: 'Builders',
    },
    {
      title: 'Class',
      dataIndex: 'Class',
      key: 'Class',
    },
    {
      title: 'Commisioned',
      dataIndex: 'Commisioned',
      key: 'Commisioned',
    },
    {
      title: 'Builders',
      dataIndex: 'Builders',
      key: 'Builders',
    },
    {
      title: 'Complement',
      dataIndex: 'Complement',
      key: 'Complement',
    },
    {
      title: 'Displacement',
      dataIndex: 'Displacement',
      key: 'Displacement',
    },
    {
      title: 'Draught(m)',
      dataIndex: 'Draught(m)',
      key: 'Draught(m)',
    },
    {
      title: 'Length(m)',
      dataIndex: 'Length(m)',
      key: 'Length(m)',
    },
    {
      title: 'Range',
      dataIndex: 'Range',
      key: 'Range',
    },
    {
      title: 'Sensors',
      dataIndex: 'Sensors',
      key: 'Sensors',
    },
    {
      title: 'ShipName',
      dataIndex: 'ShipName',
      key: 'ShipName',
    },
    {
      title: 'Speed(knots)',
      dataIndex: 'Speed(knots)',
      key: 'Speed(knots)',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href="/delete">Edit</a>
        </Space>
      ),
    },
  ];