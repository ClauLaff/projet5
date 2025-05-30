import './Carrousel.scss';
import { useState } from 'react';

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
      {pictures.length>1 && <p className="picture-number">{index+1}/{pictures.length}</p>}
      {pictures.length>1 && <button className="btn-forward" onClick={forward}><img src="/src/assets/forward.png"/></button>}
      <img src={pictures[index]} alt={`Photo ${index}`}/>
    </div>
    )
}
export default Carrousel