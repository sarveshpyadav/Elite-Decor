import "../styles/Favorties.css";
import { Link } from "react-router-dom";
import products from "../data/products";

function Favorites() {
  return (
    <>
      <section id="favorites">
        <div className="favorites__content">
          <div className="favorites__container">
            <h2>EliteDecor Favorties</h2>
            <div className="favorites__grid">
              {products.slice(0, 8).map((product, index) => (
                <div key={index} className="favorites__home">
                  <Link to={`/product/${product.name}`}>
                    <div className="favorites__img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="favorites__details">
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

export default Favorites;
