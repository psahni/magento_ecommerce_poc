/**
 * Boiler plate code
 * source: https://zustand.docs.pmnd.rs/guides/nextjs
 */

"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type ProductStore,
  initProductStore,
  createProductStore,
} from "@/store/create";

export type ProductStoreApi = ReturnType<typeof createProductStore>;

export const ProductStoreContext = createContext<ProductStoreApi | undefined>(
  undefined,
);

export interface ProductStoreProviderProps {
  children: ReactNode;
}

export const ProductStoreProvider = ({
  children,
}: ProductStoreProviderProps) => {
  const storeRef = useRef<ProductStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createProductStore(initProductStore());
  }

  return (
    <ProductStoreContext.Provider value={storeRef.current}>
      {children}
    </ProductStoreContext.Provider>
  );
};

export const useProductStore = <T,>(
  selector: (store: ProductStore) => T,
): T => {
  const productStoreContext = useContext(ProductStoreContext);

  if (!productStoreContext) {
    throw new Error(
      `productStoreContext must be used within ProductStoreProvider`,
    );
  }

  return useStore(productStoreContext, selector);
};
