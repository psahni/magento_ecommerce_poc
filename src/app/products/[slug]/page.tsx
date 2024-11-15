import { sdk } from "@/data/client";
import { IProduct } from "@/types";
import { GetProductDetailQuery } from "@/data/graphql/types";
import { ProductDetail } from "@/components/product-detail";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let data: GetProductDetailQuery;
  let productDetail: IProduct | undefined;

  if (params.slug) {
    data = await sdk.GetProductDetail({ slug: params.slug });
    productDetail = data.ecommerceProductsCollection?.items[0] as IProduct;
  }

  return (
    <>
      {productDetail ? (
        <ProductDetail productDetail={productDetail} />
      ) : (
        "No product found"
      )}
    </>
  );
}
