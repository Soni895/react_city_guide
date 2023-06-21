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
<div className="place">

<img src={image} className="image"></img>
<h4 className=" tour-info">{price}</h4>
<h4 className="tour-price">{name}</h4>
<info className="description">{description}</info>
<span className="readmore" onClick={readmodehandler}>
    {
        readmore?"ReadMore":"Show less"
    }
</span>
<button className="remove-item" onClick={()=>removeitem(id)}>not interested</button>

</div>
   );
};
export default Place;
