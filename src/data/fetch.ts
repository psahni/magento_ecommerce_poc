/* eslint-disable no-console */

import { sdk } from "@/data/client";
import { PER_PAGE } from "@/constants";
import { GetProductsCollectionMagentoQuery } from "@/data/graphql/types";

export async function FetchProducts(
  pageNum: number,
): Promise<GetProductsCollectionMagentoQuery> {
  // eslint-disable-next-line sonarjs/prefer-immediate-return
  const data = await sdk.GetProductsCollectionMagento({
    filter: {},
    limit: PER_PAGE,
    currentPage: pageNum,
  });

  console.log("====================");
  console.log(JSON.stringify(data));
  console.log("====================");
  return data;
}
