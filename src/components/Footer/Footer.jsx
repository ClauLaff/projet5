import logoWhite from '/src/assets/logo-white.png';
import './Footer.scss';

function Footer(){
    return(
        <footer>
            <div className="footer">
                <img src={logoWhite} alt="Kasa"/>
                <p>
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    )
}
export default Footer