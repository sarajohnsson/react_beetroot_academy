import { NavLink } from 'react-router-dom';

export default function BlogHeader({ setPage }) {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/singleblogpage">Single</NavLink>
            </ul>
        </nav>
    );
}
