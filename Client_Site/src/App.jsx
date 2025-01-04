import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphqlQuery";

export default function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data.getUsers[0].isMarried);

  return (
    <div>
      <h1 className="text-xl font-bold text-center">User Details</h1>
      {data.getUsers.map((item, index) => (
        <div key={index} className="bg-green-400 my-2 p-5 w-80 justify-center">
          <h1>Id: {item.id}</h1>
          <h1>Name: {item.name}</h1>
          <h1>Age: {item.age}</h1>

          {/* react can not render the boolean value as string to show in the user interface */}
          <h1>Married: {item.isMarried ? "Yes" : "No"}</h1>
          <h1>Married: {item.isMarried.toString()}</h1>
        </div>
      ))}
    </div>
  );
}
