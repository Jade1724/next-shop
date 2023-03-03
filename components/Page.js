import Head from "next/head";
import Title from "./Title";
import NavBar from "./NavBar";


function Page({ title, children}) {
    return (
      <>
        <Head>
          <title>{title} - Next Shop</title>
        </Head>
        <header>
          <NavBar />
        </header>
        <main className="p-4">
          <Title>Next Shop</Title>
          {children}
        </main>
      </>
    );
}

export default Page;