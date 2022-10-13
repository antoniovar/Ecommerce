import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <div className="navbar">
      <ul className='list'>
        <li className='logo'>All4Feet</li>
        <Link className='option' to='/Ecommerce'><li>Home</li></Link>
        <Link className='option' to='/Ecommerce/menShoes'><li>Men Shoes</li></Link>
        <Link className='option' to='/Ecommerce/womenShoes'><li className='option'>Women Shoes</li></Link>
        <Link className='option' to='/Ecommerce/socks'><li>Socks</li></Link>
      </ul>
      <Link className='option' to='/Ecommerce/cart'><span className='option carro'><i className="fa-solid fa-cart-shopping" /></span></Link>
    </div>
  );
}

export default NavBar;