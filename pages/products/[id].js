import Head from "next/head";
import Title from "@/components/Title";
import { getProducts, getProduct } from "@/lib/product";
import { ApiError } from "@/lib/api";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: 5 * 60,
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404)
      return { notFound: true };
    throw err;
  }
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
