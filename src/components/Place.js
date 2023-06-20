import "./Place.css";
import { useState } from "react";
function Place({name,id,image,info,price,removeitem})
{
const [readmore,setreadmore]=useState(false);
const  content=readmore? info:info.substring(0,200)+"...";
const [description,set_description]=useState(content);


function readmodehandler()
{
    setreadmore(!readmore);
    set_description(content);
}

    return(
<div>

<img src={image}></img>
<h4 className=" bg-slate-600">{price}</h4>
<h4>{name}</h4>
<info>{description}</info>
<span onClick={readmodehandler}>
    {
        readmore?"ReadMore":"Show less"
    }
</span>
<button onClick={()=>removeitem(id)}>not interested</button>

</div>
   );
};
export default Place;
