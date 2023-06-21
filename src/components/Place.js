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
<div className="place relative">

<img src={image} className="image"></img>
<div className="info mr-72 mt-5 font-extrabold text-lg   tracking-widest	 leading-4 flex flex-col gap-3"lex-col items-sta>
<h4 className=" tour-info  text-green-400">{price}</h4>
<h4 className="tour-price">{name}</h4>
</div>

<info className="description mt-4 font-semibold leading-8 tracking-wider">{description}
<span className="readmore text-blue-400 cursor-pointer leading-8 " onClick={readmodehandler}>
    {
        readmore?"ReadMore":"Show less"
    }
</span></info>

<button className="remove-item bg-slate-800 px-5 py-3 mr-6 hover:bg-slate-600 text-white mt-5 rounded border-purple-500 " onClick={()=>removeitem(id)}>not interested</button>

</div>
   );
};
export default Place;
