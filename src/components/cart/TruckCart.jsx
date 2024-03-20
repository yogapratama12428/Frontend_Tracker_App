/* eslint-disable react/prop-types */
import { TruckIcon, XCircleIcon } from "@heroicons/react/24/outline"

import {
    Card,
    CardHeader,
    
  } from "@material-tailwind/react";
   

  import {
  } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const TruckCart = (props) => {

    const { devices } = props

    console.log(devices)
    
    const navigate = useNavigate()

    const handleDeleteCar = async (deviceId)=> {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/device/${deviceId}`, { withCredentials: true }
            )

            setTimeout(()=> {
                navigate('/dashboard')
            },100)
            
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
 
  return (
    <div >
        {
            devices && devices.devices && (
                devices.devices.map((d)=> (
                    <div key={d.id} className="border mt-2 rounded-xl">
                        <Card color="transparent" shadow={false} className="w-full max-w-[26rem] rounded-md shadow-none my-1" onClick={()=> navigate(d.id)}>
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-2 pt-0 "
                                >
                                    <button 
                                    className="flex" 
                                    >
                                        <TruckIcon className="w-8 h-auto text-black mx-2"/>
                                    </button>
                                
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-md text-black">
                                                {d.name}
                                            </p>
                                        <div className="flex items-center gap-0">
                                            <button 
                                                className="w-auto mx-2 text-md"> 
                                                <XCircleIcon className="w-7 h-7 text-black"
                                                onClick={()=>handleDeleteCar(d.id)}    
                                            />
                                                
                                            </button>
                                        </div>
                                        </div>
                                        <p className="text-sm text-black font-bold mb-2">
                                           {
                                             `Token API : ${d.token}`
                                           }
                                        </p>
                                    </div>
                                </CardHeader>
                        </Card>
                    </div>
                ))
            )
        }
       
        
        {/* <>
        {
            open && (
                <div className="max-w-[26rem]  p-2 bg-indigo-50">
                    <Timeline>
                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                        <TimelineIcon />
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            Batu Aji
                        </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-5">
                        <Typography variant="small" color="gary" className="font-normal text-gray-600">
                            May 20, 4:00 PM
                        </Typography>
                        </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineHeader className="h-3">
                        <TimelineIcon />
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                            Batu Aji
                        </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-5">
                        <Typography variant="small" color="gary" className="font-normal text-gray-600">
                            May 20, 4:00 PM
                        </Typography>
                        </TimelineBody>
                    </TimelineItem>
                    </Timeline>
              </div>
            )
        }
       
        </> */}
    </div>
  )
}

export default TruckCart