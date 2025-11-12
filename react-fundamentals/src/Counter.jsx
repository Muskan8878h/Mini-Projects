import { useState } from "react";


function Counter({step=2,min=0,max=50}){
    // this is state....
    const [count,setCounter]=useState(0);
    return (
        <div style={{textAlign:"center", marginTop:"20px"}}>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCounter(count-step)} disabled={count<=min}>-{step}</button>
            <button onClick={()=>setCounter(count+step)} disabled={count>=max}>+{step}</button>
        </div>
    )
}


// // child componenet
// function Counter({count, onIncrement, onDecrement}) {
    
//   const [count,setCount]=useState(0);

//   const increment=()=>setCount(count+1);
//   const decrement=()=>setCount(count-1);

//     return(
//         <div style={{ margin: "10px" }}>
//             <h2>Count: {count}</h2>
//             <button onClick={onDecrement}>-</button>
//             <button onClick={onIncrement}>+</button>

//             <Counter count={count} onIncrement={increment} onDecrement={decrement} />
//             <Counter count={count} onIncrement={increment} onDecrement={decrement} />
//         </div>
//     )
// }

export default Counter;


{/* props defin configuration */}
      {/* <Counter step={2} min={0} max={10} />
      <Counter step={5} min={50} max={100} />
      <Counter step={1} min={-5} max={5} /> */}