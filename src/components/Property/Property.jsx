import Carrousel from '../Carrousel/Carrousel';
import './Property.scss';
import Collapse from "../Collapse/Collapse";

function Property(props){
    const range=[1, 2, 3, 4, 5];
    const equipments=<ul className="list">{props.equipments.map((equipment, index)=>(<li key={index}>{equipment}</li>))}</ul>

    return(
         <div className="property">
            <Carrousel pictures={props.pictures}/>
            <div className="informations">
                <div className="header">
                    <div className="title-and-location">
                        <h1 className="title">{props.title}</h1>
                        <p className="location">{props.location}</p>
                    </div>
                    <div className="host">
                        <p className="host-name">{props.host.name}</p>
                        <img className="host-picture" src={props.host.picture} alt="Photo de l'hôte"/>
                    </div>
                </div>
                <div className="tags-and-rating">
                    <div className="tags">
                        {props.tags.map((tag, index)=>(
                            <div key={index} className="tag">{tag}</div>
                        ))}
                    </div>
                    <div className="rating">
                        {range.map((rangeElement, index)=>(
                            rangeElement<=props.rating?<img key={index} src="/src/assets/star-active.png" alt="étoile active"/>:<img key={index} src="/src/assets/star-inactive.png" alt="étoile inactive"/>
                        ))}
                    </div>
                </div>
                <div className="description-and-equipments">
                    <div className="description"><Collapse btnText="Description" contentText={props.description}/></div>
                    <div className="equipments"><Collapse btnText="Équipements" contentText={equipments}/></div>
                </div>
            </div>
        </div>
    )  
}
export default Property