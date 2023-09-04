import {useLocation} from "react-router-dom";
import "./product-details.scss";
import { useDispatch } from "react-redux";
import {addCartItem} from '../../Redux/Cart/CartSlice';

const ProductDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const addToCart =()=>{
        dispatch(addCartItem(location.state))
    }
    return (
      <div>
        <div className="row container my-5 product-detail-container">
          <div className="col-5 product-img-container">
            <img
              src={require("../../Assets/" + location.state.product_img)}
            ></img>
          </div>
          <div className="col-7 product-info">
            <div>
              <span id="product-name">{location.state.product_name}</span>
            </div>
            <div className="rating-container">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="product-price">
              MRP: <span className="price">${location.state.price}</span>
            </div>
            <div style={{ fontSize: "0.8em" }}>Inclusive of all Taxes</div>
            <div className="my-3 product-description">
              <span>Some Product Despriction..</span>
            </div>
            <div className="my-5" onClick={addToCart}>
              <div className="btn btn-warning cart-button">
                <div className="cart-icon-container">
                  <i className="fa fa-shopping-cart" />
                </div>
                <div className="cart-text-container">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetails;