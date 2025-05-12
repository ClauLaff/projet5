import { NavLink} from "react-router"
import logo from "../assets/logo.png"
import "../styles/header.css"

 export function Header() {
    return (
    <div className="header">
        <img src={logo} alt="Kasa"/>
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/About">À propos</NavLink>
        </nav>
    </div>
    )
  }
  export default Header
  