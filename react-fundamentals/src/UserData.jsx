import {useState} from "react";

// thi is a controller form example with multiple inputs
function UserData() {
  // state for multiple inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle change for all inputs (keeps inputs in sync)
  const handleChange = (e) => {   //e is a React SyntheticEvent (a cross-browser wrapper around the native event).
    const { name, value } = e.target; //e.target is the input that fired the event.

    // when the next state depends on the previous state, prefer the functional updater: setFormData(prev => ({ ...prev, [name]: value }));
    setFormData(formData=>({
      ...formData,   //...formData copies the existing object (so you don’t lose other fields).
      [name]: value, // dynamically update key // [name] is a computed property name that uses the input's name attribute to update the correct field.
    }));
  };

  const handleSubmit = (e) => { //e.preventDefault() stops the browser’s default form submission (which would reload the page). We’ll handle submission in JS.
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.password) {
      alert(" Please fill all fields!");
      return;
    }
    if (!formData.email.includes("@")) {
      alert(" Invalid email format!");
      return;
    }
    if (formData.password.length < 6) {
      alert(" Password must be at least 6 characters!");
      return;
    }

    alert(` Welcome, ${formData.name}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name} //value={formData.name} makes this a controlled input.
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button> {/* Triggers the form’s onSubmit. */}
      </form>

      <h3>Live Preview</h3>  {/*Reads directly from state, so it updates as you type. */}
      <p> Name: {formData.name}</p>
      <p> Email: {formData.email}</p>
      <p> Password: {formData.password}</p>
    </div>
  );
}


export default UserData;


/* const isInvalid =
  !formData.name.trim() ||
  !formData.email.includes("@") ||
  formData.password.length < 6;

<button type="submit" disabled={isInvalid}>Register</button>


//Trim input on submit to avoid accidental spaces:
const name = formData.name.trim();

//Add noValidate on the form if you want full custom validation:
<form noValidate onSubmit={handleSubmit}>
*/