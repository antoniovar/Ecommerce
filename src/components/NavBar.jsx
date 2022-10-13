import '../styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <div className="navbar">
      <ul className='list'>
        <li className='logo'>All4Feet</li>
        <Link className='option' to='/'><li>Home</li></Link>
        <Link className='option' to='/menShoes'><li>Men Shoes</li></Link>
        <Link className='option' to='/womenShoes'><li className='option'>Women Shoes</li></Link>
        <Link className='option' to='/socks'><li>Socks</li></Link>
      </ul>
      <Link className='option' to='/cart'><span className='option carro'><i className="fa-solid fa-cart-shopping" /></span></Link>
    </div>
  );
}

export default NavBar;