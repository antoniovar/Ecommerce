import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Zapato11 from "../imgs/zapato1.1.webp"
import Zapato12 from "../imgs/zapato1.2.webp"
import Zapato13 from "../imgs/zapato1.3.webp"

function Shoe1(){
  const images = [Zapato11, Zapato12, Zapato13];
  return(
    <div>
      <NavBar />
      <Product4Page
        im={images}  
        name='Nike Model 1' 
        price='70$' 
        description='The Nike React Pegasus Trail 4 GORE-TEX are your running companions for those days when the weather changes. Its waterproof GORE-TEX layer keeps feet dry and uses less rubber on the outsole to create a smooth transition from tarmac to trail with ease.' 
      />
      <Footer />
    </div>
  );
}

export default Shoe1;