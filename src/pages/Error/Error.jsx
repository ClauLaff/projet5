import './Error.scss';
import {Link} from "react-router";

function Error() {

  return (
    <div className="error-page">
      <div className="error-code">404</div>
      <div className="error-text">Oups! La page que vous demandez n'existe pas!</div>
      <Link className="error-lien-accueil" to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
  }
  
  export default Error
  