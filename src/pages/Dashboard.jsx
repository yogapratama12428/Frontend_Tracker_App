import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout'

import { fetcher } from '../hooks/useFetcher'
import { MapContainer, TileLayer} from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import '../App.css'

import useSWR from "swr";
import { useUserStore } from "../hooks/useStore";
import { useShallow } from "zustand/react/shallow";
import ComplexNavbar from '../components/ComplexNavbar'
import MiniSidebar from '../components/sidebar/MiniSidebar'



const Dashboard = () => {


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
    console.log(data)
    content = (
        <div className="flex absolute inset-y-0 left-0 z-50 mx-2 mt-20 ml-12">
        
        <MiniSidebar device={data} />
    
    </div>
    )
   
  }

  const location = [1.0678, 104.0167]

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
           
            <Layout>
                <Outlet />
            </Layout>
        </MapContainer>
    
        <div className="absolute inset-x-0 top-0 h-10 mt-3 ml-16 .container z-50 mx-6">
          <ComplexNavbar />
          
        </div>
        
        {
            content
        }
        
    
      </div>
     )
}

export default Dashboard