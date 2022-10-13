import '../styles/Product.css'
import { Link } from 'react-router-dom';

function Product({name, image, price, index}){
  return(
    <Link to={`/Ecommerce/${index.replace(/\s+/g, '')}`} className="product-container">
      <img className='product-image' src={image} />
      <div className='name-price'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </Link>
  );
}

export default Product;