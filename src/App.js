import React,{ useState } from "react";
import Places from "./components/Places";
import data from "./data";





const App = () => {




   const  [Data,setdata] = useState(data);
   
  return (
  <div>
  <h1>Plan with Darshan Soni</h1>

  <Places data={Data} />


  </div>);
};

export default App;
