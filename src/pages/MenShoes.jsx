import React from "react";
import ProductList from "../components/ProductList.jsx"
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx"
import Shoe12 from "../imgs/zapato1.2.webp"
import Shoe22 from "../imgs/zapato2.2.webp"

function MenShoes(){
  const menShoes = [
      {name: 'Nike Model 1', price: '70$', image: Shoe12}, 
      {name: 'Nike Model 2', price: '79$', image: Shoe22}, 
      {name: 'Nike Model 1', price: '70$', image: Shoe12},
      {name: 'Nike Model 2', price: '79$', image: Shoe22},
      {name: 'Nike Model 1', price: '70$', image: Shoe12},
      {name: 'Nike Model 2', price: '79$', image: Shoe22},
      {name: 'Nike Model 1', price: '70$', image: Shoe12},
      {name: 'Nike Model 2', price: '79$', image: Shoe22},
      {name: 'Nike Model 1', price: '70$', image: Shoe12},
    ]
  return(
    <div className="men-container">
      <NavBar />
      <ProductList products={menShoes}/>
      <Footer />
    </div>
  );
}

export default MenShoes;