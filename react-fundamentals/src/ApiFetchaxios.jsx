import { useEffect, useState } from "react";
import axios from "axios";

function FetchUsersAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data); // axios automatically gives JSON
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-blue-500">Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users List (Axios)</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 border rounded-md bg-gray-50 hover:bg-gray-100"
          >
            {user.name} – <span className="text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsersAxios;
