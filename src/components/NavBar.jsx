import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const total = useSelector(state => state.cart.total);
  return (
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Link to="/"><h2>MiniShop</h2></Link>
      <Link to="/cart">Cart ({total})</Link>
    </nav>
  );
}
