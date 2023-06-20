import React,{ useState } from "react";
import Places from "./components/Places";
import data from "./data";





const App = () => {

  const  [Data,setdata] = useState(data);



function removeitem(id)
{
   const newdata=Data.filter(place=> place.id!==id);
    setdata(newdata);

}

  



  return (

  <div>
  <h1>Plan with Darshan Soni</h1>

  <Places data={Data} removeitem={removeitem}  />


  </div>);
};

export default App;
