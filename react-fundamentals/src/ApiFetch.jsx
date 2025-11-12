import { useState, useEffect } from "react";

function ApiFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch runs only once because dependency array is []
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>⏳ Loading users...</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>👥 User List Using API</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: "10px 0" }}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiFetch;





// import { useEffect, useState } from "react";

// function FetchUsers() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from API
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!res.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await res.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false); // Always stop loading
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-blue-500">Loading users...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Users List</h1>
//       <ul className="space-y-2">
//         {users.map((user) => (
//           <li
//             key={user.id}
//             className="p-3 border rounded-md bg-gray-50 hover:bg-gray-100"
//           >
//             {user.name} – <span className="text-gray-600">{user.email}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FetchUsers;
