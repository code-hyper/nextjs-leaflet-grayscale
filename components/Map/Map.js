import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [3.1488140642804585, 101.59474081205656];

function Map() {
  return (
    <MapContainer
      style={{ width: "100wh", height: "500px" }}
      center={position}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>We are here.</Popup>
      </Marker>
    </MapContainer>
  );
}
export default Map;
