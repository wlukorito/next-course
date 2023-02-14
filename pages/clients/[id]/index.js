import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log({ query: router.query });

  function loadProjectHandler() {
    // router.replace(url) does not allow navigating back
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projectA",
      },
    });
  }

  return (
    <div>
      <h1>Projects of a selected client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
