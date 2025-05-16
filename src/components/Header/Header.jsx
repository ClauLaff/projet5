import { NavLink} from "react-router";
import logo from "/src/assets/logo.png";
import "./Header.scss";

 function Header() {
    return (
    <header>
        <div className="header">
            <img src={logo} alt="Kasa"/>
            <nav>
                <NavLink className="navlink" to="/">Accueil</NavLink>
                <NavLink className="navlink" to="/About">À propos</NavLink>
            </nav>
        </div>
    </header>
    )
  }
  export default Header
  