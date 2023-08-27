import { useDispatch,useSelector } from 'react-redux';
import {useEffect} from 'react';
import './_products.scss';
import ProductSlice from '../../Redux/Product/productSlice';
import {getProducts} from '../../Redux/Product/productAction';

const Products = () => {

    const productData = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getProducts())
    },[])

    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return (
                      <div className="mx-5 p-3 product-card">
                        <div className="product-image-container">
                          <img
                            className="images"
                            src={require("../../Assets/" + product.product_img)}
                          ></img>
                        </div>
                        <div className="product-info">
                          <h5>
                            <a href="#">{product.product_name}</a>
                          </h5>
                          <p className="product-price">${product.price}</p>
                          <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
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