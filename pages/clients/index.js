import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "melb", name: "Mel B" },
  ];
  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li>
            <Link
              key={client.id}
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
