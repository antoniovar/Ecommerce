import React from "react";
import ProductList from "../components/ProductList.jsx"
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Sock11 from "../imgs/calcetin11.webp"
import Sock21 from "../imgs/calcetin21.webp"
import Sock31 from "../imgs/calcetin31.webp"

function MenSocks(){
  const menSocks = [
    {name: 'Socks Model 1', price: '9$', image: Sock11}, 
    {name: 'Socks Model 2', price: '10$', image: Sock21}, 
    {name: 'Socks Model 3', price: '7$', image: Sock31},
    {name: 'Socks Model 2', price: '10$', image: Sock21},
    {name: 'Socks Model 3', price: '7$', image: Sock31},
    {name: 'Socks Model 1', price: '9$', image: Sock11},
    {name: 'Socks Model 2', price: '10$', image: Sock21},
    {name: 'Socks Model 1', price: '9$', image: Sock11}, 
    {name: 'Socks Model 3', price: '7$', image: Sock31}    
  ]
  return(
    <div>
      <NavBar />
      <ProductList products={menSocks} />
      <Footer />
    </div>
  );
}
export default MenSocks;