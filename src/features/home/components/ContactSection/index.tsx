import { FacebookOutlined, GithubOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import { useState } from 'react';

import home_bg_4 from '../../../../assets/home_bg_3.jpg';
import logo from '../../../../assets/logo.png';
import logo_des from '../../../../assets/logo_des.png';
import { Waiting } from '../../../../components';
import { URLS } from '../../../../libs/config';
import { font } from '../../../../libs/theme';
import { backendService } from '../../../../services';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  content: string;
};

export const ContactSection = () => {
  const [form] = Form.useForm<FormValues>();
  const [sending, setSending] = useState(false);

  const handleSendFeedback = async () => {
    try {
      setSending(true);
      const values = await form.validateFields();

      const dataUpload = {
        action: 'add',
        data: {
          ...values,
          time: new Date().valueOf(),
        },
      };

      const result = await backendService.post('/feedback', dataUpload);
      if (result.kind === 'ok') {
        form.resetFields();
        notification.success({
          message: 'Gửi phản hồi thành công',
          description: 'Cảm ơn bạn đã góp ý, chúng tôi sẽ phản hồi sớm nhất có thể',
        });
      } else {
        notification.error({
          message: 'Gửi phản hồi thất bại',
          description: 'Vui lòng thử lại sau',
        });
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {sending ? <Waiting /> : null}
      <div>
        <Row
          gutter={24}
          align="middle"
          style={{
            padding: '40px 40px',
            backgroundImage: `url(${home_bg_4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
          justify="space-around"
        >
          <Col span={8}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                height: 500,
              }}
            >
              <Typography.Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontFamily: font.josefinSans,
                }}
              >
                Giờ hành chính
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  fontFamily: font.yesevaOne,
                  lineHeight: 1.2,
                  color: '#000',
                }}
              >
                Thời gian hoạt động
              </Typography.Text>
              <Row gutter={[24, 40]} style={{ width: '80%', marginTop: 40 }}>
                <Col
                  span={12}
                  style={{
                    textAlign: 'end',
                    color: '#000',
                  }}
                >
                  Các ngày trong tuần
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: 'start',
                    color: '#000',
                  }}
                >
                  8:00 - 22:00
                </Col>
              </Row>
              <Row gutter={[24, 40]} style={{ width: '80%', margin: '20px 0px' }}>
                <Col
                  span={12}
                  style={{
                    textAlign: 'end',
                    color: '#000',
                  }}
                >
                  Thứ 7 - Chủ nhật
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: 'start',
                    color: '#000',
                  }}
                >
                  9:00 - 20:00
                </Col>
              </Row>
              <Row gutter={[24, 40]} style={{ width: '80%' }}>
                <Col
                  span={12}
                  style={{
                    textAlign: 'end',
                    color: '#000',
                  }}
                >
                  Các ngày lễ
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: 'start',
                    color: '#000',
                  }}
                >
                  Cả ngày
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={3}>
            <img src={logo} alt="logo" style={{ height: 100, objectFit: 'cover' }} />
          </Col>
          <Col span={12}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                border: '2px solid #d3a971',
                height: 400,
              }}
            >
              <iframe
                width="95%"
                height="370"
                src={URLS.videoDemo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          backgroundColor: '#222222',
          width: '100%',
          marginTop: 40,
          padding: '40px 0px',
          color: 'white',
          fontFamily: font.josefinSans,
        }}
      >
        <Row
          gutter={24}
          style={{
            padding: '0px 50px',
          }}
        >
          <Col span={8}>
            <Row>
              <Typography.Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 10,
                }}
              >
                Thông tin liên hệ
              </Typography.Text>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <HomeOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>
                  Quận 12, Thành phố Hồ Chí Minh
                </Typography.Text>
              </Col>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <MailOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>
                  nguyetan01.dev@gmail.com
                </Typography.Text>
              </Col>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <GithubOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>Github</Typography.Text>
              </Col>
            </Row>
            <Row align="middle" gutter={[12, 12]} style={{ margin: '5px 0px' }}>
              <Col span={2}>
                <FacebookOutlined style={{ fontSize: 20 }} />
              </Col>
              <Col span={22}>
                <Typography.Text style={{ color: 'white' }}>Facebook</Typography.Text>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <img
              src={logo_des}
              alt="logo"
              style={{
                height: 45,
                objectFit: 'cover',
                backgroundColor: 'white',
                borderRadius: 5,
              }}
            />
            <br />
            <Typography.Text style={{ color: 'white' }}>
              Sản phẩm được thực hiện bởi Nguyễn Hoài Nguyệt An.
              <br />
              Vui lòng không sao chép dưới bất kỳ hình thức nào.
            </Typography.Text>
          </Col>
          <Col span={8}>
            <Typography.Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 10,
              }}
            >
              Hòm thư
              <br />
              "Lắng nghe đóng góp của bạn"
            </Typography.Text>
            <Form layout="vertical" form={form}>
              <Form.Item
                label={<div style={{ color: 'white' }}>Họ và tên</div>}
                required
                name="name"
                rules={[{ required: true, message: 'Vui lòng điền họ và tên' }]}
              >
                <Input placeholder="Điền họ và tên" />
              </Form.Item>
              <Form.Item
                label={<div style={{ color: 'white' }}>Email</div>}
                required
                name="email"
                rules={[{ required: true, message: 'Vui lòng điền email' }]}
              >
                <Input placeholder="Điền email" />
              </Form.Item>
              <Form.Item
                label={<div style={{ color: 'white' }}>Số điện thoại</div>}
                required
                name="phone"
                rules={[{ required: true, message: 'Vui lòng điền số điện thoại' }]}
              >
                <Input placeholder="Điền số điện thoại" />
              </Form.Item>
              <Form.Item
                label={<div style={{ color: 'white' }}>Nội dung</div>}
                required
                name="content"
                rules={[{ required: true, message: 'Vui lòng điền nội dung' }]}
              >
                <Input.TextArea placeholder="Điền nội dung" />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: '100%', backgroundColor: 'transparent', color: 'white' }}
                  onClick={handleSendFeedback}
                >
                  Gửi về hòm thư
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
