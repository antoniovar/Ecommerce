import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product4Page from '../components/Product4Page'
import Calcetin21 from "../imgs/calcetin21.webp"
import Calcetin22 from "../imgs/calcetin22.webp"
import Calcetin23 from "../imgs/calcetin23.webp"

function Sock2(){
  const images = [Calcetin21, Calcetin22, Calcetin23];
  return(
    <div>
      <NavBar />
      <Product4Page 
        im={images}  
        name='Sock Model 2' 
        price='10$' 
        description='A true blend of style and comfort, the Nike Everyday Plus Crew Socks offer cushioning in key areas to help keep you comfortable all day. Dri-FIT fabric and breathable mesh on the top of your foot help keep you dry, and the arch band provides a snug fit.' 
      />
      <Footer />
    </div>
  );
}

export default Sock2;