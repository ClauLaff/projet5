import { useState } from "react";
import './Collapse.scss';

function Collapse(){

    const [isOpen, setIsOpen]=useState(false);

    return isOpen?(
        <div className="collapse">
            <div className="collapse-bar">
                <p>Collapse</p>
                <img src="/src/assets/open.png" alt="Ouvert" onClick={()=>setIsOpen(false)}/>
            </div>
            <p>Coucou!</p>
        </div>
    ):(
        <div className="collapse-bar">
            <p>Collapse</p>
            <img src="/src/assets/closed.png" alt="Fermé" onClick={()=>setIsOpen(true)}/>
        </div>
    )
}
export default Collapse