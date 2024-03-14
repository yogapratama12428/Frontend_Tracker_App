import { PaperAirplaneIcon, TruckIcon } from "@heroicons/react/24/outline"

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    TimelineHeader,
    TimelineBody,
    
  } from "@material-tailwind/react";
   

  import {
  } from "@heroicons/react/24/solid";
import { useState } from "react";
const TruckCart = () => {

    const [open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
 
  return (
    <div className="border mt-2 rounded-xl">
        <Card color="transparent" shadow={false} className="w-full max-w-[26rem] rounded-md shadow-none my-1" onClick={handleOpen}>
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
                        <p className="text-sm text-black">
                            BP 3497
                        </p>
                    <div className="flex items-center gap-0">
                        <button className="w-auto mx-2 text-xs"> 
                        <PaperAirplaneIcon className="w-4 h-4 text-black"/>
                        </button>
                    </div>
                    </div>
                    <p className="text-xs mb-2">
                        9 Dec 2024 / Tanjung Piayu
                    </p>
                </div>
            </CardHeader>
        </Card>
        <>
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
       
        </>
    </div>
  )
}

export default TruckCart