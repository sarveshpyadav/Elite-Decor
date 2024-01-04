import "../styles/Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <header>
      <section id="hero">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__text--title">EliteDecor Luxury Furniture</h1>
            <p className="hero__text--des">Fresh Arrivals for 2024</p>
            <Link to="/products" className="hero__explore">
              Check out what's in our catalogue!
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
