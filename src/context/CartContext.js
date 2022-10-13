import { createContext, useState , useContext, useEffect} from 'react';

//Creamos el contexto
const CartContext = createContext();
//Creamos todas las funciones que queremos que tengan los children
export const CartProvider = ({children}) => {
  const [data, setData] = useState([]);
  //Cuando se recargue la página le pasamos los datos que haya o si no hay una lista vacía
  useEffect(()=>{
    if(localStorage.getItem("items")!=='undefined'){
      const dataJson = localStorage.getItem("items");
      const cartItems = JSON.parse(dataJson);
      setData(cartItems) 
    }
  }, [])

  useEffect(()=>{
    if(data.length!==0||data!==null){
      //Subimos los datos a localstorage cuando se añada.
      const dataToJson = JSON.stringify(data);
      localStorage.setItem("items", dataToJson);
    }
  }, [data])

  const isInCart = (name) => {
    if(data===null){
      return false
    }else{
      return data.find(item => item.name===name) ? true : false;
    }
  }

  const addItemCart = (item, quantity) => {
    if(isInCart(item.name)){
      setData(data.map(product => {
        return product.name===item.name ? 
        {...product, quantity:parseInt(product.quantity) + quantity} :product
      }))
    }else{
      setData([...data, {...item, quantity}]);
    }
  }
  const removeItemCart = (name) => {
    if(data.length>1){
      const cartWithoutItem = data.filter(item => item.name!==name);
      setData(cartWithoutItem);
    }else{
      localStorage.removeItem("items");
      window.location.reload()
    }
  }
  
  return(
    <CartContext.Provider value={{
      isInCart,
      addItemCart,
      removeItemCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

/* Creamos un hook que llame al usecontext con cartcontext de forma que 
solo tengamos que importar este y no ambos en el resto de componentes. Este
cuando lo llamemos nos devolverá el valor*/
export const useCartContext = () => useContext(CartContext);