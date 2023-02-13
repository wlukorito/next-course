import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log({ query: router.query });

  return (
    <div>
      <h1>Project page for a specific project of a selected client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
