import { HomePage } from "@/components/home-page";
import { ProductStoreProvider } from "@/store/provider";
import { CategoryType } from "@/constants";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <ProductStoreProvider>
      <HomePage category={slug.toLocaleLowerCase() as CategoryType} />
    </ProductStoreProvider>
  );
}
