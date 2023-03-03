import HomePage from "@/pages";
import Head from "next/head";
import Title from "./Title";

function Page({ title, children}) {
    return (
      <>
        <Head>
          <title>{title} - Next Shop</title>
        </Head>
        <main className="p-4">
          <Title>Next Shop</Title>
          {children}
        </main>
      </>
    );
}

export default Page;