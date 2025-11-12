function TailwindComponent() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg text-center w-64 mx-auto mt-24">
      <img
        src="https://images.pexels.com/photos/33500387/pexels-photo-33500387.jpeg?cs=srgb&dl=pexels-veronika-andrews-2153322013-33500387.jpg&fm=jpg"
        alt="profile"
        className="w-36 h-36 rounded-full mx-auto"
      />
      <h2 className="mt-3 text-lg font-bold">John Doe</h2>
      <p className="text-gray-600">React Developer</p>
      <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
        Follow
      </button>
    </div>
  );
}

export default TailwindComponent;
