import About from "../components/About"
import ComplexNavbar from "../components/ComplexNavbar"
import ProductCorousel from "../components/ProductCorousel"

const Home = () => {
    
    return (
      <div className="container mx-auto">
          <ComplexNavbar />
          <About />
          <ProductCorousel />
          
      </div> 
    )
}

export default Home