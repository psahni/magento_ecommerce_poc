/**
 * Boiler plate code
 * source: https://zustand.docs.pmnd.rs/guides/nextjs
 */

import { createStore } from "zustand/vanilla";
import { IProduct, IProductCollection } from "@/types";
import { FetchProducts } from "@/data/fetch";
import { CATEGORY_MAPPING } from "@/constants";

export type ProductsState = {
  loading: boolean;
  products: Array<IProduct> | [];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  error?: string | undefined;
  defaultCategoryUIDs: string[];
};

export type ProductsStateActions = {
  fetchProducts: (currentPage: number, categoryUIDs?: string[]) => void;
  updateProducts: (products: Array<IProduct> | []) => void;
  updateCurrentPage: (n: number) => void;
};

export type ProductStore = ProductsState & ProductsStateActions;

export const defaultState: ProductsState = {
  loading: true,
  error: undefined,
  products: [],
  totalProducts: 0,
  currentPage: 0,
  totalPages: 1,
  defaultCategoryUIDs: CATEGORY_MAPPING.men,
};

export const initProductStore = (): ProductsState => {
  return defaultState;
};

export const createProductStore = (
  initialState: ProductsState = defaultState,
) => {
  return createStore<ProductStore>()((set) => ({
    ...initialState,
    fetchProducts: async (currentPage: number, categoryUIDs: string[] = []) => {
      set({ loading: true, error: undefined });

      const categoryUIDsToFetch =
        categoryUIDs.length > 0
          ? categoryUIDs
          : initialState.defaultCategoryUIDs;

      try {
        const response = await FetchProducts(
          currentPage + 1,
          categoryUIDsToFetch,
        );
        const { products } = response as {
          total_count: number;
          products: IProductCollection;
        };

        set({
          products: products.items,
          loading: false,
          totalProducts: products.total_count,
        });
      } catch (error) {
        set({ error: (error as Error).message, loading: false });
      }
    },
    updateCurrentPage: (n: number) => {
      set({ currentPage: n });
    },
    updateProducts: (products: Array<IProduct> | []) => {
      set({ products, loading: false });
    },
  }));
};
