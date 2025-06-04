import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../app/apiSlice";

export default function Cart() {
  const { data: products = [] } = useGetProductsQuery();
  const items      = useSelector(state => state.cart.items);
  const dispatch   = useDispatch();
  const navigate   = useNavigate();
  const entries    = Object.entries(items);

  const totalPrice = entries.reduce((sum, [id, qty])=>{
    const prod = products.find(p=>p.id === id);
    return prod ? sum + prod.price * qty : sum;
  }, 0);

  if (entries.length === 0) return <p style={{padding:"1rem"}}>Cart is empty.</p>;

  return (
    <div style={{padding:"1rem"}}>
      <h2>Your Cart</h2>
      <table>
        <thead><tr><th>Product</th><th>Qty</th><th>Price</th><th/></tr></thead>
        <tbody>
          {entries.map(([id, qty])=>{
            const prod = products.find(p=>p.id === id);
            return (
              <tr key={id}>
                <td>{prod?.name}</td>
                <td>{qty}</td>
                <td>₹{(prod?.price*qty).toFixed(2)}</td>
                <td><button onClick={()=>dispatch(removeFromCart({id}))}>X</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      <button onClick={()=>navigate("/checkout")}>Proceed to Checkout</button>
    </div>
  );
}
