import "./App.css";

function InlineCss() {
  return (
    <div className="card">
      <img
        src="https://images.pexels.com/photos/33500387/pexels-photo-33500387.jpeg?cs=srgb&dl=pexels-veronika-andrews-2153322013-33500387.jpg&fm=jpg"
        alt="profile"
        className="profile-img"
      />
      <h2>John Doe</h2>
      <p>React Developer</p>
      <button className="btn">Follow</button>
    </div>
  );
}

export default InlineCss;
