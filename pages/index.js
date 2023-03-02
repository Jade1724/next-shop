import Head from "next/head";
import Link from "next/link";
import Title from "@/components/Title";
import { getProducts } from "@/lib/product";

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()");
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}

export default function HomePage({ products }) {
  console.log("[HomePage] render: ");
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
