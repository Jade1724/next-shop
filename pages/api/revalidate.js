async function handleRevalidation(req, res) {
  console.log("/api/revalidate received: ", req.body);
  const event = req.body;
  if (event.model === "product") {
    const id = event.entry.id;
    await Promise.all([
      await res.revalidate("/"),
      await res.revalidate(`products/${id}`),
    ]);
  }
  console.log(`revalidated product ${id}`);
  res.status(204).end();
}

export default handleRevalidation;
