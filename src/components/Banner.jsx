import { Link } from "react-router-dom";
import "../styles/Banner.css";

function Banner({ title, des, img }) {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <div className="text__side">
            <div className="text">
              <h2>{title}</h2>
              <p>{des}

              </p>
              <Link to="/products">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img
              src={img}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
