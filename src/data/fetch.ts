import { sdk } from "@/data/client";
import { PER_PAGE } from "@/constants";
import { IProductCollection } from "@/types";

export async function FetchProducts(
  pageNum: number,
): Promise<IProductCollection> {
  const offset = pageNum * PER_PAGE;
  const { ecommerceProductsCollection } = await sdk.GetProductsCollection({
    skip: offset,
  });

  if (ecommerceProductsCollection && ecommerceProductsCollection.items) {
    return ecommerceProductsCollection as IProductCollection;
  }

  return { total: 0, items: [] };
}
