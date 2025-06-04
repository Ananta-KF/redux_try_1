import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addToCart({ id: product.id }))}>
      Add to cart
    </button>
  );
}
