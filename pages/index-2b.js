// Options 2b: Fetch products on the client side (in useEffect)
// directrly from internal API route
import { useState, useEffect } from "react";
import Head from "next/head";
import Title from "@/components/Title";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("api/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  console.log("[HomePage] render: ", products);
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
