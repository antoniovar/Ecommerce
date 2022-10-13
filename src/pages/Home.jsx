import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home(){
  return(
    <div className="home-container">
      <div className="text">
        <h1>Welcome to <i>All4feet</i> shop</h1>
      </div>
      <div className="categories">
        <Link className="link" to='/Ecommerce/menShoes'>Shop for Men</Link>
        <Link className="link" to='/Ecommerce/womenShoes'>Shop for Women</Link>
      </div>
     
    </div>
  );
}

export default Home;