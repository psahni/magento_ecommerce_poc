"use server";
/* eslint-disable no-console */

import { sdk } from "@/data/client";
import { PER_PAGE } from "@/constants";
import { GetProductsCollectionMagentoQuery } from "@/data/graphql/types";

export async function FetchProducts(
  pageNum: number,
  categoryUids: string[],
): Promise<GetProductsCollectionMagentoQuery> {
  // eslint-disable-next-line sonarjs/prefer-immediate-return
  const data = await sdk.GetProductsCollectionMagento({
    filter: {
      category_uid: { in: categoryUids },
    },
    limit: PER_PAGE,
    currentPage: pageNum,
  });

  return data;
}
