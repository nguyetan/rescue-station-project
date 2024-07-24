import { List, Modal, Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { switchEPSG } from '../../../../libs/utils';
import { useWebgisSlice } from '../../store';
import { selectWebgisStationsFinded } from '../../store/selectors';

type Props = {
  onCancel: () => void;
};

const StationFinded = ({ onCancel }: Props) => {
  const stationsFinded = useSelector(selectWebgisStationsFinded);
  const dispatch = useDispatch();

  const { actions } = useWebgisSlice();
  return (
    <Modal open onCancel={onCancel} title="Trạm cứu hộ" footer={null} width={400} height={400}>
      <Tabs defaultActiveKey="1">
        {Object.entries(stationsFinded).map(([key, value]) => (
          <Tabs.TabPane
            tab={key.toLocaleUpperCase()}
            key={key}
            style={{
              height: 300,
              overflow: 'auto',
            }}
          >
            <List
              dataSource={value.selected}
              renderItem={(item) => (
                <List.Item
                  className="findPointItem"
                  style={{ paddingLeft: 10 }}
                  onClick={() => {
                    const center = switchEPSG('VN2000_HCM', 'EPSG4326', [
                      item.XX,
                      item.YY,
                    ]).reverse();
                    dispatch(actions.selectPoint({ type: key, point: item }));
                    dispatch(actions.changeFocusCenter({ center, isZoom: true }));
                    onCancel();
                  }}
                >
                  <div>{item.FacilityPoints}</div>
                </List.Item>
              )}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Modal>
  );
};

export default StationFinded;
