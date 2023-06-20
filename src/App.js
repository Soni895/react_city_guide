import React,{ useState } from "react";
import Places from "./components/Places";
// import filterData from "./data";





const App = (props) => {
  const filterData = [
    {
      id: "1",
      title: "All",
    },
    {
      id: "2",
      title: "Development",
    },
    {
      id: "3",
      title: "Business",
    },
    {
      id: "4",
      title: "Design",
    },
    {
      id: "5",
      title: "Lifestyle",
    },
  ];



   const  [data,setdata] = useState(filterData);
   
  return (
  <div>
  <h1>Plan with Darshan Soni</h1>

  <Places data={data} />


  </div>);
};

export default App;
