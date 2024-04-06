const Product = (props)=>{

    const {imgUrl,description,price} = props;

    return (
        <div className="productContainer">
            <div className="product">
                <img src={imgUrl} alt="Product" />
                <div className="productDetails">
                    <h3>{props.children}</h3>
                    <p>Description : {description}</p>
                    <p>Price : {price}</p>
                </div>
                <button className="addtocart" onClick={()=>alert('Added to cart')}>
                    Add to Cart
                </button>
            </div>
        </div>
    );

}

export default Product;