import React, { useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "../mapStyles";

const mapContainerStyle = {
  width: "99%",
  height: "100vh",
};
const center = {
  lat: 37.9005,
  lng: -122.6444,
};

const markerList = [
  {
    lat: 37.901092610353,
    lng: -122.64826238098145,
  },
  {
    lat: 37.89865441147351,
    lng: -122.64216840209961,
  },
  {
    lat: 37.900991020345664,
    lng: -122.64062344970704,
  },
];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function GoogleMapCombo() {
  const { isLoaded, LoadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [selected, setSelected] = React.useState(null);

  const mapRef = useRef();

  const handleIdle = () => {
    var bounds = mapRef.current.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    console.log(ne.lat());
    console.log(ne.lng());
    console.log(sw.lat());
    console.log(sw.lng());
  };
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
    mapRef.current.setOptions({
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_TOP,
      },
    });
  }, []);

  if (LoadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onClick={event => {
          console.log(event.latLng.lat());
          console.log(event.latLng.lng());
          setSelected(null);
        }}
        onLoad={onMapLoad}
        onIdle={handleIdle}
      >
        {markerList.map(marker => (
          // <Marker
          //   key={`${marker.lat}-${marker.lng}`}
          //   position={{ lat: marker.lat, lng: marker.lng }}
          // />
          <OverlayView
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              className="bubble"
              onClick={() => {
                setSelected(marker);
              }}
            >
              <span>$34,656</span>
            </div>
          </OverlayView>
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.lat,
              lng: selected.lng,
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="card card-gm">
              <img className="card-img-top" src="logo192.png" alt="Card img" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default GoogleMapCombo;
