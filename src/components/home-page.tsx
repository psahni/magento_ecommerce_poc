"use client";

import { ProductList } from "@/components/product-list";
import { PaginateProductList } from "@/components/paginate-product-list";
import { useEffect, useCallback } from "react";
import { useProductStore } from "@/store/provider";
import { Spinner } from "@/components/spinner";

export function HomePage() {
  const { fetchProducts, loading, currentPage, updateCurrentPage } =
    useProductStore((state) => state);

  const handlePageClick = useCallback(
    ({ selected }: { selected: number }) => {
      updateCurrentPage(selected);
    },
    [updateCurrentPage],
  );

  useEffect(() => {
    fetchProducts(currentPage);
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
