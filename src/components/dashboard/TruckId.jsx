
import { Marker, Popup } from "react-leaflet"
import { useParams } from 'react-router-dom'
import useSWR from "swr"
import { fetcher } from "../../hooks/useFetcher"

const TruckId = () => {
    

    const { truckId } = useParams()

    console.log(truckId)
    
    const { data = [], error, isLoading } = useSWR(`${import.meta.env.VITE_BASE_URL}/api/v1/device/${truckId}`, fetcher, { refreshInterval: 1000})

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
    console.log(data.location)
    content = (
        data && data.location.length > 0 && (
          data.location.map((d) => {
            return (
              <Marker
                key={d.id}
                position={[d.latitude, d.longitude]}
              >
                <Popup>
                  <div>
                    <p className="text-sm text-black">
                      BP {d.createdAt}
                    </p>
                  </div>
                </Popup>
              </Marker>
            )
          })
        )
       
    )
   
  }

    // const position2 = [1.0628, 104.0167]
    // const position = [1.06257, 104.02858]

  return (
    <div>
       {
        content
       }
    </div>
  )
}

export default TruckId