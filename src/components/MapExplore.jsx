import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import '../App.css'

const Map = () => {

const location = [1.0678, 104.0167]
const position2 = [1.0628, 104.0167]
const position = [1.06257, 104.02858]

return (
    <div className="pt-4 w-full shadow-md rounded-md">
        <MapContainer
          center={location}
          zoom={13}
          
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <Marker position={position2}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

        </MapContainer>
    </div>
  )
}

export default Map