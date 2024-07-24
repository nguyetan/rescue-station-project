import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '../../../redux/toolkit';
import { CustomLayer, FindedPoint, FindStationType, ResponseFindPoint, WebgisState } from '../type';

export const initialState: WebgisState = {
  handling: false,
  layers: {},
  stations: {},
  center: [10.877624025081147, 106.77712164784637],
};

const slice = createSlice({
  name: 'webgisStore',
  initialState,
  reducers: {
    addLayers(state, action: PayloadAction<CustomObject<CustomLayer>>) {
      state.handling = false;
      state.layers = {
        ...state.layers,
        ...action.payload,
      };
    },
    removeLayers(state, action: PayloadAction<{ ids: string[] }>) {
      const { ids } = action.payload;
      state.handling = false;
      ids.forEach((id) => {
        delete state.layers[id];
      });
    },
    findStation(state, _action: PayloadAction<FindStationType>) {
      state.handling = true;
    },
    updateStationFinded(state, action: PayloadAction<{ type: string; data: ResponseFindPoint }>) {
      state.handling = false;
      state.stations = {
        ...state.stations,
        [action.payload.type]: action.payload.data,
      };
    },
    removeStationFinded(state, action: PayloadAction<{ ids: string[] }>) {
      const { ids } = action.payload;
      state.handling = false;
      ids.forEach((id) => {
        delete state.stations[id];
      });
    },
    changeFocusCenter(state, action: PayloadAction<{ center: number[]; isZoom?: boolean }>) {
      state.handling = false;
      state.center = action.payload.center;
      state.isZoom = action.payload.isZoom || false;
    },
    selectPoint(state, action: PayloadAction<{ type: string; point: FindedPoint }>) {
      const { type, point } = action.payload;
      state.handling = false;
      state.stations[type].selectPoint = point;
    },
    clear: () => initialState,
  },
});

export const { actions, name: key, reducer } = slice;
