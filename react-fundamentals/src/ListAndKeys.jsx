function ListAndKeys() {
  const users = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">React Lists & Keys</h1>
      
      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded-lg shadow">
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListAndKeys;

