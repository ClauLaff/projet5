import Collapse from "../../components/Collapse/Collapse";
import "./About.scss";
import Banner from '/src/components/Banner/Banner.jsx'

function About() {
  const fiabilite="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logements, et toutes les informations sont régulièremnt vérifiées par nos équipes. ";
  const respect="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. ";
  const service="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit emprunte de respect et de bienveillance. ";
  const securite="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. ";

    return (
      <div>
        <Banner bannerName="banner-about" overlayName="overlay-about" innerText=""/>
        <div className="menu">
          <Collapse btnText="Fiabilité" contentText={fiabilite}/>
          <Collapse btnText="Respect" contentText={respect}/>
          <Collapse btnText="Service" contentText={service}/>
          <Collapse btnText="Sécurité" contentText={securite}/>
        </div>
      </div>
    )
  }
  
  export default About
  