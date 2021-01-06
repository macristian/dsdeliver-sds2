import './styles.css';
import { ReactComponent as YouTubeicon } from './youtube.svg';
import { ReactComponent as LinkeDinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="#"  target="_new"><YouTubeicon /></a>
                <a href="#"  target="_new"><LinkeDinIcon /></a>
                <a href="#"  target="_new"><InstagramIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;