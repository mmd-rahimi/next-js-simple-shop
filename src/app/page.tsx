import ProductList from "@/components/ProductList";

export default async function Home() {

  const res = await fetch("https://fakestoreapi.com/Products")
  const products = await res.json()    

  return(
    <div className="flex items-center justify-center">
      <ProductList products={products} />
    </div>
  );
}
