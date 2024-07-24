import { Button, Col, Form, Input, message, Modal, Radio, Row, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { findStationOptions } from '../../../../libs/options';
import { useWebgisSlice } from '../../store';

type Props = {
  onCancel: () => void;
};

type FormValues = {
  firstStation: string;
  lastStation: string;
  numberStation: string;
  type: string;
};

const FindStation = ({ onCancel }: Props) => {
  const [form] = Form.useForm<FormValues>();
  const [type, setType] = useState('pCenter');
  const dispatch = useDispatch();

  const { actions } = useWebgisSlice();
  const handleFindStation = async () => {
    try {
      const values = await form.validateFields();
      dispatch(actions.findStation({ ...values }));
      onCancel();
    } catch {
      message.error('Vui lòng nhập đúng thông tin');
    }
  };
  return (
    <Modal
      open
      width={400}
      onCancel={onCancel}
      title={'Quy hoạch trạm cứu hộ'}
      footer={[
        <Row justify="end">
          <Button
            type="primary"
            style={{ backgroundColor: '#57b925' }}
            onClick={() => handleFindStation()}
          >
            Thực hiện
          </Button>
        </Row>,
      ]}
    >
      <Form form={form} layout="vertical" initialValues={{ type: 'pCenter' }}>
        <Form.Item name="type">
          <Radio.Group
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          >
            <Typography.Text style={{ paddingRight: 10 }}>Áp dụng: </Typography.Text>
            {Object.entries(findStationOptions).map(([key, name]) => (
              <Radio value={key}>
                <Typography.Text strong>{name}</Typography.Text>
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Row justify="space-between" gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item
              label="Mã trạm nhỏ nhất"
              name="firstStation"
              rules={[
                { required: true, message: 'Mã trạm từ 0-9840' },
                {
                  validator: (_, value) => {
                    if (isNaN(Number(value))) {
                      return Promise.reject('Giá trị phải là số');
                    }
                    if (Number(value) < 0 || Number(value) > 9840) {
                      return Promise.reject('Giá trị từ 0-9840');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="Mã trạm từ 0-9840" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Mã trạm lớn nhất"
              name="lastStation"
              rules={[
                { required: true, message: 'Mã trạm từ 0-9840' },
                {
                  validator: (_, value) => {
                    if (isNaN(Number(value))) {
                      return Promise.reject('Giá trị phải là số');
                    }
                    if (Number(value) < 0 || Number(value) > 9840) {
                      return Promise.reject('Giá trị từ 0-9840');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="Mã trạm từ 0-9840" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="numberStation"
          label={type === 'pCenter' ? 'Nhập số trạm cần tìm' : 'Nhập bán kính'}
          rules={[
            { required: true, message: 'Số lượng không quá 200' },

            {
              validator: (_, value) => {
                if (isNaN(Number(value))) {
                  return Promise.reject('Giá trị phải là số');
                }
                if (Number(value) > 200) {
                  return Promise.reject('Số lượng không quá 200');
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input placeholder="Số lượng không quá 200" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FindStation;
