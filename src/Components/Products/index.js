import './_products.scss';

const Products = () => {

    const productData =[
        {
            pName:"Jacket",
            price:45,
            img:"shop-1.png"
        },
        {
            pName:"Shoes",
            price:50,
            img:"shop-2.png"
        },
        {
            pName:"Bag",
            price:100,
            img:"shop-3.png"
        },
        {
            pName:"Aviators",
            price:200,
            img:"shop-4.png"
        },
        {
            pName:"Denim",
            price:70,
            img:"shop-5.png"
        }
    ]
    
    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return (
                      <div className="mx-5 p-3 product-card">
                        <div className="product-image-container">
                          <img
                            className="images"
                            src={require("../../Assets/" + product.img)}
                          ></img>
                        </div>
                        <div className="product-info">
                          <h5>
                            <a href="#">{product.pName}</a>
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