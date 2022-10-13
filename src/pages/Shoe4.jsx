import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Zapato41 from "../imgs/zapato4.1.webp"
import Zapato42 from "../imgs/zapato4.2.webp"
import Zapato43 from "../imgs/zapato4.3.webp"

function Shoe4(){
  const images = [Zapato41, Zapato42, Zapato43];
  return(
    <div>
      <NavBar />
      <Product4Page 
        im={images}  
        name='Nike Model 4' 
        price='66$' 
        description='The Nike React Pegasus Trail 4 GORE-TEX are your running companions for those days when the weather changes. Its waterproof GORE-TEX layer keeps feet dry and uses less rubber on the outsole to create a smooth transition from tarmac to trail with ease.' 
      />
      <Footer />
    </div>
  );
}

export default Shoe4;