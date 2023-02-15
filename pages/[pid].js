import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  // fallback page
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}
async function getData() {
  const jsonData = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json")
  );
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  // 404
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;
