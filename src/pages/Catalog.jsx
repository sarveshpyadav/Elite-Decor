import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
import "../styles/Catalog.css";
function Catalog() {
  return (
    <>
      <section id="catalog">
        <div className="catalog__container">
          <div className="catalog__content">
            <div>
              <Link to="/" className="catalog__link">
                {"< Home"}
              </Link>
            </div>
            <h2>ALL</h2>
            <div className="catalog__grid">
              {products.map((product, index) => (
                <div key={index} className="catalog__home">
                  <Link to={`/product/${product.name}`}>
                    <div className="catalog__img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="catalog__details">
                      <p>{product.name}</p>
                      <p>{`Price: $${product.price / 100}.00`}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
