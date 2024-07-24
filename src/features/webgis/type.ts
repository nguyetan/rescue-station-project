import { ImportSupportedType } from '../../types';

export type CustomLayer = {
  id: string;
  geoJson: any;
  color: string;
  converPoint?: boolean;
  name: string;
};

export type FindStationType = {
  firstStation: string;
  lastStation: string;
  numberStation: string;
  type: string;
};

export type WebgisState = {
  handling: boolean;
  layers: CustomObject<CustomLayer>;
  stations: CustomObject<ResponseFindPoint>;
  center: number[];
  isZoom?: boolean;
};

export type FindedPoint = {
  Id: number;
  FacilityPoints: number;
  XX: number;
  YY: number;
};

export type ResponseFindPoint = {
  selected: FindedPoint[];
  unselected: FindedPoint[];
  selectPoint: FindedPoint;
};

export type Feature = {
  type: string;
  properties: {
    name: string;
    color: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
};

export type GeoJson = {
  type: string;
  features: Feature[];
};

export type CSVOption = {
  latCol: string;
  lonCol: string;
  format: 'point' | 'polygon' | 'line';
};

export type ConvertType = {
  type: ImportSupportedType;
  options?: CSVOption;
};
