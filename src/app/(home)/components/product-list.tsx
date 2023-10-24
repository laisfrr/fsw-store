import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="{[&::webkit-scrollbar]:hidden flex w-full gap-4 overflow-x-auto px-5">
      {products.map((product) => (
        <div key={product.id} className="w-[170px] max-w-[170]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
