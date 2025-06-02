import { Link, NavLink} from "react-router";
import logo from "/src/assets/logo.png";
import "./Header.scss";

 function Header() {
    return (
    <header>
        <div className="header">
            <Link to="/"><img className="logo" src={logo} alt="Kasa"/></Link>
            <nav>
                <NavLink className="navlink" to="/">Accueil</NavLink>
                <NavLink className="navlink" to="/About">À propos</NavLink>
            </nav>
        </div>
    </header>
    )
  }
  export default Header
  