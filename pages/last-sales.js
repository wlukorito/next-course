import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const { data, error } = useSWR(
    "https://next-course-54a9c-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>An error occured</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>{`${sale.username} - $${sale.volume}`}</li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
