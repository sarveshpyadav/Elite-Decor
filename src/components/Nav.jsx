import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/cartContext";
import "../styles/Nav.css";

export function cartModal(string) {
  if (string === "icon") {
    document.querySelector(".cart").style.right = "0";
  } else {
    document.querySelector(".cart").style.right = "-150%";
  }
}

function Nav() {
  const [mobile, setMobile] = useState(false);
  const openMobile = () => {
    setMobile(!mobile);
  };

  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <>
      <nav className="sticky-nav">
        <div className="navbar">
          <div className="navbar__logo">
            <Link to="/">EliteDecor</Link>
          </div>
          <ul className="navbar__menu">
            <li className="nav__menu__text">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__menu__text">
              <Link to="/products">Catalogue</Link>
            </li>
            <li className="nav__menu__text">
              <Link to="/product/Gold lamp">Products</Link>
            </li>
            <div>
              <div className="red-dot">{cart.length}</div>
              <FaShoppingCart
                className="nav__cart"
                onClick={() => cartModal("icon")}
              />
            </div>

            <IconMenu2 onClick={openMobile} className="hamburger-menu" />
          </ul>
        </div>
      </nav>
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close__mobile" />
        <ul>
          <li onClick={openMobile}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/products">Catalogue</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/product/Gold lamp">Products</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <div className="cart__close">
          <p>{`Items In Your Cart (${cart.length})`}</p>
          <IconX
            onClick={() => cartModal("close")}
            className="cart__closebtn"
          />
        </div>
        <div className="cart__items">
          {cart.map((item, index) => (
            <div key={index} className="cart__item">
              <img src={item.product.image} alt="" />
              <div className="cart__item__middle">
                <p>{item.product.name}</p>
                <div className="cart__item__buttons">
                  <p>Quantity</p>
                  <p>{item.quantity}</p>
                </div>
              </div>
              <div className="cart__item__end">
                <p>{`$${(item.product.price * item.quantity) / 100}.00`}</p>
                <IconX onClick={() => removeFromCart(item.product.name)} />
              </div>
            </div>
          ))}
        </div>
        <div className="cart__totaldiv">
          <div className="cart__subtotal">
            <p>Subtotal</p>
            <p>
              $
              {cart.reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
              ) / 100}
              .00
            </p>
          </div>
          <button className="cart__checkout" onClick={() => cartModal("close")}>
            Go Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;