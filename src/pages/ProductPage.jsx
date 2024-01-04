import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import products from "../data/products";
import { cartModal } from "../components/Nav";
import "../styles/ProductPage.css";
import { useCart } from "../cart/cartContext";

function ProductPage() {
  const { id } = useParams();
  const foundProduct = products.find((product) => product.name === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const addOrSub = (action) => {
    if (action === "add") {
      if (quantity === 3) {
        return;
      }
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const filteredProducts = products.filter(
    (product) => product.name !== foundProduct.name
  );
  const shuffledProducts = shuffleArray(filteredProducts).slice(0, 4);
  return (
    <section id="product">
      <div className="product__container">
        <div className="product__content">
          <div className="product__item">
            <div className="product__left">
              <img src={foundProduct.image} alt={foundProduct.name} />
            </div>
            <div className="product__right">
              <h2>{foundProduct.name}</h2>
              <p className="product__description">
                Built with meticulous care at the state-of-the-art M&H
                facilities, our collection embodies the essence of modern
                furniture craftsmanship. Every piece is a testament to the
                dedication and precision that goes into creating furnishings
                that not only beautify your space but also stand the test of
                time.
              </p>
              <p className="product__quantitle">Quantity</p>
              <div className="product__quantity">
                <button
                  className="product__btn"
                  onClick={() => addOrSub("sub")}
                >
                  -
                </button>
                <p className="product__amount">{quantity}</p>
                <button
                  className="product__btn"
                  onClick={() => addOrSub("add")}
                >
                  +
                </button>
              </div>
              <div className="product__buyingbtns">
                <button
                  className="product__cart "
                  onClick={() => addToCart(foundProduct, quantity)}
                >
                  Add To Cart
                </button>
                <button className="product__buy ">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="product__specs">
            <div className="product__spec">
              <p>Texture:</p>
              <p>Smooth</p>
            </div>
            <div className="product__spec">
              <p>Weight:</p>
              <p>30 Pounds</p>
            </div>
            <div className="product__spec">
              <p>Size:</p>
              <p>Large</p>
            </div>
          </div>
          <div className="product__other">
            <h3>Related Products</h3>
            <div className="product__grid">
              {shuffledProducts.map((product, index) => (
                <div key={index} className="product__home">
                  <Link to={`/product/${product.name}`}>
                    <div className="product__img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product__details">
                      <p>{product.name}</p>
                      <p>{`Price: $${product.price / 100}.00`}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
