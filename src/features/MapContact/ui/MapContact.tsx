'use client';
import { FC } from 'react';
import { Placemark, YMaps, Map } from '@mr-igorinni/react-yandex-maps-fork';
import { MapContactTypes } from '@/features/MapContact/ui/MapContact.types';

export const MapContact: FC<MapContactTypes> = ({ defaultGeometry }) => {
  return (
    <YMaps
      query={{
        apikey: process.env['YANDEX_API_KEY'],
      }}
    >
      <Map
        defaultState={{
          center: [57.946581, 56.122524],
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
        style={{ width: '100%', height: '100%' }}
      >
        <Placemark modules={['geoObject.addon.balloon']} defaultGeometry={defaultGeometry} />
      </Map>
    </YMaps>
  );
};
