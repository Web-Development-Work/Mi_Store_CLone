import ProductReviewcard from "./ProductReviewCard";
import "../styles/ProductReviews.css";

const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item,index)=>(
                <ProductReviewcard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}/>
            ))}
        </div>
    )
}

export default ProductReviews
