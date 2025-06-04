import { useGetProductsQuery } from "../app/apiSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { data = [], isLoading } = useGetProductsQuery();
  if (isLoading) return <p style={{padding:"1rem"}}>Loading…</p>;

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",
      gap:"1rem",
      padding:"1rem"
    }}>
      {data.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
