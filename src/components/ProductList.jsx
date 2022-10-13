import Product from "./Product.jsx"
import '../styles/ProductList.css'


function ProductList({products}){
  return(
    <div className="product-list">
      {products.map((prod, index) => <Product key={index} index={prod.name} name={prod.name} price={prod.price} image={prod.image}/>)}
    </div>
  );
}

export default ProductList;