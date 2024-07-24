import './style.css';

import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Layout, Row, Typography } from 'antd';
import { getAuth, signOut } from 'firebase/auth';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import logo_des from '../../assets/logo_des.png';
import { Waiting } from '../../components';
import {
  ContactSection,
  DocumentSection,
  HomeSection,
  InfoSection,
} from '../../features/home/components';
import {
  selectUserAuthenticated,
  selectUserData,
  selectUserHandling,
} from '../../features/user/store/selectors';

const sections = {
  home: 'Trang chủ',
  info: 'Giới thiệu',
  document: 'Tài liệu',
  contact: 'Liên hệ',
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigator = useNavigate();
  const userAuth = useSelector(selectUserAuthenticated);
  const user = useSelector(selectUserData);
  const userHandling = useSelector(selectUserHandling);

  const { photoURL, name } = useMemo(() => {
    return user! || {};
  }, [user]);

  return (
    <Layout>
      {userHandling ? <Waiting /> : null}
      <Layout.Header
        style={{
          backgroundColor: 'white',
          height: 70,
          lineHeight: 0,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Row align="middle">
          <Col span={6}>
            <img src={logo_des} alt="logo" style={{ height: 70 }} />
          </Col>
          <Col span={18}>
            <Row gutter={24} style={{ float: 'right' }} align="middle">
              {user?.isAdmin ? (
                <Col>
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#d3a971' }}
                    onClick={() => navigator('/manager')}
                  >
                    Quản lý
                  </Button>
                </Col>
              ) : null}
              {Object.entries(sections).map(([sectionId, name]) => (
                <Col key={sectionId}>
                  <a
                    style={{ color: activeSection === sectionId ? '#d3a971' : 'black' }}
                    onClick={() => setActiveSection(sectionId)}
                    href={`#${sectionId}`}
                  >
                    {name}
                  </a>
                </Col>
              ))}
              {!userAuth ? (
                <Col>
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#d3a971' }}
                    onClick={() => navigator('/login')}
                  >
                    Đăng nhập
                  </Button>
                </Col>
              ) : (
                <Col>
                  <Row align="middle">
                    <Avatar size="small" src={photoURL} />
                    <Typography.Text style={{ margin: '0px 5px' }}>{name}</Typography.Text>
                    <LogoutOutlined style={{ fontSize: 18 }} onClick={() => signOut(getAuth())} />
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content>
        <div id="home" style={{ display: 'flex' }} />
        <HomeSection />
        <InfoSection />
        <DocumentSection />
        <ContactSection />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
