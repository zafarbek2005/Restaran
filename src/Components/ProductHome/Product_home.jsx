import React from 'react';
import './Product.scss';
import P from '../ProductHome/p.png';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

// Reusable ProductCard Component
const ProductCard = ({ title, description, price, imgSrc }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={imgSrc} alt={title} />
      <div className="product-info">
        <div className="product-title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="product-heart">
          <button>
            <FaRegHeart />
          </button>
        </div>
      </div>
      <div className="product-price">
        <h3>{price}</h3>
        <button>
          <IoCartOutline />
        </button>
      </div>
    </div>
  );
};

const Product_home = () => {
  const products = [
    { title: 'Chicken soup', description: 'Spicy with garlic', price: '$10.00', imgSrc: P },
    { title: 'Chicken soup', description: 'Spicy with garlic', price: '$10.00', imgSrc: P },
    { title: 'Chicken soup', description: 'Spicy with garlic', price: '$10.00', imgSrc: P },
    { title: 'Chicken soup', description: 'Spicy with garlic', price: '$10.00', imgSrc: P },
    { title: 'Chicken soup', description: 'Spicy with garlic', price: '$10.00', imgSrc: P },
    { title: 'Chicken soup', description: 'Spicy with garlic', price: '$10.00', imgSrc: P },
  ];

  return (
    <>
      <h3 className="section-title">Популярные блюда</h3>
      <div className="products-container conteiner">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Product_home;
