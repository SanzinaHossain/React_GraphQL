import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphqlQuery";

export default function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.getUsers.map((item) => (
        <>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.age}</li>
          <li>{item.isMarried}</li>
        </>
      ))}
    </ul>
  );
}
