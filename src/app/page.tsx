import { HomePage } from "@/components/home-page";
import { ProductStoreProvider } from "@/store/provider";

export default function Home() {
  return (
    <ProductStoreProvider>
      <HomePage />
    </ProductStoreProvider>
  );
}
