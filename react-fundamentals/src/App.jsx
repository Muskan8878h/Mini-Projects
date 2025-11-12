import { useState } from "react";
import Counter from './Counter.jsx';
import Controlled from './Controlled.jsx';
import ToDo from "./ToDo.jsx";
import LiveClock from "./LiveClock.jsx";
import Login from "./Login.jsx";
import UserData from "./UserData.jsx";
import AnalogClock from "./AnalogClock.jsx";
import Analog from "./Analog.jsx";
import ApiFetch from "./ApiFetch.jsx";
import InlineCss from "./inlineCss.jsx";
// import TailwindComponent from "./TailwindCss.jsx";
import StyledComponent from "./StyledComponent.jsx";
// import Props from "./ReactProps1.jsx";
import FetchUsersAxios from "./ApiFetchaxios.jsx";
import ListAndKeys from "./ListAndKeys.jsx";




// parent component
function App(){

  // const fruits =["apple","banana","orange","grape"];
  return (
    <div style={{textAlign:"center", marginTop: "0px" ,backgroundColor:"grey" }}>

      {/* <Props  /> */}

      <FetchUsersAxios />
      <ListAndKeys />
      <Counter />
      <LiveClock />
      <AnalogClock />
      <Analog />
      <Controlled />
        <Login />
        <ToDo />
        <UserData />
        <ApiFetch />

        <InlineCss />
      {/* <TailwindComponent/> */}
      <StyledComponent />
    </div>
  )
}

export default App;
