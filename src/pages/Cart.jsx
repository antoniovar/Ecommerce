import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import CartItemList from '../components/CartItemList'

function Cart(){
  return(
    <div>
      <NavBar />
      <CartItemList />
      <Footer />
    </div>

  );
}

export default Cart;