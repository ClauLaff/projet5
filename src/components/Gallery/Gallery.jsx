import logements from '/src/data/logements.json';
import {Link} from "react-router";
import './Gallery.scss';

function Gallery(){
    return(
        <div className="gallery">
            {logements.map((logement)=>(
                <div key={logement.id} className="card" style={{backgroundImage:`url(${logement.cover})`}}>
                    <Link className="card-name" to="/Properties">{logement.title}</Link>
                </div>
            ))}
       </div>
    )
}
export default Gallery