import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import _ from 'lodash';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../../services';
import formatError from '../../../utils/formatError';
import { User } from '../../user/type';
import { Feedback, UpdateUsersAction } from '../type';
import { actions as managerAction } from './reducer';
import { selectManagerFeedbacks, selectManagerUsers } from './selectors';

function* getUsers() {
  try {
    const result: WithApiResult<User[]> = yield backendService.post('/user', {
      action: 'get',
    });

    if (result.kind === 'ok') {
      const dataUpdate = _.keyBy(result.data, 'email');
      yield put(managerAction.fetchUsers({ users: dataUpdate }));
    } else {
      yield put(managerAction.cancelHandling());
      notification.error({ message: formatError(result) });
    }
  } catch (error) {
    yield put(managerAction.cancelHandling());
    notification.error({ message: formatError(error) });
  }
}

function* getFeedbacks() {
  try {
    const result: WithApiResult<CustomObject<Feedback>> = yield backendService.post('/feedback', {
      action: 'get',
    });

    if (result.kind === 'ok') {
      const dataUpdate = _.keyBy(result.data, 'id');
      yield put(managerAction.fetchFeedbacks({ feedbacks: dataUpdate }));
    } else {
      yield put(managerAction.cancelHandling());
      notification.error({ message: formatError(result) });
    }
  } catch (error) {
    yield put(managerAction.cancelHandling());
    notification.error({ message: formatError(error) });
  }
}

function* updateUsers(action: PayloadAction<UpdateUsersAction>) {
  try {
    const data = action.payload;
    const result: WithApiResult<boolean> = yield backendService.post('/user', data);
    if (result.kind === 'ok') {
      notification.success({ message: 'Cập nhật thành công' });
      const users: CustomObject<User> = yield select(selectManagerUsers);
      const dataUpdate = _.cloneDeep(users);
      const userData = data.data;
      if (data.action === 'delete') {
        delete dataUpdate[userData.email];
      } else {
        dataUpdate[userData.email] = data.data;
      }
      yield put(managerAction.fetchUsers({ users: dataUpdate }));
    } else {
      yield put(managerAction.cancelHandling());
      notification.error({ message: 'Lỗi truy vấn', description: formatError(result) });
    }
  } catch (error) {
    yield put(managerAction.cancelHandling());
    notification.error({ message: 'Lỗi truy vấn', description: formatError(error) });
  }
}

function* deleteFeedback(action: PayloadAction<{ id: string }>) {
  try {
    const result: WithApiResult<boolean> = yield backendService.post('/feedback', {
      action: 'delete',
      id: action.payload.id,
    });

    if (result.kind === 'ok') {
      const feedbacks: CustomObject<Feedback> = yield select(selectManagerFeedbacks);
      const dataUpdate = _.cloneDeep(feedbacks);
      delete dataUpdate[action.payload.id];
      notification.success({ message: 'Xóa thành công' });
      yield put(managerAction.fetchFeedbacks({ feedbacks: dataUpdate }));
    } else {
      yield put(managerAction.cancelHandling());
      notification.error({ message: formatError(result) });
    }
  } catch (error) {
    yield put(managerAction.cancelHandling());
    notification.error({ message: formatError(error) });
  }
}

export default function* saga() {
  yield all([
    takeLatest(managerAction.getUsers.type, getUsers),
    takeLatest(managerAction.getFeedbacks.type, getFeedbacks),
    takeLatest(managerAction.updateUsers.type, updateUsers),
    takeLatest(managerAction.deleteFeedback.type, deleteFeedback),
  ]);
}
