import './Logement.scss';
import logements from '/src/data/logements.json';
import Carrousel from '../../components/Carrousel/Carrousel';

function Logement(){
    
    return(
        <div className="logements">
            {logements.map((logement)=>(
                <Carrousel key={logement.id} pictures={logement.pictures}/>
            ))}
        </div>
    )
    
}
export default Logement