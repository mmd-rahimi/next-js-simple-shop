import { IProductDetailParams, TProductType } from "@/types/types";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import AddToCartButton from "./components/AddToCartButton";

async function ProductDetail({ params }: IProductDetailParams) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: TProductType = await res.json();

  return (
    <div className="flex flex-col gap-8 items-center justify-center px-6 md:flex-row md:items-start">
      {/* Product Image */}
      <ProductImage image={product.image} title={product.title} />

      {/* Product Info */}
      <ProductInfo
        category={product.category}
        title={product.title}
        rating={product.rating?.rate}
        description={product.description}
        price={product.price}
      />

      {/* Add To Cart Button */}
      <AddToCartButton product={product} />
    </div>
  );
}

export default ProductDetail;