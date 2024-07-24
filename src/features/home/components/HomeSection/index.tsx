import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import home_bg_1 from '../../../../assets/home_bg_1.jpg';
import { font } from '../../../../libs/theme';

export const HomeSection = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${home_bg_1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: window.innerHeight - 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography.Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: font.yesevaOne,
          fontSize: 70,
          fontWeight: 'bold',
          letterSpacing: 2,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Đề xuất phương án bố trí
      </Typography.Text>
      <Typography.Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: font.yesevaOne,
          fontSize: 60,
          fontWeight: 'bold',
          letterSpacing: 2,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Trạm cứu hộ đường thủy
      </Typography.Text>
      <Typography.Title
        level={5}
        style={{
          color: 'white',
          textAlign: 'center',
          letterSpacing: 1.2,
          margin: '40px 0px',
          fontFamily: font.josefinSans,
        }}
      >
        Tìm kiếm các trạm cứu hộ gần bạn, hỗ trợ cứu hộ, cung cấp vật tư y tế khẩn cấp
      </Typography.Title>
      <Row gutter={24}>
        <Col>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: '#d3a971', width: 300 }}
            onClick={() => navigate('/webgis')}
          >
            Chuyển tới trang webgis
            <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>
      <div id="info" style={{ display: 'flex' }} />
    </div>
  );
};
