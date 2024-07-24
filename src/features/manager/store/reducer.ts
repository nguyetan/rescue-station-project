import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '../../../redux/toolkit';
import { User } from '../../user/type';
import { Feedback, ManagerSate, UpdateUsersAction } from '../type';

export const initialState: ManagerSate = {
  handling: false,
  users: {},
  feedbacks: {},
};

const slice = createSlice({
  name: 'managerStore',
  initialState,
  reducers: {
    fetchUsers: (state, action: PayloadAction<{ users: CustomObject<User> }>) => {
      state.handling = false;
      state.users = action.payload.users;
    },
    fetchFeedbacks: (state, action: PayloadAction<{ feedbacks: CustomObject<Feedback> }>) => {
      state.handling = false;
      state.feedbacks = action.payload.feedbacks;
    },
    getUsers: (state) => {
      state.handling = true;
    },
    getFeedbacks: (state) => {
      state.handling = true;
    },

    updateUsers: (state, _action: PayloadAction<UpdateUsersAction>) => {
      state.handling = true;
    },
    deleteFeedback: (state, _action: PayloadAction<{ id: string }>) => {
      state.handling = true;
    },
    cancelHandling: (state) => {
      state.handling = false;
    },
  },
});

export const { actions, name: key, reducer } = slice;
