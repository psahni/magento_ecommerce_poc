import { sdk } from "@/data/client";
import { IProduct, IProductCollection } from "@/types";
import { ProductDetail } from "@/components/product-detail";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let data;
  let products: IProductCollection = { items: [], total_count: 0 };

  const { slug } = params;

  if (slug) {
    data = await sdk.GetProductBySku({ sku: slug });
    products = data.products as IProductCollection;
  }

  return (
    <>
      {products && products.items.length > 0 ? (
        <ProductDetail productDetail={products.items[0] as IProduct} />
      ) : (
        "No product found"
      )}
    </>
  );
}
