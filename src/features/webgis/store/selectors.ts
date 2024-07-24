import type { RootState } from '../../../types/RootState';
import { initialState } from './reducer';

const selectDomain = (state: RootState) => state?.webgisStore || initialState;

export const selectWebgisHandling = (state: RootState) => selectDomain(state).handling;

export const selectWebgisLayers = (state: RootState) => selectDomain(state).layers;

export const selectWebgisStationsFinded = (state: RootState) => selectDomain(state).stations;

export const selectWebgisCenter = (state: RootState) => selectDomain(state).center;

export const selectWebgisZoom = (state: RootState) => selectDomain(state).isZoom;
