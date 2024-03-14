
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useUserStore } from "../hooks/useStore"
import { useShallow } from "zustand/react/shallow"


const RequiredRoute = () => {

  const { userUid } = useUserStore(useShallow(state => ({
    userUid: state.userUid
  })))

const location = useLocation()

console.log(userUid)

  return (
      userUid? <Outlet /> : <Navigate to='/login' state={{  from : location  }} replace />
  )
}

export default RequiredRoute