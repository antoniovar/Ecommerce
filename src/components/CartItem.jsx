import '../styles/CartItem.css'

function CartItem(props){
  return(
    <div className="eachItem">
      <span>{props.name}</span>
      <span>{props.quantity}</span>
      <span>{props.price}<button className='eq' onClick={props.remove}>❌</button></span>
    </div>
  );
}

export default CartItem;