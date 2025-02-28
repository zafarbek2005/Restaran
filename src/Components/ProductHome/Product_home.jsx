import React from 'react'
import './Product.scss'
import P from '../ProductHome/p.png'
import { FaRegHeart } from "react-icons/fa";
const Product_home = () => {
  return (
   <>
    <h3>Популярные блюда</h3>
   <div className="products_home conteiner">
        <div className="produt_home">
            <img src= {P} alt="" />
            <div className="title">
                <div>
                <h3>Chicken soup</h3>
                <p>Spicy with garlic</p>
                </div>
                <div className="heart">
                    <button>
                      <FaRegHeart />
                    </button>
                </div>
            </div>
            <div className="price">
                    <h3>$10.00</h3>
                    <button>
                        
                    </button>
            </div>
        </div>
   </div>
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Product_home