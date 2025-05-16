import logements from '/src/data/logements.json';
import './Gallery.scss';

function Gallery(){
    return(
        <div className="gallery">
            {logements.map((logement)=>(
                <div key={logement.id} className="card"><div className="card-name">{logement.title}</div></div>
            ))}
       </div>
    )
}
export default Gallery