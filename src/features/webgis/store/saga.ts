import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { all, put, takeLatest } from 'redux-saga/effects';

import { switchEPSG } from '../../../libs/utils';
import { backendService } from '../../../services';
import formatError from '../../../utils/formatError';
import { FindStationType, ResponseFindPoint } from '../type';
import { actions as webgisActions } from './reducer';

function* findStation(action: PayloadAction<FindStationType>) {
  try {
    const { type, ...data } = action.payload;
    const result: WithApiResult<ResponseFindPoint> = yield backendService.post(
      `/find${type === 'lscp' ? 'LSCP' : 'PCenter'}`,
      {
        data,
      }
    );
    if (result.kind === 'ok') {
      const stations = result.data;

      const center = switchEPSG('VN2000_HCM', 'EPSG4326', [
        stations.selected[0].XX,
        stations.selected[0].YY,
      ]).reverse();
      yield put(webgisActions.updateStationFinded({ type, data: stations }));
      yield put(webgisActions.changeFocusCenter({ center }));
    } else {
      notification.error({ message: 'Lỗi truy vấn', description: formatError(result) });
      yield put(webgisActions.addLayers({}));
    }
  } catch ({ message }: any) {
    notification.error({ message: 'Lỗi truy vấn', description: message });
    yield put(webgisActions.addLayers({}));
  }
}
export default function* saga() {
  yield all([takeLatest(webgisActions.findStation.type, findStation)]);
}
