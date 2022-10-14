import CartItem from "./CartItem";
import '../styles/CartItemList.css'
import { useCartContext } from "../context/CartContext";

function CartItemList(){
  const {data, setData} = useCartContext()
  return(
    <div className="container">
      <div className="cartList">
        <div className='header'>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>
        {data!==null&&data.length!==0 ?data.map(item => 
          <CartItem 
            key={item.name} 
            name={item.name} 
            price={item.price} 
            quantity={item.quantity} 
            remove={() => {
              if(data.length>1){
                const cartWithoutItem = data.filter(it => it.name!==item.name);
                setData(cartWithoutItem);
              }else{
                setData([]);
                localStorage.removeItem("items");
              }
            }} />)
        : <h1 className="text">Your cart is empty</h1>}
      </div>  
      
    </div>
     
  );
}

export default CartItemList;