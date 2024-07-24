import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { getAuth, signOut, User as UserAuth } from 'firebase/auth';
import { all, put, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../../services';
import formatError from '../../../utils/formatError';
import { actions as webgisActions } from '../../webgis/store/reducer';
import { User } from '../type';
import { actions as userAction } from './reducer';

function* signIn(action: PayloadAction<UserAuth>) {
  const user = action.payload;

  try {
    if (!user.uid) {
      throw new Error('User không hợp lệ');
    }

    const data: User = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
    };

    const result: WithApiResult<User> = yield backendService.post('/auth', { data });

    if (result.kind === 'ok') {
      const userData = result.data;
      yield put(
        userAction.fetch({
          auth: true,
          user: userData,
        })
      );
    } else {
      if (result.kind === 'rejected') {
        notification.info({
          message: 'Thông báo',
          description: 'Bạn chưa được cấp quyền truy cập. Vui lòng liên hệ quản trị viên',
        });
      } else {
        notification.error({ message: 'Lỗi truy vấn', description: formatError(result) });
      }
      signOut(getAuth());
      yield put(
        userAction.fetch({
          auth: false,
        })
      );
    }
  } catch ({ message }: any) {
    notification.error({ message: 'Lỗi truy vấn', description: message });
    signOut(getAuth());
    yield put(
      userAction.fetch({
        auth: false,
      })
    );
  }
}

function* signOutHandle() {
  try {
    yield put(webgisActions.clear());
  } catch (error: any) {
    notification.error({ message: 'Lỗi truy vấn', description: error.message });
  }
}

export default function* saga() {
  yield all([
    takeLatest(userAction.signIn.type, signIn),
    takeLatest(userAction.signOut.type, signOutHandle),
  ]);
}
