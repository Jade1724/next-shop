// Options 1c: fetch products on the server side (in getServerSideProps)
import Head from "next/head";
import Title from "@/components/Title";
import { getProducts } from "@/lib/product";

export async function getServerSideProps() {
  console.log("[HomePage] getStaticProps()");
  const products = await getProducts();
  return { props: { products } };
}
export default function HomePage({ products }) {
  console.log('[HomePage] render: ', products)
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
