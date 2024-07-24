import { DeleteOutlined } from '@ant-design/icons';
import { Col, Modal, Row, Space, Table, TableColumnsType, Typography } from 'antd';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useManagerSlice } from '../../store';
import { selectManagerFeedbacks } from '../../store/selectors';
import { Feedback } from '../../type';

export const FeedbackRender = () => {
  const feedbacks = useSelector(selectManagerFeedbacks);
  const dispatch = useDispatch();

  const { actions } = useManagerSlice();

  useEffect(() => {
    if (!Object.keys(feedbacks).length) {
      dispatch(actions.getFeedbacks());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, actions]);

  const cols: TableColumnsType<Feedback> = useMemo(() => {
    const tmp: TableColumnsType<Feedback> = [
      {
        title: 'Liên hệ',
        dataIndex: 'name',
        key: 'name',
        render: (_any, record) => (
          <div>
            <Row>
              <Col span={4}>
                <Typography.Text strong>Tên:</Typography.Text>
              </Col>
              <Col span={20}>
                <Typography.Text>{record.name}</Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Typography.Text strong>Số điện thoại:</Typography.Text>
              </Col>
              <Col span={20}>
                <Typography.Text>{record.phone}</Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Typography.Text strong>Email:</Typography.Text>
              </Col>
              <Col span={20}>
                <Typography.Text>{record.email}</Typography.Text>
              </Col>
            </Row>
          </div>
        ),
      },
      {
        title: 'Nội dung',
        dataIndex: 'content',
        key: 'content',
      },
      {
        width: 100,
        render: (_any, record) => (
          <Space size="middle">
            <DeleteOutlined
              style={{
                fontSize: 20,
                color: '#ff4d4f',
              }}
              onClick={() => {
                Modal.confirm({
                  title: 'Xác nhận xóa',
                  content: 'Bạn có chắc chắn muốn xóa phản hồi này?',
                  onOk: () => {
                    dispatch(
                      actions.deleteFeedback({
                        id: record.id,
                      })
                    );
                  },
                });
              }}
            />
          </Space>
        ),
      },
    ];
    return tmp;
  }, [actions, dispatch]);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Row justify="end" style={{ marginBottom: 10 }}></Row>
      <Table pagination={false} dataSource={Object.values(feedbacks)} columns={cols} />
    </div>
  );
};
