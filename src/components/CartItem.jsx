import '../styles/CartItem.css'
import {useCartContext} from '../context/CartContext'

function CartItem(props){
  const {removeItemCart} = useCartContext();
  const handleClick = () => {
    removeItemCart(props.name)
  }
  return(
    <div className="eachItem">
      <span>{props.name}</span>
      <span>{props.quantity}</span>
      <span>{props.price}<button className='eq' onClick={handleClick}>❌</button></span>
    </div>
  );
}

export default CartItem;