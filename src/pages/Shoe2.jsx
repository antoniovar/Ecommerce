import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Zapato21 from "../imgs/zapato2.1.webp"
import Zapato22 from "../imgs/zapato2.2.webp"
import Zapato23 from "../imgs/zapato2.3.webp"

function Shoe2(){
  const images = [Zapato21, Zapato22, Zapato23];
  return(
    <div>
      <NavBar />
      <Product4Page 
        im={images}  
        name='Nike Model 2' 
        price='79$' 
        description='The Nike React Pegasus Trail 4 GORE-TEX are your running companions for those days when the weather changes. Its waterproof GORE-TEX layer keeps feet dry and uses less rubber on the outsole to create a smooth transition from tarmac to trail with ease.' 
      />
      <Footer />
    </div>
  );
}

export default Shoe2;