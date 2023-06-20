
import data from "./data";
import { useState } from "react";

function Refresh_page({Setitem})
{



    return(

       <div onClick={Setitem()}>Refresh</div>
    );
};
export default Refresh_page;