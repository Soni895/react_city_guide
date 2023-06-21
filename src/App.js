import React,{ useState } from "react";
import Places from "./components/Places";
import data from "./data";
import Refresh from "./components/Refresh";



const App = () => {
  const  [Data,setdata] = useState(data);
  function removeitem(id)
{  
   const newdata=Data.filter(place=> place.id!==id);
    setdata(newdata);
   
}

function reset()
{
  setdata(data);
}

if(Data.length===0)
{
  return(
    
 <Refresh reset={reset}/>

  );

}
  
  return (

  <div>
  <h1>Plan with Darshan Soni</h1>

  <Places data={Data} removeitem={removeitem}  />


  </div>);
};

export default App;
