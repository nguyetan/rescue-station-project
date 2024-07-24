import { PayloadAction } from '@reduxjs/toolkit';
import { type User as UserAuth } from 'firebase/auth';

import { createSlice } from '../../../redux/toolkit';
import { User, UserState } from '../type';

export const initialState: UserState = {
  handling: false,
  authenticated: false,
};

const slice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<{ auth: boolean; user?: User }>) => {
      state.handling = false;
      state.authenticated = action.payload.auth;
      state.data = action.payload.user;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signIn: (state, _action: PayloadAction<UserAuth>) => {
      state.handling = true;
    },
    signOut: (state) => {
      state.authenticated = false;
      state.data = undefined;
    },
  },
});

export const { actions, name: key, reducer } = slice;
