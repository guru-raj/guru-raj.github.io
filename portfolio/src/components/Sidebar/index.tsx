import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import LogoG from '../../assets/images/logo-g.png'
import LogoSubtitle from '../../assets/images/logo-subtitle.png'
import './index.scss'

const Sidebar = () => {
    return <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoG} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="subtitle" />
        </Link>
        <nav>
            <NavLink end to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink end className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink end className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
}

export default Sidebar