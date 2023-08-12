import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function DataAdapter(key) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from the server");
  }
}

export default function FetchData() {
  const {
    isLoading,
    isError,
    data: dataList,
    error,
  } = useQuery(
    ["dataList"], //key
    DataAdapter, //function
    {
      enabled: true,
    }
  );

  // Handling loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handling error
  if (isError) {
    return <div>Sorry, something went wrong: {error.message}</div>;
  }

  return (
    <ul className="mx-auto">
      {dataList.map((data) => (
        <li
          key={data.id}
          className="bg-white rounded-3xl p-8 my-7 w-[53%] mx-auto"
        >
          <span className="font-extrabold">ID: {data.id}</span>
          <br />

          <span className="underline">Title: {data.title}</span>
          <br />

          <span className="text-gray-500">body: {data.body}</span>
        </li>
      ))}
    </ul>
  );
}
