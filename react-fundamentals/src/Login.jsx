import { useState } from "react";


function Login(){
    
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const users=["muskan","ravi","aman","kanika"];


  const tasks = [
    { id: 1, title: "Learn React", done: true },
    { id: 2, title: "Practice useEffect", done: false },
    { id: 3, title: "Build a project", done: false },
  ];


    return (
        <div style={{textAlign:"center", marginTop: "50px" }}>
        <h1>Welcome to react app</h1>
            {isLoggedIn ? <h2> you are logged in</h2> : <h2>Plearse login</h2>}
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>

        {isLoggedIn ?(
          <ul>
            {users.map((user,i)=>(
              <li key={i}>{user}</li>
            ))}
          </ul>
        ) : (
          <p>Please log in to see the user list.</p>
        )}
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>



        <h1>✅ Task List</h1>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} {task.done ? "✔️" : "❌"}
              </li>
            ))}
          </ul>


        </div>
    )
}

export default Login;