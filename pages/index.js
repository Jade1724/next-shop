import Head from "next/head";
import Title from "@/components/Title";

const products = [
  { id: 1, title: "First product" },
  { id: 2, title: "Second product" },
];

export default function HomePage() {
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
