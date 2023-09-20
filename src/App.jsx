import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* <Route element={<Required />} >
              <Route path="/auth" element={<Auth />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
    </>
    
  )
}

export default App
