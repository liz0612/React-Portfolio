import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Developer Name</h1>
            <nav>
                <NavLink to="/" end>About Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    );
}

export default Header;