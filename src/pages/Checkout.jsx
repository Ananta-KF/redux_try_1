import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../features/orders/ordersSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [name,    setName]    = useState("");
  const [address, setAddress] = useState("");
  const dispatch  = useDispatch();
  const items     = useSelector(state=>state.cart.items);
  const navigate  = useNavigate();

  const submit = e => {
    e.preventDefault();
    const action = dispatch(placeOrder({ customer:{name,address}, items }));
    dispatch(clearCart());
    navigate("/order-confirmation/"+action.payload.id);
  };

  return (
    <form onSubmit={submit} style={{padding:"1rem",display:"flex",flexDirection:"column",gap:"0.5rem",maxWidth:"400px"}}>
      <h2>Checkout – Cash on Delivery</h2>
      <label>Name   <input  required value={name}    onChange={e=>setName(e.target.value)}/></label>
      <label>Address<textarea required value={address} onChange={e=>setAddress(e.target.value)}/></label>
      <button type="submit">Place Order</button>
    </form>
  );
}
