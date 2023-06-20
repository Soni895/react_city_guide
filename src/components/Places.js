import "./Places.css";
import Place from "./Place";

function Places({data})
{



return(

    <div>
    {
    data.map(place)
     
    }

    </div>
);
    

};

function place(data){

    let content= <Place {...data}> </Place>;
    return content;

}

export default Places;