import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Showcase from '../showcase/Showcase'
import Products from '../products/Products'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Showcase/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home;