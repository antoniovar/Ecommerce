import SimpleImageSlider from "react-simple-image-slider";
import '../styles/Product4Page.css'
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

function Product4Page({im, name, description, price}){
  //Valor del boton add to cart
  const [addValue, setAddValue] = useState('Add to cart')
  const [disable, setDisable] = useState(false)
  const[addClassName, setAddClassName] = useState('addToCart')

  //Funcion que importamos del cartContext con destructuring ya que lo
  //pasabamos como objeto
  const {addItemCart} = useCartContext();
  //
  const [quantity, setQuantity] = useState(1)
  const handleChange = (e) =>{
    e.preventDefault();
    setQuantity(parseInt(e.target.value))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addItemCart({name,price}, quantity);
    setDisable(true);
    setAddValue('Added ✔️');
    setAddClassName('addToCart disable') 
    setTimeout(()=>{
        setDisable(false)
        setAddValue('Add to cart')
        setAddClassName('addToCart')
    }, 2500)
  }

  return(
    <div className="product4page-container">
      {/*Different product-left to change the sizes*/}
      <div className="product4page-left1">
        <SimpleImageSlider
          width={504}
          height={504}
          images={im}
          showBullets={false}
          showNavs={true}
        />
      </div>
      <div className="product4page-left2">
        <SimpleImageSlider
          width={404}
          height={404}
          images={im}
          showBullets={false}
          showNavs={true}
        />
      </div>
      <div className="product4page-left3">
        <SimpleImageSlider
          width={304}
          height={304}
          images={im}
          showBullets={false}
          showNavs={true}
        />
      </div>
      <div className="product4page-right">
        <div className="first-row">
          <h3>{name}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
        <form className="buy-buttons" onSubmit={handleSubmit}>
          <input className="quantity" type='number' defaultValue="1" min="1" max="5" onChange={handleChange} required />
          <input className={addClassName} type="submit" disabled={disable} value={addValue} />
        </form>
      </div>

    </div>
  );
}

export default Product4Page;





