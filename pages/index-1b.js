// Options 1b: Fetch products on the server side (in getStaticProps)
// but with Incremental Static Regeneration
import { useEffect } from "react";
import Head from "next/head";
import Title from "@/components/Title";
import { getProducts } from "@/lib/product";

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()");
  const products = await getProducts();
  return { props: { products }, revalidate: 30 };
}
export default function HomePage({ products }) {
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
