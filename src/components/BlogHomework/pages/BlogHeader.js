import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './BlogHeader.scss';

export default function BlogHeader({ setPage }) {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        <FontAwesomeIcon icon={faHome} className="fa-icon" />
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
