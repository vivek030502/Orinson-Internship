import React from "react";

import Diwali from "./assets/img/diwali.svg";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import TypeProducts from "./components/TypeProducts";

export default function Principal() {
  return (
    <>
      <div className="bg-light">        
        <Menu />
      </div>
      <Slider />
      <TypeProducts />

      <div className="bloco-post">
        <div className="post1">
          <img src={Diwali} alt="banner Diwali Offer" />
        </div>
        
        <div className="post2">
          <p>
            Redecorate and renovate your home with the offers we have prepared for you!
          </p>
        </div>
      </div>

      <ListProducts />
      <Newsletter />              
      <Footer />              
    </>
  )
}
