import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("(Re-) Generating...");
  const jsonData = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json")
  );
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 13, // ISG
  };
}

export default HomePage;
