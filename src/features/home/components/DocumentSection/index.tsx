import { CodeOutlined, FieldTimeOutlined, HddOutlined, IdcardOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Typography } from 'antd';

import home_bg_1 from '../../../../assets/home_bg_1.jpg';
import home_bg_2 from '../../../../assets/home_bg_2.jpg';
import home_bg_3 from '../../../../assets/home_bg_3.jpg';
import home_bg_4 from '../../../../assets/home_bg_4.jpg';
import logo from '../../../../assets/logo.png';
import { CustomDivider } from '../../../../components';
import { URLS } from '../../../../libs/config';
import { font } from '../../../../libs/theme';

export const DocumentSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${home_bg_3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          height: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography.Text
          style={{
            fontSize: 20,
            color: '#f7ff09',
            fontWeight: 'bold',
            fontFamily: font.josefinSans,
          }}
        >
          Mục tiêu mong đợi khi thực hiện nghiên cứu
        </Typography.Text>
        <Typography.Title
          level={3}
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 40,
            margin: '5px 0px',
            fontFamily: font.yesevaOne,
          }}
        >
          Tổng quan về ứng dụng Webgis
        </Typography.Title>
        <CustomDivider width={100} thickness={1.5} color="#d3a971" />
        <Row justify="center" gutter={24} style={{ marginTop: 30 }}>
          <Col span={7}>
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: '20px',
                border: '2px solid #d3a971',
                borderRadius: 12,
              }}
            >
              <Typography.Text style={{ color: 'black' }}>
                Hỗ trợ số hoá các dữ liệu trong nhiệm vụ quản lý, lưu trữ tài nguyên.
              </Typography.Text>
              <Avatar
                size={50}
                src={logo}
                style={{ backgroundColor: 'white', margin: '20px 0px' }}
              />
              <Typography.Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Mục tiêu đầu tiên
              </Typography.Text>
              <Typography.Text style={{ color: '#d3a971', fontWeight: 'bold' }}>
                Done!
              </Typography.Text>
            </div>
          </Col>
          <Col span={7}>
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: '20px',
                border: '2px solid #d3a971',
                borderRadius: 12,
              }}
            >
              <Typography.Text style={{ color: 'black' }}>
                Tìm kiếm nhanh chóng và chính xác các điểm trạm, dễ dàng kiểm tra và hỗ trợ khi có
                yêu cầu.
              </Typography.Text>
              <Avatar
                size={50}
                src={logo}
                style={{ backgroundColor: 'white', margin: '20px 0px' }}
              />
              <Typography.Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Mục tiêu thứ hai
              </Typography.Text>
              <Typography.Text style={{ color: '#d3a971', fontWeight: 'bold' }}>
                Done!
              </Typography.Text>
            </div>
          </Col>
          <Col span={7}>
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: '20px',
                border: '2px solid #d3a971',
                borderRadius: 12,
              }}
            >
              <Typography.Text style={{ color: 'black' }}>
                Cán bộ quản lý trạm thực thi nhanh chóng. Các cá nhân ở mọi trình độ dễ nắm bắt các
                thao tác.
              </Typography.Text>
              <Avatar
                size={50}
                src={logo}
                style={{ backgroundColor: 'white', margin: '20px 0px' }}
              />
              <Typography.Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Mục tiêu thứ ba
              </Typography.Text>
              <Typography.Text style={{ color: '#d3a971', fontWeight: 'bold' }}>
                Finished!
              </Typography.Text>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '40px 0px',
        }}
      >
        <Typography.Text
          style={{
            fontFamily: font.josefinSans,
            fontSize: 30,
            marginBottom: 40,
          }}
        >
          Tổng hợp các tài liệu liên quan
        </Typography.Text>
        <Row
          gutter={30}
          style={{
            padding: '0px 40px',
          }}
        >
          <Col span={6}>
            <CodeOutlined style={{ fontSize: 48 }} />
            <br />
            <div
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                margin: '5px 0px',
              }}
            >
              Sơ lược công nghệ sử dụng
            </div>
            <Typography.Text
              style={{
                fontSize: 16,
              }}
            >
              Webgis sử dụng React kết hợp với Leaflet để hiển thị bản đồ. Kết nối back end python
              để tính toán dữ liệu tọa độ các điểm.
            </Typography.Text>
          </Col>
          <Col span={6}>
            <FieldTimeOutlined style={{ fontSize: 48 }} />
            <br />
            <div
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                margin: '5px 0px',
              }}
            >
              Tốc độ tải trang nhanh
            </div>
            <Typography.Text
              style={{
                fontSize: 16,
                whiteSpace: 'pre-line',
              }}
            >
              Duy trì hiệu suất ổn định và không bị gián đoạn. Cải thiện trải nghiệm người dùng ngay
              cả khi có nhiều lượt truy cập cùng lúc
            </Typography.Text>
          </Col>
          <Col span={6}>
            <HddOutlined style={{ fontSize: 48 }} />
            <br />
            <div
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                margin: '5px 0px',
              }}
            >
              Dữ liệu không gian
            </div>
            <Typography.Text
              style={{
                fontSize: 16,
                whiteSpace: 'pre-line',
              }}
            >
              Bản đồ nền địa lý được tạo lập từ Các lớp dữ liệu được thu nhận từ Trung tâm Ứng dụng
              Hệ thống Thông tin Địa lý TP.HCM (HCMGIS)
            </Typography.Text>
          </Col>
          <Col span={6}>
            <IdcardOutlined style={{ fontSize: 48 }} />
            <br />
            <div
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                margin: '5px 0px',
              }}
            >
              Bảo mật
            </div>
            <Typography.Text
              style={{
                fontSize: 16,
                whiteSpace: 'pre-line',
              }}
            >
              Tài khoản đăng nhập được cơ quan, tổ chức cung cấp riêng. Trang web không thu thập bất
              kỳ thông tin nào của người dùng.
            </Typography.Text>
          </Col>
        </Row>
        <div
          style={{
            width: '100%',
            margin: '60px 0px 20px 0px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${home_bg_4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              width: '30%',
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => window.open(URLS.scientificArticle)}
          >
            <Typography.Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: font.josefinSans,
                marginBottom: 40,
              }}
            >
              Báo cáo khoa học
            </Typography.Text>
          </div>
          <div
            style={{
              backgroundImage: `url(${home_bg_2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              width: '30%',
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => window.open(URLS.reportWebgis)}
          >
            <Typography.Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: font.josefinSans,
                marginBottom: 40,
              }}
            >
              Báo cáo ứng dụng Webgis
            </Typography.Text>
          </div>
          <div
            style={{
              backgroundImage: `url(${home_bg_3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              width: '30%',
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => window.open(URLS.slidesPPt)}
          >
            <Typography.Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: font.josefinSans,
                marginBottom: 40,
              }}
            >
              Power Point thuyết trình
            </Typography.Text>
          </div>
        </div>
        <Typography.Text
          style={{
            maxWidth: '60%',
            textAlign: 'center',
          }}
        >
          Các tài liệu được cung cấp ở trên nhằm tăng độ tin cậy và tính chính xác cho ứng dụng.
          Ngoài ra còn hỗ trợ cho các bạn trẻ có thêm nguồn tài liệu phục vụ quá trình học tập,
          nghiên cứu sau này.
        </Typography.Text>
        <br />
        <Typography.Text
          style={{
            maxWidth: '60%',
            textAlign: 'center',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          Nhấn vào tiêu đề. Khám phá hành trình nghiên cứu của tôi nhé!
        </Typography.Text>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Row gutter={24} style={{ padding: '40px 0px' }} justify="space-around">
          <Col span={7}>
            <div
              style={{
                backgroundImage: `url(${home_bg_1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 350,
                width: '100%',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => window.open(URLS.demoPCenter)}
            >
              <Typography.Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: font.josefinSans,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  marginBottom: 20,
                }}
              >
                Demo P-Center
              </Typography.Text>
            </div>
          </Col>
          <Col span={7}>
            <div
              style={{
                backgroundImage: `url(${home_bg_2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 350,
                width: '100%',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                marginTop: 20,
                cursor: 'pointer',
              }}
              onClick={() => window.open(URLS.demoLSCP)}
            >
              <Typography.Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: font.josefinSans,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  marginBottom: 20,
                }}
              >
                Demo LSCP
              </Typography.Text>
            </div>
          </Col>
          <Col
            span={7}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography.Text
              style={{
                fontSize: 20,
                color: '#d3a971',
                fontWeight: 'bold',
                fontFamily: font.josefinSans,
              }}
            >
              Kết quả thực nghiệm
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                fontFamily: font.yesevaOne,
                lineHeight: 1.2,
              }}
            >
              Bạn có thắc mắc?
            </Typography.Text>
            <CustomDivider width={50} color="#d3a971" />
            <Typography.Paragraph
              style={{
                textAlign: 'center',
                margin: '10px 0px 20px 0px',
                fontFamily: font.yesevaOne,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: 'grey',
              }}
            >
              Mỗi mô hình sử dụng trong ứng dụng cho ra các kết quả giống và khác nhau, tuỳ theo
              từng trường hợp. Tại bản Demo sẽ mô tả trực quan, giúp bạn dễ dàng hiểu được cách hoạt
              động và tin tưởng vào khả năng tính toán của mô hình.
            </Typography.Paragraph>
            <Typography.Text
              style={{
                fontWeight: 'bold',
                fontFamily: font.josefinSans,
              }}
            >
              Nhấn vào nút demo - khám phá mô hình
            </Typography.Text>
          </Col>
        </Row>
        <div id="contact" style={{ display: 'flex' }} />
      </div>
    </>
  );
};
