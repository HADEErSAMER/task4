import "./Selectionitem.css"

import elli from "../../assets/icon-ellipsis.svg"


function Selectionitem(props){
    return(
        
        <div id="minidiv" style={{backgroundColor: props.Selectioncolor}}>
                 
        <div id="iconsdiv">
        <img id="icon" src={props.sideimg}/>
        </div>
        <div id="hrsdiv">
            <div id="workdiv">
           <label id="worklabel">{props.actifitylabel}</label>
        <img id="elli" src={elli}/>
        </div>
         <label id="bolder">{props.time}</label>
        <label className="report">{props.timedetails} </label>
        </div>
       



       


               
        </div>





        
            
    )
}

export default Selectionitem