import React from "react";
import ProductList from "../components/ProductList.jsx"
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx"
import Shoe32 from "../imgs/zapato3.2.webp"
import Shoe42 from "../imgs/zapato4.2.webp"

function MenShoes(){
  const womenShoes = [
      {name: 'Nike Model 3', price: '95$', image: Shoe32}, 
      {name: 'Nike Model 4', price: '66$', image: Shoe42}, 
      {name: 'Nike Model 3', price: '95$', image: Shoe32},
      {name: 'Nike Model 4', price: '66$', image: Shoe42},
      {name: 'Nike Model 3', price: '95$', image: Shoe32},
      {name: 'Nike Model 4', price: '66$', image: Shoe42},
      {name: 'Nike Model 3', price: '95$', image: Shoe32},
      {name: 'Nike Model 4', price: '66$', image: Shoe42},
      {name: 'Nike Model 3', price: '95$', image: Shoe32},
    ]
  return(
    <div className="men-container">
      <NavBar />
      <ProductList products={womenShoes}/>
      <Footer />
    </div>
  );
}

export default MenShoes;