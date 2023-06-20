import "./Places.css";
import Place from "./Place";

function Places(props)
{


    for( let i of props.data)
    {
        for(let key in i)
        {
            console.log(i[key]);
        }
    }

return(

    <div>
   

    {props.data[0].id}
    </div>
);
    

};

export default Places;