import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name}/>
      <h4>{product.name}</h4>
      <p>₹{product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}
