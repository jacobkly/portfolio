import { useState } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("");

    const handleSetActive = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div id="navbar">
            <div id="nav-links">
                <ul>
                    <li><a href="/#home"
                        className={`barlow-regular ${activeLink === 'home' ? 'active' : ''}`}
                        onClick={() => handleSetActive('home')}
                    >Home</a></li>
                    <li><a href="/#about"
                        className={`barlow-regular ${activeLink === 'about' ? 'active' : ''}`}
                        onClick={() => handleSetActive('about')}
                    >About</a></li>
                    <li><a href="/#projects"
                        className={`barlow-regular ${activeLink === 'projects' ? 'active' : ''}`}
                        onClick={() => handleSetActive('projects')}
                    >Projects</a></li>
                    <li><a href="/#contact"
                        className={`barlow-regular ${activeLink === 'contact' ? 'active' : ''}`}
                        onClick={() => handleSetActive('contact')}
                    >Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
