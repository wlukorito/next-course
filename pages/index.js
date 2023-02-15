import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-) Generating...");
  const jsonData = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json")
  );
  const data = JSON.parse(jsonData);

  // redirect
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // renders 404 page
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 13, // ISG
  };
}

export default HomePage;
