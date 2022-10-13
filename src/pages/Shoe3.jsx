import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Zapato31 from "../imgs/zapato3.1.webp"
import Zapato32 from "../imgs/zapato3.2.webp"
import Zapato33 from "../imgs/zapato3.3.webp"

function Shoe3(){
  const images = [Zapato31, Zapato32, Zapato33];
  return(
    <div>
      <NavBar />
      <Product4Page 
        im={images}  
        name='Nike Model 3' 
        price='95$' 
        description='The Nike React Pegasus Trail 4 GORE-TEX are your running companions for those days when the weather changes. Its waterproof GORE-TEX layer keeps feet dry and uses less rubber on the outsole to create a smooth transition from tarmac to trail with ease.' 
      />
      <Footer />
    </div>
  );
}

export default Shoe3;