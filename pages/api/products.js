import { getProducts } from "@/lib/product";

async function handler(req, res) {
    console.log('[api/product.js] handler: ')
    const products = await getProducts();
  res.status(200).json(products);
}

export default handler;
