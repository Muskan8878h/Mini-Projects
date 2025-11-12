import { useState, useEffect } from "react";

function AnalogClock({ size = 250 }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let animationFrame;

    const update = () => {
      setTime(new Date());
      animationFrame = requestAnimationFrame(update); // smooth updates
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame); // cleanup
  }, []);

  // Extract hours, minutes, seconds, and milliseconds
  const ms = time.getMilliseconds();
  const seconds = time.getSeconds() + ms / 1000;
  const minutes = time.getMinutes() + seconds / 60;
  const hours = time.getHours() % 12 + minutes / 60;

  // Angles
  const secondDeg = seconds * 6; // 360/60
  const minuteDeg = minutes * 6; // 360/60
  const hourDeg = hours * 30; // 360/12

  // Clock styles based on size
  const center = size / 2;
  const handStyles = {
    position: "absolute",
    left: `${center - 1}px`,
    transformOrigin: "bottom center",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Analog Clock</h1>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: "6px solid black",
          borderRadius: "50%",
          margin: "20px auto",
          position: "relative",
          background: "white",
        }}
      >
        {/* Hour marks (numbers 1–12) */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30; // each number 30°
          const rad = (Math.PI / 180) * angle;
          const r = size / 2 - 25; // distance from center
          const x = center + r * Math.sin(rad);
          const y = center - r * Math.cos(rad);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${x - 10}px`,
                top: `${y - 10}px`,
                fontSize: `${size * 0.07}px`,
                fontWeight: "bold",
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* Hour hand */}
        <div
          style={{
            ...handStyles,
            width: "6px",
            height: `${size * 0.25}px`,
            backgroundColor: "black",
            top: `${center - size * 0.25}px`,
            transform: `rotate(${hourDeg}deg)`,
            borderRadius: "4px",
          }}
        />
        {/* Minute hand */}
        <div
          style={{
            ...handStyles,
            width: "4px",
            height: `${size * 0.35}px`,
            backgroundColor: "black",
            top: `${center - size * 0.35}px`,
            transform: `rotate(${minuteDeg}deg)`,
            borderRadius: "4px",
          }}
        />
        {/* Second hand */}
        <div
          style={{
            ...handStyles,
            width: "2px",
            height: `${size * 0.45}px`,
            backgroundColor: "red",
            top: `${center - size * 0.45}px`,
            transform: `rotate(${secondDeg}deg)`,
            borderRadius: "2px",
          }}
        />
        {/* Center circle */}
        <div
          style={{
            position: "absolute",
            width: `${size * 0.05}px`,
            height: `${size * 0.05}px`,
            backgroundColor: "black",
            borderRadius: "50%",
            top: `${center - size * 0.025}px`,
            left: `${center - size * 0.025}px`,
          }}
        />
      </div>
    </div>
  );
}

export default AnalogClock;
