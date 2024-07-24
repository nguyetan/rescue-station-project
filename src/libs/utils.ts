import papaparse from 'papaparse';
import proj4 from 'proj4';
import { parseShp } from 'shpjs';

import { ConvertType } from '../features/webgis/type';
import { EPSGValuesType } from '../types';
import { EPSGValues, typeOptions } from './options';

export const switchEPSG = (
  current: keyof EPSGValuesType,
  target: keyof EPSGValuesType,
  coordinate: number[]
): number[] => {
  const convert = proj4(EPSGValues[current], EPSGValues[target]);
  return convert.forward(coordinate);
};

export const convertFileToGeoJson = async (file: File, info: ConvertType) => {
  switch (info.type) {
    case 'geojson': {
      const text = await file.text();
      return JSON.parse(text);
    }
    case 'shp': {
      const buffer = await file.arrayBuffer();
      const geometries = parseShp(buffer);
      const geoJson = {
        type: 'FeatureCollection',
        features: geometries.map((geometry) => ({
          type: 'Feature',
          geometry,
          properties: {},
        })),
      };
      return geoJson;
    }
    case 'csv': {
      const text = await file.text();
      const { latCol, lonCol, format } = info.options!;
      const { data } = papaparse.parse(text, { header: true });
      let features;
      if (format === 'point') {
        const dataImports = data.filter((row: any) => row[latCol] && row[lonCol]);
        features = dataImports.map((row: any) => {
          const coordinates = switchEPSG('VN2000_HCM', 'EPSG4326', [
            parseFloat(row[lonCol]),
            parseFloat(row[latCol]),
          ]);
          return {
            type: 'Feature',
            geometry: {
              type: typeOptions[format],
              coordinates,
            },
            properties: {},
          };
        });
      } else {
        // features = [
        //   {
        //     type: 'Feature',
        //     geometry: {
        //       type: typeOptions[format],
        //       coordinates: [
        //         data.map((row: any) =>
        //           switchEPSG('VN2000_HCM', 'EPSG4326', [
        //             parseFloat(row[lonCol]),
        //             parseFloat(row[latCol]),
        //           ])
        //         ),
        //       ],
        //     },
        //     properties: {},
        //   },
        // ];
        throw new Error('Chưa hỗ trợ định dạng này');
      }
      return {
        type: 'FeatureCollection',
        features,
      };
    }
    default:
      throw new Error('Chưa hỗ trợ định dạng này');
  }
};
