import './Properties.scss';
import logements from '/src/data/logements.json';
import Property from '../../components/Property/Property';
import { useParams } from 'react-router';

function Properties(){
    const {id}=useParams();
    console.log (id);

    return(
        <main>
        <div className="properties">
            {logements.map((logement)=>(
                (id) == logement.id &&
                <Property className="logement" key={logement.id} id={logement.id} pictures={logement.pictures} title={logement.title}
                    description={logement.description} host={logement.host} rating={logement.rating}
                    location={logement.location} equipments={logement.equipments} tags={logement.tags}
                />
            ))}
        </div>
        </main>
    )
    
}
export default Properties