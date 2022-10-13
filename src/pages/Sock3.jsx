import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Calcetin31 from "../imgs/calcetin31.webp"
import Calcetin32 from "../imgs/calcetin32.webp"

function Sock3(){
  const images = [Calcetin31, Calcetin32];
  return(
    <div>
      <NavBar />
      <Product4Page 
        im={images}  
        name='Sock Model 3' 
        price='7$' 
        description='A true blend of style and comfort, the Nike Everyday Plus Crew Socks offer cushioning in key areas to help keep you comfortable all day. Dri-FIT fabric and breathable mesh on the top of your foot help keep you dry, and the arch band provides a snug fit.' 
      />
      <Footer />
    </div>
  );
}

export default Sock3;