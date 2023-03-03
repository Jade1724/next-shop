import { getProducts } from "@/lib/product";
import ProductCard from "@/components/ProductCard";
import Page from "@/components/Page";

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
    <Page title="">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}
