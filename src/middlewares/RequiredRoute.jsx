
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useUser } from "../hooks/useUser"
import { useState } from "react"

const RequiredRoute = () => {

  const [isUser, setIsUser ] = useState(true)
  const location = useLocation()
  
  return (
    isUser? <Outlet /> : <Navigate to='/' state={{  from : location  }} replace />
  )
}

export default RequiredRoute