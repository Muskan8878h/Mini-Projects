import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // update state with input value
  };
// controller...
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    alert(`Hello, ${name}!`);
  };

// uncontroller
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
  // };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Controlled Form Example</h1>
      <form onSubmit={handleSubmit}>
        {/* controller */}
        <input 
          type="text" 
          value={name} 
          onChange={handleChange} 
          placeholder="Enter your name" 
        />

        {/* uncontroller */}
        {/* <input
          type="text"
          placeholder="Enter name"
          ref={nameRef}
          className="border p-2 rounded w-full"
        /> */}
        <button type="submit">Submit</button>
      </form>
      <p>You typed: {name}</p>
    </div>
  );
}

export default App;
