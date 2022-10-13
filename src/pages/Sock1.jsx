import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Calcetin11 from "../imgs/calcetin11.webp"
import Calcetin12 from "../imgs/calcetin12.webp"
import Calcetin13 from "../imgs/calcetin13.webp"

function Sock1(){
  const images = [Calcetin11, Calcetin12, Calcetin13];
  return(
    <div>
      <NavBar />
      <Product4Page 
        im={images}  
        name='Sock Model 1' 
        price='9$' 
        description='A true blend of style and comfort, the Nike Everyday Plus Crew Socks offer cushioning in key areas to help keep you comfortable all day. Dri-FIT fabric and breathable mesh on the top of your foot help keep you dry, and the arch band provides a snug fit.' 
      />
      <Footer />
    </div>
  );
}

export default Sock1;