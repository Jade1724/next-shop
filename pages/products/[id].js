import Head from "next/head";
import Title from "@/components/Title";
import { getProducts, getProduct } from "@/lib/product";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id);
  return {
    props: { product },
    revalidate: 5 * 60,
  };
}

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}