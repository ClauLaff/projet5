import Carrousel from '../Carrousel/Carrousel';
import './Property.scss';
import Collapse from "../Collapse/Collapse";

function Property(props){
    
    const range=[1, 2, 3, 4, 5];
    const equipments=<ul className="list">{props.equipments.map((equipment, index)=>(<li key={index}>{equipment}</li>))}</ul>;

    return(
         <div className="property">
            <Carrousel pictures={props.pictures}/>
            <div className="informations">

                <section className="title-and-host">
                    <div className="title">
                        <h1 className="title-text">{props.title}</h1>
                        <p className="title-location">{props.location}</p>
                    </div>
                    <div className="host">
                        <p className="host-name">{props.host.name}</p>
                        <img className="host-picture" src={props.host.picture} alt="Photo de l'hôte"/>
                    </div>
                </section>

                <section className="tags-and-rating">
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
                </section>

                <section className="rating-and-host-mobile">
                    <div className="rating-mobile">
                        {range.map((rangeElement, index)=>(
                            rangeElement<=props.rating?<img key={index} src="/src/assets/star-active.png" alt="étoile active"/>:<img key={index} src="/src/assets/star-inactive.png" alt="étoile inactive"/>
                        ))}
                    </div>
                    <div className="host-mobile">
                        <p className="host-name-mobile">{props.host.name}</p>
                        <img className="host-picture-mobile" src={props.host.picture} alt="Photo de l'hôte"/>
                    </div>
                </section>
                
                <section className="description-and-equipments">
                    <div className="description"><Collapse btnText="Description" contentText={props.description}/></div>
                    <div className="equipments"><Collapse btnText="Équipements" contentText={equipments}/></div>
                </section>
            </div>
        </div>
    )  
}
export default Property