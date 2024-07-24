import { GoogleOutlined } from '@ant-design/icons';
import { Button, Layout, notification } from 'antd';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import home_bg_1 from '../../assets/home_bg_1.jpg';
import logo_des from '../../assets/logo_des.png';
import { Waiting } from '../../components';
import { selectUserAuthenticated, selectUserHandling } from '../../features/user/store/selectors';

export const Login = () => {
  const auth = getAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const userAuth = useSelector(selectUserAuthenticated);
  const userHandling = useSelector(selectUserHandling);

  useEffect(() => {
    if (userAuth) {
      navigate(location.state?.from?.pathname || '/', { replace: true });
    }
  }, [location, navigate, userAuth]);

  // const [form] = Form.useForm<{ email: string; pass: string }>();

  // const loginEmail = async () => {
  //   try {
  //     const { email, pass } = await form.validateFields();
  //     signInWithEmailAndPassword(auth, email, pass)
  //       .then(() => {
  //         navigate(location.state?.from?.pathname || '/', { replace: true });
  //       })
  //       .catch((error) => {
  //         if (!error) return;
  //         notification.error({
  //           message: 'Đăng nhập thất bại',
  //           description: error.message,
  //         });
  //       });
  //   } finally {
  //     /* empty */
  //   }
  // };

  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(location.state?.from?.pathname || '/', { replace: true });
      })
      .catch((error) => {
        if (!error) return;
        notification.error({
          message: 'Đăng nhập thất bại',
          description: error.message,
        });
      });
  };

  return (
    <Layout>
      {userHandling ? <Waiting /> : null}
      <Layout.Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
          backgroundImage: `url(${home_bg_1})`,
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px 20px',
            borderRadius: 10,
          }}
        >
          <img src={logo_des} alt="logo" style={{ height: 100 }} />
          {/* <Form form={form} layout="vertical" style={{ width: 220 }}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email không hợp lệ',
                  pattern: new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'),
                },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              name="pass"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
              ]}
            >
              <Input type="password" placeholder="Mật khẩu" size="large" />
            </Form.Item>
          </Form>
          <div>
            <Typography.Link
              style={{
                float: 'right',
                top: -20,
                position: 'relative',
                textDecoration: 'underline',
              }}
            >
              Quên mật khẩu
            </Typography.Link>
          </div> */}
          <div
            style={{
              top: -10,
              position: 'relative',
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            <div style={{ padding: '10px 10px', maxWidth: 240 }}>
              Tìm kiếm các trạm cứu hộ gần bạn, hỗ trợ cứu hộ, cung cấp vật tư y tế khẩn cấp
            </div>

            {/* <Button
              style={{ width: 220, backgroundColor: '#d3a971' }}
              size="large"
              type="primary"
              onClick={loginEmail}
            >
              Đăng nhập
          </Button>*/}
            <div style={{ padding: '10px 10px', maxWidth: 240, fontWeight: 'bold' }}>
              Đăng nhập bằng
            </div>
            <Button
              type="primary"
              style={{ width: 220, backgroundColor: '#db4437' }}
              size="large"
              onClick={loginGoogle}
            >
              <GoogleOutlined />
              Google
            </Button>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
