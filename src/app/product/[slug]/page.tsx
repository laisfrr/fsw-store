import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

interface ProductsDatailsPageProps {
  params: {
    slug: string;
  };
}
const ProductsDatailsPage = async ({
  params: { slug },
}: ProductsDatailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <div className="">
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
    </div>
  );
};

export default ProductsDatailsPage;
