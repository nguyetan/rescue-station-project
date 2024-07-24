import { Button } from 'antd';
import L from 'leaflet';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import {
  FeatureGroup,
  GeoJSON,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
} from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useSelector } from 'react-redux';

import anchorIcon from '../../assets/anchor.png';
import markerIcon1 from '../../assets/marker_1.png';
import { selectUserAuthenticated } from '../../features/user/store/selectors';
import {
  selectWebgisCenter,
  selectWebgisStationsFinded,
  selectWebgisZoom,
} from '../../features/webgis/store/selectors';
import { CustomLayer } from '../../features/webgis/type';
import { switchEPSG } from '../../libs/utils';
import AddLayer from './AddLayer';

type Props = {
  layers: CustomObject<CustomLayer>;
  onAddLayer: (layer: CustomLayer) => void;
};

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon1,
  iconUrl: markerIcon1,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
});

const Map = ({ layers, onAddLayer }: Props) => {
  const mapRef = useRef<any>();
  const [layerEdit, setLayerEdit] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const userAuth = useSelector(selectUserAuthenticated);
  const stationFinded = useSelector(selectWebgisStationsFinded);
  const center = useSelector(selectWebgisCenter);
  const isZoom = useSelector(selectWebgisZoom);

  useEffect(() => {
    if (mapRef.current) {
      if (isZoom) {
        mapRef.current.flyTo(center as [number, number], 20);
      } else {
        mapRef.current.flyTo(center as [number, number]);
      }
    }
  }, [center, isZoom]);

  const handleSaveLayer = (info: { name: string; color: string; id: string }) => {
    const data: any = {};
    layerEdit.forEach((id) => {
      const layer = mapRef.current._layers[id];
      data[id] = layer.toGeoJSON();
      mapRef.current.removeLayer(layer);
    });

    const geoJson = {
      type: 'FeatureCollection',
      features: Object.values(data),
    };
    onAddLayer({ ...info, geoJson });
    setLayerEdit([]);
    setModalVisible(false);
  };

  return (
    <div style={{ height: '100%' }}>
      {modalVisible ? (
        <AddLayer onAddLayer={handleSaveLayer} onCancel={() => setModalVisible(false)} />
      ) : null}
      <MapContainer
        ref={mapRef}
        center={center as [number, number]}
        zoom={17}
        attributionControl={false}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          maxZoom={20}
        />
        <div className="leaflet-top leaflet-left" style={{ marginLeft: 100, marginTop: 40 }}>
          {layerEdit.length ? (
            <Button
              type="primary"
              className="leaflet-control"
              onClick={() => setModalVisible(true)}
            >
              Lưu layer
            </Button>
          ) : null}
        </div>

        <LayersControl position="topright">
          <LayersControl.Overlay name="Thành phố Thủ Đức">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:tpthuduc_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Một phần thuỷ hệ">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:thuyhe_hcm_motphan_dissolve_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Một phần đoạn sông">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:thuyhe_hcm_motphan_dissolve_line5_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Điểm ven Thuỷ hệ">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:thuyhe_diemven2_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          {Object.values(layers).map((layer) => (
            <LayersControl.Overlay name={layer.name} key={layer.name} checked>
              <GeoJSON
                data={layer.geoJson}
                pathOptions={{ color: layer.color }}
                pointToLayer={
                  layer.converPoint
                    ? (_feature, latlng) => {
                        return L.circleMarker(latlng, {
                          radius: 8,
                          fillColor: layer.color,
                          color: layer.color,
                          weight: 0.5,
                          opacity: 1,
                          fillOpacity: 0.8,
                        });
                      }
                    : undefined
                }
              />
            </LayersControl.Overlay>
          ))}

          {Object.entries(stationFinded).map(([type, data]) => (
            <>
              <LayersControl.Overlay name={`Tìm kiếm bằng ${_.toUpper(type)}`} key={type} checked>
                <LayerGroup>
                  {data.selected.map((station) => (
                    <Marker
                      position={
                        switchEPSG('VN2000_HCM', 'EPSG4326', [
                          station.XX,
                          station.YY,
                        ]).reverse() as [number, number]
                      }
                    >
                      <Popup>
                        <div>
                          <div>
                            <b>Id:</b> {station.Id}
                          </div>
                          <div>
                            <b>FacilityPoints:</b> {station.FacilityPoints}
                          </div>
                          <div>
                            <b>XX:</b> {station.XX}
                          </div>
                          <div>
                            <b>YY:</b> {station.YY}
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay
                name={`Các điểm trạm khi kiếm bằng ${_.toUpper(type)}`}
                key={type}
              >
                <LayerGroup>
                  {data.unselected.map((station) => (
                    <Marker
                      icon={new L.Icon({ iconUrl: anchorIcon, iconSize: [30, 30] })}
                      position={
                        switchEPSG('VN2000_HCM', 'EPSG4326', [
                          station.XX,
                          station.YY,
                        ]).reverse() as [number, number]
                      }
                    >
                      <Popup>
                        <div>
                          <div>
                            <b>Id:</b> {station.Id}
                          </div>
                          <div>
                            <b>FacilityPoints:</b> {station.FacilityPoints}
                          </div>
                          <div>
                            <b>XX:</b> {station.XX}
                          </div>
                          <div>
                            <b>YY:</b> {station.YY}
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>
            </>
          ))}
        </LayersControl>

        {userAuth ? (
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={{
                rectangle: false,
                circle: false,
                circlemarker: false,
              }}
              onCreated={(e) => {
                setLayerEdit((pre) => [...pre, `${e.layer._leaflet_id}`]);
              }}
              onDeleted={(e) => {
                const ids = Object.keys(e.layers._layers);
                setLayerEdit((pre) => pre.filter((id) => !ids.includes(id)));
              }}
            />
          </FeatureGroup>
        ) : null}
      </MapContainer>
    </div>
  );
};

export default Map;
