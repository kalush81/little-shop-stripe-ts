import { Link } from "react-router-dom";
import { Button } from "../atoms/";
import "./product-card.css"

export default function ProductCard(props: any) {
  const { data: p } = props;

  const productFromCart = props.cart?.find(
    (product:any) => product.id === p.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${p.id}`}>
          <img
            src={p.image}
            width="100"
            height="100"
            className="product-image"
            alt={p.name}
          />
        </Link>
          {quantity > 0 && (
            <div className="product-quantity-container">
              <div className="product-quantity">{quantity}</div>
            </div>
          )}
      <div className="product-info">
        <h3>{p.name}</h3>
        <p>{p.description}</p>
      </div>
      </div>
      <div className="product-checkout">
        <div>
            
        {quantity > 0 && (
            <Button  onClick={() => {}} className="product-delete">x</Button>
          )}        
        </div>
        <Button >
          ${p.sizes?.small?.price}
        </Button>
      </div>
    </div>
  );
}