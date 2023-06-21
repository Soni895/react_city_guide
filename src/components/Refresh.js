import { useState } from "react";
import data from "../data";



function Refresh({reset})
{
return(
   

    <div className="  text-white font-bold flex h-screen w-screen  items-center  justify-center" onClick={reset}>

        <button className=" bg-slate-500  py-5 px-14  border-black border-2 rounded-md hover:bg-slate-700">Refresh</button>
    </div>

);
}

export default Refresh;