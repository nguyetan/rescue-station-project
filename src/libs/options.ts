import { EPSGValuesType } from '../types';

export const findStationOptions = {
  pCenter: 'P-Center',
  lscp: 'LSCP',
};

export const supportedFiles = {
  csv: 'CSV',
  geojson: 'GeoJSON',
  shp: 'Shapefile',
};

export const typeOptions = {
  point: 'Point',
  line: 'LineString',
  polygon: 'Polygon',
};

export const EPSGValues: EPSGValuesType = {
  EPSG4326: '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees',
  EPSG3857:
    '+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs +type=crs',
  EPSG3405:
    '+proj=utm +zone=48 +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,-0.00928836,0.01975479,-0.00427372,0.252906278 +units=m +no_defs +type=crs',
  VN2000:
    '+proj=longlat +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,-0.00928836,0.01975479,-0.00427372,0.252906278 +no_defs +type=crs',
  VN2000_HCM:
    '+proj=tmerc +lat_0=0 +lon_0=105.75 +k=0.9999 +x_0=500000 +y_0=0 +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,-0.00928836,0.01975479,-0.00427372,0.252906278 +units=m +no_defs +type=crs',
};
