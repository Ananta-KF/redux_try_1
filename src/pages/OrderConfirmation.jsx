import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const order = useSelector(state => state.orders.find(o => o.id === orderId));

  if (!order) return <p style={{padding:"1rem"}}>Order not found.</p>;

  return (
    <div style={{padding:"1rem"}}>
      <h2>Thank you, {order.customer.name}!</h2>
      <p>Your order <strong>#{order.id}</strong> is confirmed and will be delivered to:</p>
      <pre>{order.customer.address}</pre>
      <p>Payment method: <strong>Cash on Delivery</strong></p>
      <Link to="/">Back to shop</Link>
    </div>
  );
}
