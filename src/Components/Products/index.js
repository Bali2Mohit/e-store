import { useDispatch,useSelector } from 'react-redux';
import {useEffect} from 'react';
import './_products.scss';
import ProductSlice from '../../Redux/Product/productSlice';
import {getProducts} from '../../Redux/Product/productAction';
import { addCartItem } from "../../Redux/Cart/CartSlice.js";
import { Link } from 'react-router-dom';

const Products = () => {

    const productData = useSelector(state => state.productReducer.products);
    // const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getProducts())
    },[])

    const addToCart = (itemData)=>{
      const payload= {...itemData, quantity:1}
      dispatch(addCartItem(payload));
    }

    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return (
                      <div className="mx-5 p-3 product-card" key={product.id}>
                        <Link to ="/productDetails" state={product}>
                          <div className="product-image-container">
                            <img
                              className="images"
                              src={require("../../Assets/" +
                                product.product_img)}
                            ></img>
                          </div>
                        </Link>

                        <div className="product-info">
                          <h5>
                            <Link to="/ProductDetails" state={product}>
                              {product.product_name}
                            </Link>
                          </h5>
                          <p className="product-price">${product.price}</p>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div
                            className="my-3"
                            onClick={() => addToCart(product)}
                          >
                            <div className="cart-button">
                              <div className="cart-icon-container">
                                <i className="fa fa-shipping-cart mx-4" />
                              </div>
                              <div className="cart-text-container mx-3">
                                <p>Add to Cart</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })
            }
            
        </div>
    )
}

export default Products;