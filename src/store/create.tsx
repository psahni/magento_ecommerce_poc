/**
 * Boiler plate code
 * source: https://zustand.docs.pmnd.rs/guides/nextjs
 */

import { createStore } from "zustand/vanilla";
import { IProduct, IProductCollection } from "@/types";

export type ProductsState = {
  loading: boolean;
  products: Array<IProduct> | [];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  error?: string | undefined;
};

export type ProductsStateActions = {
  fetchProducts: (currentPage: number) => void;
  updateProducts: (products: Array<IProduct> | []) => void;
  updateCurrentPage: (n: number) => void;
};

export type ProductStore = ProductsState & ProductsStateActions;

export const defaultState: ProductsState = {
  loading: true,
  error: undefined,
  products: [],
  totalProducts: 0,
  currentPage: 1,
  totalPages: 1,
};

export const initProductStore = (): ProductsState => {
  return defaultState;
};

export const createProductStore = (
  initialState: ProductsState = defaultState,
) => {
  return createStore<ProductStore>()((set) => ({
    ...initialState,
    fetchProducts: async (currentPage: number) => {
      set({ loading: true, error: undefined });
      try {
        const response = await fetch(`/api/products?page=${currentPage}`);
        const { products } = (await response.json()) as {
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
