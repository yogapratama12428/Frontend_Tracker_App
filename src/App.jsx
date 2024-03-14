import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import RequiredRoute from "./middlewares/RequiredRoute"

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<RequiredRoute />} >
              
            </Route>
          </Routes>
        </BrowserRouter>
    </>
    
  )
}

export default App
