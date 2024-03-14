import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import '../App.css'
import { ComplexNavbar } from "./navbar/ComplexNavbar";
import MiniSidebar from "./sidebar/MiniSidebar";
import useSWR from "swr";
import { fetcher } from "../hooks/useFetcher";
import { useUserStore } from "../hooks/useStore";
import { useShallow } from "zustand/react/shallow";

const Map = () => {

const location = [1.0678, 104.0167]
const position2 = [1.0628, 104.0167]
const position = [1.06257, 104.02858]

const { userUid } = useUserStore(useShallow(state => ({
  userUid: state.userUid
})),)


const { data = [], error, isLoading } = useSWR(`${import.meta.env.VITE_BASE_URL}/api/v1/mydevice/${userUid}`, fetcher, { refreshInterval: 1000})

let content
  if (isLoading) {
    content = (
      <div className=".container flex justify-center">
        <>loading</>
      </div>
    )
  } else if (error) {
    content = (
      <div className=".container flex justify-center">
        <>loading</>
      </div>
    )

  } else {
    content = data
    console.log(content)
  }


return (
  <div className=".container h-screen shadow-md rounded-md relative">
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

    <div className="absolute inset-x-0 top-0 h-10 mt-3 ml-16 .container z-50 mx-6">
      <ComplexNavbar />
    </div>
    
    <div className="flex absolute inset-y-0 left-0 z-50 mx-2 mt-20 ml-12">
      <MiniSidebar />
    </div>

  </div>
  )
}

export default Map