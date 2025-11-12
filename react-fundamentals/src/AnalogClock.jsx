import { useState, useEffect } from "react"; 

// useState: a React hook that lets a component hold state (data that changes over time).
// useEffect: a hook to run side effects (timers, subscriptions, DOM, fetching…). React runs it after render.

function AnalogClock() {
  // [time, setTime] — array destructuring.
  const [time,setTime] = useState(new Date());  //useState(new Date()) — initial state is a Date object for “now”.
  
    // useEffect(callback, depsArray)
       // React runs callback after the component first renders.
       // The deps array [] is empty ⇒ run this effect only once (on mount), and run cleanup on unmount.

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); //ms
    return () => clearInterval(timer);  //stops the timer when the component unmounts (prevents memory leaks / zombie timers).
  }, []);

  // Extract hours, minutes, seconds
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate rotation angles
  const secondDeg = seconds * 6; // 360deg / 60  ==== 6° per second.
  const minuteDeg = minutes * 6 + seconds * 0.1; // smooth movement
  const hourDeg = hours * 30 + minutes * 0.5; // 360/12 + adjust by minutes

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Analog Clock</h1>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "6px solid black",
          borderRadius: "50%",
          margin: "20px auto",
          position: "relative",
          //position: "relative": so children with position: "absolute" use this as their positioning context.
        }}
      >
        {/* Hour hand */}
        <div
          style={{
            position: "absolute",
            width: "6px",
            height: "50px",
            backgroundColor: "black",
            top: "50px",
            left: "97px",
            transform: `rotate(${hourDeg}deg)`, //rotate by the computed degrees.
            transformOrigin: "bottom center", //the point that stays fixed when rotating (the “pivot”).
            borderRadius: "4px",
          }}
        />
        {/* Minute hand */}
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "70px",
            backgroundColor: "black",
            top: "30px",
            left: "98px",
            transform: `rotate(${minuteDeg}deg)`,
            transformOrigin: "bottom center",
            borderRadius: "4px",
          }}
        />
        {/* Second hand */}
        <div
          style={{
            position: "absolute",
            width: "2px",
            height: "90px",
            backgroundColor: "red",
            top: "10px",
            left: "99px",
            transform: `rotate(${secondDeg}deg)`,
            transformOrigin: "bottom center",
            borderRadius: "2px",
          }}
        />
        {/* Center circle */}
        <div
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            backgroundColor: "black",
            borderRadius: "50%",
            top: "94px",
            left: "94px",
          }}
        />
      </div>
    </div>
  );
}

export default AnalogClock;
