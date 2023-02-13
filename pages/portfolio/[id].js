import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log({ path: router.pathname, query: router.query });

  return (
    <div>
      <h1>Portfolio project page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
