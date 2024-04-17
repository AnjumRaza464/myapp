import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"



const Home = ({Products}) => {
    
  return (
    <>
        <Header />
        <Main Products={Products} />
        <Footer />
    </>
  )
}

export default Home