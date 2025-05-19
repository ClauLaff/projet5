import { useState } from "react";
import './Collapse.scss';

function Collapse(){

    const [isOpen, setIsOpen]=useState(false);

   return isOpen?(
    <div className="collapse">
        <button className="collapse-btn" onClick={()=>setIsOpen(false)}>Collapse<img className="open" src="src/assets/arrow.png"alt="ouvert"/></button>
        <div className="collapse-content-open">Content</div> 
    </div>
   ):(
    <div className="collapse">
        <button className="collapse-btn" onClick={()=>setIsOpen(true)}>Collapse<img className="closed" src="src/assets/arrow.png"alt="fermé"/></button>
        <div className="collapse-content-closed">Content</div> 
    </div>
   )
}
export default Collapse