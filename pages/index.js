import Head from "next/head";
import Title from "@/components/Title";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="p-4">
        <Title>Next Shop</Title>
        <p>[TODO: display products]</p>
      </main>
    </>
  );
}
