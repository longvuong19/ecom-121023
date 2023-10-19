import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { getProducts } from "@/helpers";

export default async function Home() {
  const products = await getProducts();
  // console.log(products);

  return (
    <main>
      <Banner />
      <Products />
    </main>
  );
}
