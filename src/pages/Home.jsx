
import About from "../components/About"
import ComplexNavbar from "../components/ComplexNavbar"
import ProductCorousel from "../components/ProductCorousel"


const Home = () => {
    
    // useEffect(()=> {
    //   refreshToken()
    // })

    // const refreshToken = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:5000/refreshtoken")
    //     console.log(response.data)
    //   } catch (error) {
    //     console.log(error.response)
    //   }
     
    // }

    return (
      <div className="container mx-auto ">
          <ComplexNavbar />
          <About />
      </div> 
    )
}

export default Home