import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../../types/RootState';
import { initialState } from './reducer';

const selectDomain = (state: RootState) => state?.managerStore || initialState;

export const selectManagerHandling = createSelector([selectDomain], (state) => state.handling);

export const selectManagerUsers = createSelector([selectDomain], (state) => state.users);

export const selectManagerFeedbacks = createSelector([selectDomain], (state) => state.feedbacks);
