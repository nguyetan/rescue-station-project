import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../../types/RootState';
import { initialState } from './reducer';

const selectDomain = (state: RootState) => state?.userStore || initialState;

export const selectUserHandling = createSelector([selectDomain], (state) => state.handling);

export const selectUserAuthenticated = createSelector(
  [selectDomain],
  (state) => state.authenticated
);

export const selectUserData = createSelector([selectDomain], (state) => state.data);
