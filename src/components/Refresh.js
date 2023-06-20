import { useState } from "react";
import data from "../data";



function Refresh({reset})
{
return(
   

    <div onClick={reset}>Refresh</div>

);
}

export default Refresh;