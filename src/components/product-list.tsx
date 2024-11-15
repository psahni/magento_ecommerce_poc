import { Flex } from "@radix-ui/themes";
import { ProductCard } from "@/components/product-card";
import { IProduct } from "@/types";
import { useProductStore } from "@/store/provider";

export function ProductList() {
  const { products } = useProductStore((state) => state);
  return (
    <Flex align="start" gap="20" direction="column" ml="5em">
      <Flex flexShrink="0" gap="20" wrap="wrap" direction="row" width="100%">
        {products.length > 0
          ? products.map((product: IProduct) => (
              <ProductCard
                key={product.slug}
                title={product.title}
                slug={product.slug || ""}
                imageUrl={product.image?.url}
              />
            ))
          : "No products are available"}
      </Flex>
    </Flex>
  );
}
