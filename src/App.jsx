import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import RequiredRoute from "./middlewares/RequiredRoute"
import TruckId from "./components/dashboard/TruckId"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route element={<RequiredRoute />} >
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path=":truckId" element={<TruckId />} />
            </Route>



          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
