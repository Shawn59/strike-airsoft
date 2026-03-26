"use client"
import {FC} from "react";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {mapContactTTheme} from "./mapContactTTheme";
import {useGetOrientationSize} from "../../../shared/lib";

export const MapContact:FC = () => {
  const {isMobile} = useGetOrientationSize()

  return (
    <YMaps
      query={{
        apikey: process.env['YANDEX_API_KEY']
      }}
    >
      <Map
        defaultState={{
          center: [
            57.946581,
            56.122524
          ],
          zoom: 17,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        style={mapContactTTheme(isMobile)}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[
            57.946581,
            56.122524
          ]}
        />
      </Map>
    </YMaps>
  )
}