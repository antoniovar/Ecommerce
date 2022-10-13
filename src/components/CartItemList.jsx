import CartItem from "./CartItem";
import '../styles/CartItemList.css'

function CartItemList(){
  const dataJson = localStorage.getItem("items");
  const cartItems = JSON.parse(dataJson)
  return(
    <div className="container">
      <div className="cartList">
        <div className='header'>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>
        {cartItems!==null&&cartItems.length!==0 ?cartItems.map(item => <CartItem key={item.name} name={item.name} price={item.price} quantity={item.quantity} />)
        : <h1 className="titl">Your cart is empty</h1>}
      </div>  
    </div>
     
  );
}

export default CartItemList;