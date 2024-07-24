import { Button, Form, message, Modal, Radio, Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import Papa from 'papaparse';
import { useSelector } from 'react-redux';

import { supportedFiles } from '../../../../libs/options';
import { selectWebgisLayers, selectWebgisStationsFinded } from '../../store/selectors';
import { Feature } from '../../type';
type Props = {
  onCancel: () => void;
};

type FormValues = {
  layer: string;
  format: 'geojson' | 'csv';
};

const ExportLayer = ({ onCancel }: Props) => {
  const layers = useSelector(selectWebgisLayers);
  const findStations = useSelector(selectWebgisStationsFinded);

  const [form] = Form.useForm<FormValues>();
  const layersOptions = Object.keys(layers).map((key) => ({
    label: layers[key].name,
    value: key,
  }));

  Object.keys(findStations).forEach((key) => {
    layersOptions.push({
      label: `Tìm kiếm bằng ${_.upperCase(key)} `,
      value: key,
    });
  });

  const handleExportLayer = async () => {
    try {
      const { layer, format } = await form.validateFields();

      const data = layers?.[layer] || {};
      let name = `${data.name}.${format}`;
      let url;
      if (format === 'geojson') {
        if (findStations[layer]) {
          console.log(findStations[layer]);

          const features = findStations[layer].selected.map((station) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [station.XX, station.YY],
            },
            properties: {
              facilityPoints: station.FacilityPoints,
              id: station.Id,
            },
          }));
          _.set(data, 'geoJson.features', features);
          _.set(data, 'geoJson.type', 'FeatureCollection');
        }

        const blob = new Blob([JSON.stringify(data.geoJson)], { type: 'application/json' });
        url = URL.createObjectURL(blob);
      } else if (format === 'csv') {
        if (findStations[layer]) {
          const csv = Papa.unparse(findStations[layer].selected);
          const blob = new Blob([csv], { type: 'text/csv' });
          url = URL.createObjectURL(blob);
          name = `${layer}_${moment().format('DD.MM.YYYY_HH.mm.ss')}.csv`;
        } else {
          const rows = _.flatten(
            data.geoJson.features.map((feature: Feature) =>
              _.flatten(feature.geometry?.coordinates.map((c) => c))
            )
          );
          const csv = Papa.unparse({
            fields: ['Longitude', 'Latitude'],
            data: rows,
          });
          const blob = new Blob([csv], { type: 'text/csv' });
          url = URL.createObjectURL(blob);
        }
      } else {
        message.error('Chưa hỗ trợ định dạng này');
        return;
      }
      if (url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
      }
    } catch {
      /* empty */
    }
  };
  return (
    <Modal
      open
      width={400}
      onCancel={onCancel}
      title="Xuất Layer"
      footer={[
        <Button type="primary" onClick={handleExportLayer}>
          Xuất Layer
        </Button>,
      ]}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ format: 'csv' }}
      >
        <Form.Item
          label="Layer"
          name="layer"
          rules={[{ required: true, message: 'Vui lòng chọn layer' }]}
        >
          <Select options={layersOptions} />
        </Form.Item>

        <Form.Item label="Định dạng" name="format">
          <Radio.Group>
            {Object.entries(supportedFiles)
              .filter(([type]) => type !== 'shp')
              .map(([key, name]) => (
                <Radio value={key}>{name}</Radio>
              ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExportLayer;
