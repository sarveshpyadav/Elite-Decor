import "../styles/Trending.css";
import { Link } from "react-router-dom";
import products from "../data/products";
function Trending() {
  return (
    <section id="trending">
      <div className="trending__container">
        <div className="trending__content">
          <div className="trending__other">
            <h2>Trending</h2>
            <div className="trending__grid">
              {products.slice(0, 4).map((product, index) => (
                <div key={index} className="trending__home">
                  <Link to={`/product/${product.name}`}>
                    <div className="trending__img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="trending__details">
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

export default Trending;
