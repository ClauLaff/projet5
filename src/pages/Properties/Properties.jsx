import './Properties.scss';
import logements from '/src/data/logements.json';
import Property from '../../components/Property/Property';

function Properties(){
    
    return(
        <main>
        <div className="properties">
            {logements.map((logement)=>(
                <Property className="logement" key={logement.id} pictures={logement.pictures} title={logement.title}
                    description={logement.description} host={logement.host} rating={logement.rating}
                    location={logement.location} equipments={logement.equipments} tags={logement.tags}/>
            ))}
        </div>
        </main>
    )
    
}
export default Properties