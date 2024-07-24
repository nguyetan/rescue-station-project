import { FormOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Row, Typography } from 'antd';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
import { Waiting } from '../../components';
import { FeedbackRender, UsersRender } from '../../features/manager/compoments';
import { selectManagerHandling } from '../../features/manager/store/selectors';

const Manager = () => {
  const [activeSection, setActiveSection] = useState('users');
  const handling = useSelector(selectManagerHandling);

  const content = useMemo(() => {
    switch (activeSection) {
      case 'users':
        return <UsersRender />;
      case 'feedbacks':
        return <FeedbackRender />;
      default:
        return null;
    }
  }, [activeSection]);

  return (
    <Layout style={{ height: '100vh' }}>
      {handling ? <Waiting /> : null}
      <Layout.Sider style={{ backgroundColor: 'white' }}>
        <Row align="middle" style={{ padding: 10 }}>
          <img src={logo} alt="logo" style={{ height: 30, marginRight: 10 }} />
          <Typography.Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Rescue Station
          </Typography.Text>
        </Row>
        <Menu
          mode="inline"
          defaultSelectedKeys={['users']}
          style={{ height: '100%', borderRight: 0 }}
          onSelect={({ key }) => {
            setActiveSection(key);
          }}
          items={[
            {
              key: 'users',
              label: (
                <Row align="middle">
                  <UserOutlined style={{ marginRight: 5 }} />
                  Users
                </Row>
              ),
            },
            {
              key: 'feedbacks',
              label: (
                <Row align="middle">
                  <FormOutlined style={{ marginRight: 5 }} />
                  Feedbacks
                </Row>
              ),
            },
          ]}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ backgroundColor: 'white' }}>
          <Typography.Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Quản Lý
          </Typography.Text>
        </Layout.Header>
        <Layout.Content
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 12,
          }}
        >
          {content}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Manager;
