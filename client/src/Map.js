import { GoogleMap } from "@react-google-maps/api";

function Map({ latitude, longitude }) {
  console.log(latitude);
  return (
    <div>
      <GoogleMap
        zoom={20}
        center={{ lat: latitude, lng: longitude }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </div>
  );
}

export default Map;
