"use client";

import { ProductList } from "@/components/product-list";
import { PaginateProductList } from "@/components/paginate-product-list";
import { useEffect, useCallback } from "react";
import { useProductStore } from "@/store/provider";
import { Spinner } from "@/components/spinner";
import { CategoryType, CATEGORY_MAPPING } from "@/constants";

export function HomePage({ category }: { category?: CategoryType }) {
  const { fetchProducts, loading, currentPage, updateCurrentPage } =
    useProductStore((state) => state);

  const handlePageClick = useCallback(
    ({ selected }: { selected: number }) => {
      updateCurrentPage(selected);
    },
    [updateCurrentPage],
  );

  useEffect(() => {
    fetchProducts(
      currentPage,
      category ? CATEGORY_MAPPING[category as CategoryType] : [],
    );
  }, [currentPage, fetchProducts]);

  return loading ? (
    <Spinner />
  ) : (
    <main>
      <ProductList />
      <PaginateProductList handlePageClick={handlePageClick} />
    </main>
  );
}
