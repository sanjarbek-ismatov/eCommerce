import products from "data/products.json";
import "./PopularProducts.css";
import ProductCard from "../Product";
async function getProducts() {
  const res = await fetch("http://localhost/api/getAllProducts");
  const data = await res.json();
  return data;
}
function PopularProducts({ title }: { title: string }) {
  // const products = await getProducts()
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <div className="my-5 grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-5 grid-rows-2">
          {products.map((e, i) => (
            <ProductCard key={i} details={e} />
          ))}
        </div>
      </div>
    </>
  );
}
export default PopularProducts;
