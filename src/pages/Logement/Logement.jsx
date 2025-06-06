import './Logement.scss';
import logements from '/src/data/logements.json';
import Property from '../../components/Property/Property';
import {  useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';

function Logement(){
    const {id}=useParams();
    const logement= logements.find((logement)=>logement.id === (id));
    const navigate=useNavigate();

    if (logement===undefined){
       
        useEffect(()=>{
            navigate('/*')
        })
        return
    }
    return(  
        <main>
            <Property className="logement" key={logement.id} pictures={logement.pictures} title={logement.title}
                description={logement.description} host={logement.host} rating={logement.rating}
                location={logement.location} equipments={logement.equipments} tags={logement.tags}
            />
        </main>  
    )
    
}
export default Logement