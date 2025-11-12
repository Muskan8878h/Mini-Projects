// function ProfileCard({ name, role }) {
//   return (
//     <div className="p-4 shadow-md rounded-xl bg-white text-center w-64">
//       <h2 className="text-xl font-bold">{name}</h2>
//       <p className="text-gray-600">{role}</p>
//     </div>
//   );
// }

// function Props() {
//   return (
//     <div className="flex gap-4 p-6">
//       <ProfileCard name="Alice" role="Frontend Developer" />
//       <ProfileCard name="Bob" role="Backend Developer" />
//     </div>
//   );
// }

// export default Props;



function ProfileCard({ name, role, imgUrl }) {
  return (
    <div className="p-4 shadow-md rounded-xl bg-white text-center w-64">
      <img src={imgUrl} alt="profile" className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="mt-2 text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
        Follow
      </button>
    </div>
  );
}

function Props() {
  return (
    <div className="flex gap-4 p-6">
      <ProfileCard
        name="Alice"
        role="Frontend Developer"
        imgUrl="https://images.pexels.com/photos/33500387/pexels-photo-33500387.jpeg?cs=srgb&dl=pexels-veronika-andrews-2153322013-33500387.jpg&fm=jpg"
      />
      <ProfileCard
        name="Bob"
        role="Backend Developer"
        imgUrl="https://images.pexels.com/photos/33500387/pexels-photo-33500387.jpeg?cs=srgb&dl=pexels-veronika-andrews-2153322013-33500387.jpg&fm=jpg"
      />
    </div>
  );
}

export default Props;




// function Props({ name = "Unknown", role = "Developer", imgUrl }) {
//   return (
//     <div className="p-4 shadow-md rounded-xl bg-white text-center w-64">
//       <img src={imgUrl || "https://images.pexels.com/photos/33500387/pexels-photo-33500387.jpeg?cs=srgb&dl=pexels-veronika-andrews-2153322013-33500387.jpg&fm=jpg"} alt="profile" className="w-20 h-20 rounded-full mx-auto" />
//       <h2 className="mt-2 text-lg font-bold">{name}</h2>
//       <p className="text-gray-600">{role}</p>
//     </div>
//   );
// }

// export default Props;





// function Card({ children }) {
//   return <div className="p-4 border rounded-xl">{children}</div>;
// }

// function Props() {
//   return (
//     <div>
//       <Card>
//         <h2>Hello from inside Card!</h2>
//         <p>This is child content.</p>
//       </Card>
//     </div>
//   );
// }

// export default Props;
