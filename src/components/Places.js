import "./Places.css";
import Place from "./Place";

function Places({data ,removeitem})
{

return(
    <div className="containor">
    <h1 className="title">Plan with Darshan Soni</h1>
    <div className="places">
    {
        

      data.map((data)=><Place{...data} removeitem={removeitem}/> ) 
       /* data.map((data,removeitem)=>place)  */
     
    }

    </div>
    </div>

);
    
// function place(data,removeitem){

//     let content= <Place {...data} removeitem={removeitem}> </Place>;
//     return content;

// }
};



export default Places;