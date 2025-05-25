import { useState } from "react";
import './Collapse.scss';

function Collapse(props){

    const [isOpen, setIsOpen]=useState(false);

   return isOpen?(
    <div className="collapse">
        <button className="collapse-btn" onClick={()=>setIsOpen(false)}>{props.btnText}<img className="open" src="/src/assets/arrow.png"alt="ouvert"/></button>
        <div className="collapse-content-open">{props.contentText}</div> 
    </div>
   ):(
    <div className="collapse">
        <button className="collapse-btn" onClick={()=>setIsOpen(true)}>{props.btnText}<img className="closed" src="/src/assets/arrow.png"alt="fermé"/></button>
        <div className="collapse-content-closed">{props.contentText}</div> 
    </div>
   )
}
export default Collapse