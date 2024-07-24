import { Button, Form, Modal, Select } from 'antd';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectWebgisStationsFinded } from '../../store/selectors';

type Props = {
  layers: { name: string; id: string }[];
  onRemoveLayer: (ids: string[]) => void;
  onCancel: () => void;
};

const RemoveLayer = ({ onCancel, onRemoveLayer, layers }: Props) => {
  const [form] = Form.useForm<{ ids: string[] }>();
  const findStations = useSelector(selectWebgisStationsFinded);

  const layersOptions = useMemo(() => {
    const options = layers.map(({ name, id }) => ({
      label: name,
      value: id,
    }));
    Object.keys(findStations).forEach((key) => {
      options.push({
        label: `Tìm kiếm bằng ${key}`,
        value: key,
      });
    });
    return options;
  }, [findStations, layers]);

  const handleRemoveLayer = async () => {
    try {
      const { ids } = await form.validateFields();
      onRemoveLayer(ids);
    } catch {
      /* empty */
    }
  };
  return (
    <Modal
      open
      width={300}
      title="Xóa Layer"
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button type="primary" danger onClick={handleRemoveLayer}>
          Xóa
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item name={'ids'}>
          <Select mode="multiple" options={layersOptions} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RemoveLayer;
