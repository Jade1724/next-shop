// Options 2a: Fetch products on the client side (in useEffect)
// directrly from an external API
import { useState, useEffect } from "react";
import Head from "next/head";
import Title from "@/components/Title";
import { getProducts } from "@/lib/product";


export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
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
