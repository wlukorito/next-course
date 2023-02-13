import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log({ query: router.query });

  return (
    <div>
      <h1>Projects of a selected client</h1>
    </div>
  );
}

export default ClientProjectPage;
