import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../app/apiSlice";
import AddToCartButton from "../components/AddToCartButton";

export default function ProductDetail() {
  const { id } = useParams();
  const { data = [], isLoading } = useGetProductsQuery();
  if (isLoading) return <p>Loading…</p>;

  const product = data.find(p => p.id === id);
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{padding:"1rem"}}>
      <img src={product.image} alt={product.name} style={{maxWidth:"300px"}}/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price.toFixed(2)}</h3>
      <AddToCartButton product={product}/>
    </div>
  );
}
