import './Carrousel.scss';
import '/src/data/logements.json';
import { forwardRef, useState } from 'react';

function Carrousel({pictures}){
   const [index, setIndex]=useState(0);
   const forward=()=>{
    setIndex((prevIndex)=>(prevIndex+1) % pictures.length)
  };
  const backward=()=>{
    setIndex((prevIndex)=>(prevIndex-1 + pictures.length) % pictures.length)
  };

    return(
    <div className="carrousel">
      {pictures.length>1 && <button className="btn-backward" onClick={backward}><img src="/src/assets/backward.png"/></button>}
      {pictures.length>1 && <button className="btn-forward" onClick={forward}><img src="/src/assets/forward.png"/></button>}
      <img src={pictures[index]} alt="Photo0"/>
    </div>
    )
}
export default Carrousel