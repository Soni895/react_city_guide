import "./Places.css";
import Place from "./Place";

function Places({data ,removeitem})
{

return(

    <div>
    {
      

        data.map((data)=><Place{...data} removeitem={removeitem}/> ) 
       /* data.map((data,removeitem)=>place)  */
     
    }

    </div>
);
    
// function place(data,removeitem){

//     let content= <Place {...data} removeitem={removeitem}> </Place>;
//     return content;

// }
};



export default Places;