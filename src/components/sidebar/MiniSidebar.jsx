import React from "react";
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import {

  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  TruckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import TruckCart from "../cart/TruckCart";

const MiniSidebar = () => {

    const [open, setOpen] = React.useState(true);

    const handleOpen2 = () => {
        setOpen(!open) 
    }

  return (
    <div className="mx-2 flex"> 
        <Card className="h-[calc(70vh-2rem)] w-18 max-w-[20rem] m-2 shadow-xl shadow-blue-gray-900/5  bg-gray-800 opacity-90">
            <Button className="flex items-center gap-4 p-4 opacity-90 bg-blue-gray-500" variant="text" onClick={handleOpen2}>
                <Squares2X2Icon className="h-8 w-8 text-blue-800"/>
            </Button>
            <Button className="flex items-center gap-4 p-4" variant="text">
                <TruckIcon className="h-8 w-8 text-white"/>
            </Button>
            <Button className="flex items-center gap-4 p-4" variant="text">
                <Cog8ToothIcon className="h-8 w-8 text-white"/>
            </Button>
        </Card>

        {
            open === false ? (
                <Card className="h-[calc(70vh-2rem)] w-full max-w-[20rem] p-4 m-2 shadow-xl shadow-blue-gray-900/5 overflow-y-auto">
                <div className="mb-2 flex items-center gap-4 p-4 justify-between">
                    <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                    <button onClick={setOpen}>
                        <XMarkIcon className="h-8 w-8 "/>
                    </button>
                </div>
                <div className="p-2">
                    <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
                    <TruckCart />
                    <TruckCart />
                    <TruckCart />
                    <TruckCart />
                </div>
            </Card>
            ) : <></>
        }
      
   
       
       
    </div>

   
  )
}

export default MiniSidebar