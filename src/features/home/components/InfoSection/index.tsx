import { Col, Row, Typography } from 'antd';

import home_bg_2 from '../../../../assets/home_bg_2.jpg';
import { CustomDivider } from '../../../../components';
import { font } from '../../../../libs/theme';

export const InfoSection = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '40px 0px',
        }}
      >
        <Typography.Title
          level={2}
          style={{ textAlign: 'center', margin: '0px 0px', color: '#d3a971' }}
        >
          Ứng dụng Webgis Trạm cứu hộ đường thủy
        </Typography.Title>
        <Typography.Title
          level={3}
          style={{
            textAlign: 'center',
            margin: '10px 0px',
            maxWidth: '80%',
            fontFamily: font.yesevaOne,
          }}
        >
          Sử dụng mô hình P-Center và LSCP để tìm kiếm các trạm cứu hộ, đáp ứng thời gian giải cứu
          cho các tàu du lịch
        </Typography.Title>
        <CustomDivider width={100} thickness={1.5} color="#d3a971" />
      </div>
      <div
        style={{
          backgroundImage: `url(${home_bg_2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography.Text
          style={{
            fontSize: 18,
            color: 'white',
            fontFamily: font.josefinSans,
          }}
        >
          Ứng dụng được thiết kế phù hợp cho các du khách
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: 45,
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            maxWidth: '80%',
            padding: '10px 0px',
            fontFamily: font.yesevaOne,
          }}
        >
          Tìm kiếm và tham khảo cách thức liên lạc phù hợp cho từng đối tượng phục vụ.
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: 18,
            color: 'white',
          }}
        >
          Hãy tham gia sử dụng dịch vụ để an tâm hơn trong chuyến hành trình du lịch đường thuỷ của
          bạn!
        </Typography.Text>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '80px 0px',
        }}
      >
        <Typography.Text
          style={{
            fontSize: 18,
            color: '#d3a971',
            textAlign: 'center',
            margin: '0px 0px',
            letterSpacing: 1.5,
            fontWeight: 'bold',
            fontFamily: font.josefinSans,
          }}
        >
          Phạm vi sử dụng phần mềm
        </Typography.Text>
        <Typography.Title
          level={3}
          style={{
            textAlign: 'center',
            margin: '0px 0px 10px 0px',
            maxWidth: '80%',
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: font.yesevaOne,
          }}
        >
          Các đơn vị, cá nhân sử dụng phần mềm
        </Typography.Title>
        <CustomDivider width={100} color="#d3a971" />
        <Typography.Paragraph style={{ maxWidth: '50%', textAlign: 'center', margin: '20px 0px' }}>
          Ứng dụng Webgis Trạm cứu hộ đường thuỷ được tạo ra để các Cán bộ quản lý trạm dễ dàng quản
          lý, kiểm tra và tìm kiếm các trạm cứu hộ khi có nhu cầu. Đồng thời, các cá nhân không
          thuộc các cơ quan, tổ chức vẫn truy xuất được các điểm trạm cứu hộ để nắm giữ liên lạc,
          đảm bảo an toàn trong suốt hành trình du lịch đường thuỷ.
        </Typography.Paragraph>
        <Row gutter={25} justify="center">
          <Col span={10} style={{ float: 'right' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  width: 150,
                  textAlign: 'center',
                  float: 'right',
                  borderBottom: '2px solid #d3a971',
                  marginBottom: 40,
                  padding: '10px 0px',
                }}
              >
                Các cơ quan, tổ chức
              </div>
            </div>
            <div
              style={{
                border: '1px solid #d3a971',
                borderRadius: 14,
                padding: '20px',
              }}
            >
              <div style={{ height: 85 }}>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Cảnh sát Phòng cháy chữa cháy và Cứu nạn, cứu hộ (PCCC&CNCH)
                  </Typography.Text>
                </div>
                <Typography.Text style={{ whiteSpace: 'pre-line' }}>
                  Các tổ chức, cá nhân gọi điện thoại báo tin khẩn cấp khi có sự cố cháy, nổ, tai
                  nạn xảy ra. {'\n'}Tổng đài: 114
                </Typography.Text>
              </div>
              <div style={{ width: '85%' }}>
                <CustomDivider dashed />
              </div>
              <div style={{ height: 85, marginTop: 5 }}>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                  Trạm cấp cứu 115 đường thuỷ, Trạm cứu hộ, hỗ trợ y tế
                  </Typography.Text>
                </div>
                <Typography.Text style={{ whiteSpace: 'pre-line' }}>
                  Các tổ chức, cá nhân gọi điện thoại khi cần hỗ trợ tranng thiết bị, vật tư y tế
                  {'\n'}
                  Tổng đài: [đang cập nhật]
                </Typography.Text>
              </div>
              <div style={{ width: '85%' }}>
                <CustomDivider dashed />
              </div>
              <div style={{ height: 70, marginTop: 5 }}>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Các doanh nghiệp du lịch
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Liên lạc đến số hotline của các doanh nghiệp mà bạn đang sử dụng dịch vụ khi có
                  thắc mắc.
                </Typography.Text>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: 170,
                  textAlign: 'center',
                  float: 'right',
                  borderBottom: '2px solid #d3a971',
                  marginBottom: 40,
                  padding: '10px 0px',
                }}
              >
                Tàu chở khách, du khách
              </div>
            </div>
            <div
              style={{
                border: '1px solid #d3a971',
                borderRadius: 14,
                padding: 20,
              }}
            >
              <div style={{ height: 85 }}>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Các tàu chở khách
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Đảm bảo đã có các phương thức liên lạc khẩn cấp, phòng trường hợp có sự cố xảy ra.
                </Typography.Text>
              </div>
              <div style={{ width: '85%' }}>
                <CustomDivider dashed />
              </div>
              <div style={{ height: 85, marginTop: 5 }}>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Các tàu vận chuyển
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Đảm bảo đã có các phương thức liên lạc khẩn cấp, phòng khi có sự cố xảy ra.
                </Typography.Text>
              </div>
              <div style={{ width: '85%' }}>
                <CustomDivider dashed />
              </div>
              <div style={{ height: 70, marginTop: 5 }}>
                <div>
                  <Typography.Text style={{ fontWeight: 'bold' }}>
                    Du khách tham gia các tuyến du lịch đường thuỷ
                  </Typography.Text>
                </div>
                <Typography.Text>
                  Đảm bảo đã chuẩn bị đầy đủ các phương thức liên lạc, phòng khi có sự cố xảy ra.
                </Typography.Text>
              </div>
            </div>
          </Col>
        </Row>
        <Typography.Text
          style={{
            textAlign: 'center',
            margin: '30px 0px',
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
        >
          Nhiều cách thức liên hệ khác, để chắc chắn, bạn có thể tìm thêm từ các nguồn khác.
        </Typography.Text>
        <div id="document" style={{ display: 'flex' }} />
      </div>
    </>
  );
};
