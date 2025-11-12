import {useState,useEffect} from 'react';

function LiveClock(){
    const [time,setTime] =useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(timer);
    }, []);
    return (
        <div style={{textAlign:"center", marginTop:"30px"}}>
            <h1>Live Clock</h1>
            <h2>{time}</h2>         
        </div>
    )
}

export default LiveClock;