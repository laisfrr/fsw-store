import { prismaClient } from "@/lib/prisma";

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
  return <h1>{product.name}</h1>;
};

export default ProductsDatailsPage;
